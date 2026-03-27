import type { Context } from '../context.js';
import type { Edition, McVersion, MultiplayerEnv } from '../minecraft/_index.js';

import type { ProjectType } from './_index.js';

export type Metadata = {
	type: ProjectType;
	context: Context;
	editions: Edition[];
	versions: McVersion[];
	gameplayEnvs: {
		singleplayer: boolean;
		multiplayer: false | MultiplayerEnv[];
	};
};
