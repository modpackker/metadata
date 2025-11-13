import type { MultiplayerEnv, Version } from '../minecraft';
import type { ModLoader } from '../loaders';

export type Modpack = {
	context: 'modding';
	scope: 'code';
	type: 'modpack';
	edition: 'java';
	versions: Version[];
	loaderType: 'modloader';
	loaders: ModLoader[];
	gameplayEnv: {
		singleplayer: boolean;
		multiplayer: false | MultiplayerEnv;
	};
};
