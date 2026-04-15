import { writeFileSync } from 'node:fs';

import { McVersion } from '../src/minecraft/version/_index.js';

export const minecraft = async () => {
	const maven = (
		await (await fetch('https://piston-meta.mojang.com/mc/game/version_manifest_v2.json')).json()
	).versions as {
		id: McVersion;
		type: 'release' | 'snapshot';
	}[];

	const mcVersions = maven.map((version) => {
		return version.id;
	});
	const mcMajorVersions = maven
		.filter((version) => {
			return version.type === 'release';
		})
		.map((version) => {
			return version.id;
		});

	writeFileSync(
		'src/minecraft/version/versions.ts',
		`export const mcVersions = ${JSON.stringify(mcVersions, null, '\t').replaceAll(`"`, `'`)} as const satisfies string[];\n`,
	);
	writeFileSync(
		'src/minecraft/version/majorversions.ts',
		`import type { McVersion } from './_index.js';\n\nexport const mcMajorVersions = ${JSON.stringify(mcMajorVersions, null, '\t').replaceAll(`"`, `'`)} as const satisfies McVersion[];\n`,
	);

	console.log('Minecraft synced');
};
