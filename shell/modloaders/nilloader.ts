import type { Bindings } from '../../src/loaders/bindings';
import { mcVersions, type McVersion } from '../../src/minecraft/version/_index';
import { writeLoaderSync } from '../lib';

export const nilloader = async () => {
	const loaderVersion = [
		...(
			await (
				await fetch('https://repo.sleeping.town/com/unascribed/nilloader/maven-metadata.xml')
			).text()
		)
			.matchAll(/<version>(.+)<\/version>/g)
			.map((match) => {
				return match[1];
			}),
	].at(-1) as McVersion;

	const bindings: Bindings = Object.fromEntries(
		mcVersions.map((mcVersion) => {
			return [mcVersion, loaderVersion];
		}),
	);

	writeLoaderSync('modloader', 'nilloader', bindings);
};
