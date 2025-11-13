import type { PluginLoader } from '../loaders';
import type { Version } from '../minecraft';

export type Plugin = {
	context: 'modding';
	scope: 'code';
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
