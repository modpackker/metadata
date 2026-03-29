import { writeLoaderSync } from '../lib';

import { McVersion } from '../../src/minecraft/_index';

export const fabric = async () => {
	const mcVersions = (
		(await (await fetch('https://meta.fabricmc.net/v2/versions/game')).json()) as {
			version: McVersion;
		}[]
	).map((release) => {
		return release.version;
	});

	const bindings = Object.fromEntries(
		await Promise.all(
			mcVersions.map((mcVersion) => {
				return fetch(`https://meta.fabricmc.net/v2/versions/loader/${mcVersion}`)
					.then((res) => {
						return res.json();
					})
					.then((res) => {
						return [mcVersion, res[0].loader.version];
					});
			}),
		),
	);

	writeLoaderSync('modloader', 'fabric', bindings);
};
