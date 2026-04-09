import { ProjectBindings } from '../../src/loaders/bindings';
import { ModLoader } from '../../src/loaders/modloaders/_index';
import { McVersion } from '../../src/minecraft/version/_index';
import { writeLoaderSync } from '../lib';

export const iris = async () => {
	const maven = (await (await fetch('https://api.modrinth.com/v3/project/iris')).json()) as {
		game_versions: McVersion[];
		loaders: ModLoader[];
	};
	const mcVersions = maven.game_versions.reverse();

	const bindings: ProjectBindings = {};

	for (const loader of maven.loaders) {
		bindings[loader] = {};
	}

	const releases = (await (
		await fetch('https://api.modrinth.com/v3/project/iris/version')
	).json()) as {
		version_number: string;
		loaders: ModLoader[];
		game_versions: McVersion[];
	}[];

	for (const loader of maven.loaders) {
		for (const mcVersion of mcVersions) {
			const release = releases.find((release) => {
				return release.loaders.includes(loader) && release.game_versions.includes(mcVersion);
			});

			if (!release) {
				continue;
			}

			bindings[loader]![mcVersion] = release.version_number;
		}
	}

	writeLoaderSync('shaderloader', 'iris', bindings);

	console.log('Iris synced');
};
