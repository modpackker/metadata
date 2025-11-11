import type { ModLoader } from '../loaders';
import type { MultiplayerEnv, Version } from '../minecraft';

export type Mod = {
	context: 'modding';
	integrationType: 'code';
	type: 'mod';
	edition: 'java';
	versions: Version[];
	loaderType: 'modloader';
	loaders: ModLoader[];
	gameplayEnv: {
		singleplayer: boolean;
		multiplayer: false | MultiplayerEnv;
	};
};
