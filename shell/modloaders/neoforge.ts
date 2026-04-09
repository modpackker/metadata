import type { Bindings } from '../../src/loaders/bindings.ts';
import type { McVersion } from '../../src/minecraft/_index.ts';
import { writeLoaderSync } from '../lib.ts';

export const neoforge = async () => {
	const loaderVersions = (
		await (
			await fetch('https://maven.neoforged.net/api/maven/versions/releases/net/neoforged/neoforge')
		).json()
	).versions.reverse() as string[];

	const bindings: Bindings = {};

	for (const loaderVersion of loaderVersions) {
		const [major, minor] = loaderVersion.split('.');

		if (major === '26') {
			bindings[`${major}.${minor}` as McVersion] = loaderVersion;
		} else if (major === '0') {
			bindings[minor.replace(/\.0$/, '') as McVersion] = loaderVersion;
		} else {
			bindings[`1.${major}.${minor.replace(/\.0$/, '')}` as McVersion] = loaderVersion;
		}
	}

	writeLoaderSync('modloader', 'neoforge', bindings);

	console.log('NeoForge synced');
};
