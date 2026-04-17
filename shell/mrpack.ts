import { writeFileSync } from 'node:fs';

import type { McVersion } from '../src/minecraft/_index.js';

export const mrpack = async () => {
	const mcVersions = (
		(await (await fetch('https://api.modrinth.com/v2/tag/game_version')).json()) as {
			version: McVersion;
		}[]
	).map((maven) => {
		return maven.version;
	});

	writeFileSync(
		'src/mrpack/versions.ts',
		`import type { McVersion } from '../minecraft/_index.js';\n\nexport const mrpackMcVersions = ${JSON.stringify(mcVersions, null, '\t').replaceAll(`"`, `'`)} as const satisfies (McVersion | (string & {}))[];\n`,
	);

	console.log('Mrpack synced');
};
