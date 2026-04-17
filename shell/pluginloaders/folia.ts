import type { McVersion } from '../../src/minecraft/_index.js';
import { writeLoaderSync } from '../lib.js';

export const folia = async () => {
	const mcVersions = Object.values(
		(
			(await (await fetch('https://fill.papermc.io/v3/projects/folia')).json()) as {
				versions: [McVersion[]];
			}
		).versions,
	).flat();

	const bindings = Object.fromEntries(
		await Promise.all(
			mcVersions.map((mcVersion) => {
				return fetch(`https://fill.papermc.io/v3/projects/folia/versions/${mcVersion}`)
					.then((res) => {
						return res.json() as Promise<{
							builds: number[];
						}>;
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
