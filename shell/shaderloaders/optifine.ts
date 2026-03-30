import { writeLoaderSync } from '../lib';

import type { ProjectBindings } from '../../src/loaders/bindings';
import type { McVersion } from '../../src/minecraft/version/_index';

export const optifine = async () => {
	const html = await (await fetch('https://optifine.net/downloads')).text();

	const regex = /http:\/\/optifine\.net\/adloadx\?f=OptiFine_(.+)\.jar/g;

	const bindings: ProjectBindings = {
		vanilla: {},
	};

	for (const match of html.matchAll(regex)) {
		const [mcVersion, ...rest] = match[1].split('_');

		bindings.vanilla![mcVersion.replace(/\.0$/, '') as McVersion] = rest.join(' ');
	}

	writeLoaderSync('shaderloader', 'optifine', bindings);
};
