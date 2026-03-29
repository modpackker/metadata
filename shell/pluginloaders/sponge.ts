import { writeLoaderSync } from '../lib';

import { Bindings } from '../../src/loaders/bindings';
import { McVersion } from '../../src/minecraft/_index';

export const sponge = async () => {
	const maven = [
		...(
			await (
				await fetch(
					'https://repo.spongepowered.org/maven/org/spongepowered/spongevanilla/maven-metadata.xml',
				)
			).text()
		).matchAll(/<version>([^<]+)<\/version>/g),
	]
		.map((m) => {
			return m[1];
		})
		.reverse();

	const bindings: Bindings = {};

	for (const version of maven) {
		const parts = version.split('-');

		if (
			['DEV', 'SNAPSHOT', 'BETA'].includes(parts[2]) ||
			['DEV', 'SNAPSHOT', 'BETA'].includes(parts[3])
		) {
			continue;
		}

		switch (parts.length) {
			case 2: {
				bindings[parts[0] as McVersion] = parts[1];

				break;
			}
			case 3: {
				bindings[parts[0] as McVersion] = `${parts[1]}-${parts[2]}`;

				break;
			}
			case 4: {
				bindings[`${parts[0]}-${parts[1]}` as McVersion] = `${parts[2]}-${parts[3]}`;

				break;
			}
			case 5: {
				bindings[`${parts[0]}-${parts[1]}-${parts[2]}` as McVersion] = `${parts[3]}-${parts[4]}`;

				break;
			}
			default: {
				console.log(version.split('-'));

				break;
			}
		}
	}

	writeLoaderSync('pluginloader', 'sponge', bindings);
};
