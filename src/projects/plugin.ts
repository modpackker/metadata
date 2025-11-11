import type { PluginLoader } from '../loaders';
import type { Version } from '../minecraft';

export type Plugin = {
	context: 'modding';
	integrationType: 'code';
	type: 'plugin';
	edition: 'java';
	versions: Version[];
	loaderType: 'pluginloader';
	loaders: PluginLoader[];
	gameplayEnv: {
		singleplayer: true;
		multiplayer: 'server';
	};
};
