import type { MultiplayerEnv } from '../minecraft/env';
import type { Version } from '../minecraft';
import type { ModLoader } from '../modding/modloaders';
import type { PluginLoader } from '../modding/pluginloaders';
import type { ShaderLoader } from '../modding/shaderloaders';

export type Specs =
	| {
			type: 'datapack';
			versions: Version[];
			loaders: null;
			multiplayerEnv: 'client';
	  }
	| {
			type: 'mod';
			versions: Version[];
			loaders: ModLoader[];
			multiplayerEnv: MultiplayerEnv;
	  }
	| {
			type: 'modpack';
			versions: Version[];
			loaders: ModLoader[];
			multiplayerEnv: MultiplayerEnv;
	  }
	| {
			type: 'plugin';
			versions: Version[];
			loaders: PluginLoader[];
			multiplayerEnv: 'server';
	  }
	| {
			type: 'resourcepack';
			versions: Version[];
			loaders: null;
			multiplayerEnv: 'client';
	  }
	| {
			type: 'shader';
			versions: Version[];
			loaders: ShaderLoader[];
			multiplayerEnv: 'client';
	  };
