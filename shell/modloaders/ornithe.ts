import type { Bindings } from '../../src/loaders/bindings.js';
import type { McVersion } from '../../src/minecraft/version/_index.js';
import { writeLoaderSync } from '../lib.js';

export const ornithe = async () => {
	const mcVersions = (
		(await (await fetch('https://meta.ornithemc.net/v2/versions/game')).json()) as {
			version: McVersion;
			stable: boolean;
		}[]
	)
		.filter((maven) => {
			return maven.stable;
		})
		.map((maven) => {
			return maven.version;
		});

	const bindings: Bindings = Object.fromEntries(
		await Promise.all(
			mcVersions.map((mcVersion) => {
				return fetch(`https://meta.ornithemc.net/v2/versions/loader/${mcVersion}`)
					.then((res) => {
						return res.json() as Promise<
							{
								version: string;
							}[]
						>;
					})
					.then((res) => {
						return [mcVersion, res[0].version];
					});
			}),
		),
	);

	writeLoaderSync('modloader', 'ornithe', bindings);

	console.log('Ornithe synced');
};
