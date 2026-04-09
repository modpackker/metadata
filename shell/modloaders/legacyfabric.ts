import type { Bindings } from '../../src/loaders/bindings';
import type { McVersion } from '../../src/minecraft/version/_index';
import { writeLoaderSync } from '../lib';

export const legacyfabric = async () => {
	const mcVersions = (
		(await (await fetch('https://meta.legacyfabric.net/v2/versions/game')).json()) as {
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
				return fetch(`https://meta.legacyfabric.net/v2/versions/loader/${mcVersion}`)
					.then((res) => {
						return res.json() as Promise<
							{
								loader: {
									version: string;
									stable: boolean;
								};
							}[]
						>;
					})
					.then((res) => {
						return [
							mcVersion,
							res.find((maven) => {
								return maven.loader.stable;
							})!.loader.version,
						];
					});
			}),
		),
	);

	writeLoaderSync('modloader', 'legacyfabric', bindings);

	console.log('LegacyFabric synced');
};
