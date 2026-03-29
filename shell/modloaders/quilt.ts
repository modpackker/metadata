import { writeLoaderSync } from '../lib';

import type { McVersion } from '../../src/minecraft/_index';
import type { Bindings } from '../../src/loaders/bindings';

export const quilt = async () => {
	const maven = Object.entries(
		await (await fetch('https://quiltmc.org/api/v1/latest-version-components')).json(),
	) as [
		McVersion,
		{
			quilt_loader: string;
		},
	][];

	const bindings: Bindings = {};

	for (const [mcVersion, release] of maven) {
		bindings[mcVersion] = release.quilt_loader;
	}

	writeLoaderSync('modloader', 'quilt', bindings);
};
