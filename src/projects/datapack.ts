import type { Version } from '../minecraft';

export type Datapack = {
	context: 'vanilla';
	scope: 'static';
	type: 'datapack';
	edition: 'java';
	versions: Version[];
	gameplayEnv: {
		singleplayer: true;
		multiplayer: 'client';
	};
};
