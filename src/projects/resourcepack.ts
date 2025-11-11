import type { Edition, Version } from '../minecraft';

export type ResourcePack = {
	context: 'vanilla';
	integrationType: 'static';
	type: 'resourcepack';
	edition: Edition;
	versions: Version[];
	gameplayEnv: {
		singleplayer: true;
		multiplayer: 'client';
	};
};
