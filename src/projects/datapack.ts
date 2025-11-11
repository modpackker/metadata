import type { Version } from '../minecraft';

export type Datapack = {
	context: 'vanilla';
	integrationType: 'static';
	type: 'datapack';
	edition: 'java';
	versions: Version[];
	gameplayEnv: {
		singleplayer: true;
		multiplayer: 'client';
	};
};
