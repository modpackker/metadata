import { McVersion } from '../../src/minecraft/_index';
import { writeLoaderSync } from '../lib';

export const folia = async () => {
	const mcVersions = Object.values(
		(await (await fetch('https://fill.papermc.io/v3/projects/folia')).json()).versions,
	).flat() as McVersion[];

	const bindings = Object.fromEntries(
		await Promise.all(
			mcVersions.map((mcVersion) => {
				return fetch(`https://fill.papermc.io/v3/projects/folia/versions/${mcVersion}`)
					.then((res) => {
						return res.json();
					})
					.then((res) => {
						return [mcVersion, res.builds[0].toString()];
					});
			}),
		),
	);

	writeLoaderSync('pluginloader', 'folia', bindings);

	console.log('Folia synced');
};
