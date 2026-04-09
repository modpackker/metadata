import type { Bindings } from '../../src/loaders/bindings.ts';
import type { McVersion } from '../../src/minecraft/version/_index.ts';
import { writeLoaderSync } from '../lib.ts';

export const forge = async () => {
	const maven = Object.entries(
		(
			await (
				await fetch(
					'https://files.minecraftforge.net/net/minecraftforge/forge/promotions_slim.json',
				)
			).json()
		).promos,
	).reverse() as [McVersion, string][];

	const bindings: Bindings = {};

	for (const [mcVersion, loaderVersion] of maven) {
		if (mcVersion.endsWith('-latest')) {
			bindings[mcVersion.replaceAll('-latest', '').replace(/\.0$/, '') as McVersion] =
				loaderVersion.replaceAll('-latest', '');
		}
	}

	writeLoaderSync('modloader', 'forge', bindings);

	console.log('Forge synced');
};
