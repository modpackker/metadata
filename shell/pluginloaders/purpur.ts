import { McVersion } from '../../src/minecraft/_index.ts';
import { writeLoaderSync } from '../lib.ts';

export const purpur = async () => {
	const mcVersions = (
		(await (await fetch('https://api.purpurmc.org/v2/purpur')).json()) as {
			versions: McVersion[];
		}
	).versions.reverse();

	const bindings = Object.fromEntries(
		await Promise.all(
			mcVersions.map((mcVersion) => {
				return fetch(`https://api.purpurmc.org/v2/purpur/${mcVersion}`)
					.then((res) => {
						return res.json();
					})
					.then((res) => {
						return [mcVersion, res.builds.latest];
					});
			}),
		),
	);

	writeLoaderSync('pluginloader', 'purpur', bindings);

	console.log('Purpur synced');
};
