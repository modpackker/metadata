import { writeLoaderSync } from '../lib';

import { Bindings } from '../../src/loaders/bindings';
import { McVersion } from '../../src/minecraft/_index';

export const purpur = async () => {
	const mcVersions = (
		(await (await fetch('https://api.purpurmc.org/v2/purpur')).json()).versions as McVersion[]
	).reverse();

	const bindings: Bindings = {};

	for (const mcVersion of mcVersions) {
		const version = (await (await fetch(`https://api.purpurmc.org/v2/purpur/${mcVersion}`)).json())
			.builds.latest;

		bindings[mcVersion] = version;
	}

	writeLoaderSync('pluginloader', 'purpur', bindings);
};
