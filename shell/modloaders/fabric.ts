import type { McVersion } from '../../src/minecraft/_index.js';
import { writeLoaderSync } from '../lib.js';

const irrelevantMcVersions = [
	'1.21.11_unobfuscated',
	'1.21.11-rc3_unobfuscated',
	'1.21.11-rc2_unobfuscated',
	'1.21.11-rc1_unobfuscated',
	'1.21.11-pre5_unobfuscated',
	'1.21.11-pre4_unobfuscated',
	'1.21.11-pre3_unobfuscated',
	'1.21.11-pre2_unobfuscated',
	'1.21.11-pre1_unobfuscated',
	'25w46a_unobfuscated',
	'25w45a_unobfuscated',
	'24w14potato_original',
	'23w13a_or_b_original',
	'1.19_deep_dark_experimental_snapshot-1',
	'1.18_experimental-snapshot-7',
	'1.18_experimental-snapshot-6',
	'1.18_experimental-snapshot-5',
	'1.18_experimental-snapshot-4',
	'1.18_experimental-snapshot-3',
	'1.18_experimental-snapshot-2',
	'1.18_experimental-snapshot-1',
	'1.16_combat-3',
	'1.15_combat-1',
	'1.14_combat-3',
	'1.14_combat-0',
	'1.14_combat-212796',
];

export const fabric = async () => {
	const mcVersions = (
		(await (await fetch('https://meta.fabricmc.net/v2/versions/game')).json()) as {
			version: McVersion;
		}[]
	)
		.filter((maven) => {
			return !irrelevantMcVersions.includes(maven.version);
		})
		.map((release) => {
			return release.version;
		});

	const bindings = Object.fromEntries(
		await Promise.all(
			mcVersions.map((mcVersion) => {
				return fetch(`https://meta.fabricmc.net/v2/versions/loader/${mcVersion}`)
					.then((res) => {
						return res.json() as Promise<
							{
								loader: {
									version: string;
								};
							}[]
						>;
					})
					.then((res) => {
						return [mcVersion, res[0].loader.version];
					});
			}),
		),
	);

	writeLoaderSync('modloader', 'fabric', bindings);

	console.log('Fabric synced');
};
