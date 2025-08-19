import type { MultiplayerEnv } from '../minecraft/envs';
import type { McVersion } from '../minecraft';
import type { ModLoader } from '../loaders/modloaders';
import type { PluginLoader } from '../loaders/pluginloaders';
import type { ShaderLoader } from '../loaders/shaderloaders';

export type Specs =
	| {
			type: 'datapack';
			versions: McVersion[];
			loaders: null;
			multiplayerEnv: 'client';
	  }
	| {
			type: 'mod';
			versions: McVersion[];
			loaders: ModLoader[];
			multiplayerEnv: MultiplayerEnv;
	  }
	| {
			type: 'modpack';
			versions: McVersion[];
			loaders: ModLoader[];
			multiplayerEnv: MultiplayerEnv;
	  }
	| {
			type: 'plugin';
			versions: McVersion[];
			loaders: PluginLoader[];
			multiplayerEnv: 'server';
	  }
	| {
			type: 'resourcepack';
			versions: McVersion[];
			loaders: null;
			multiplayerEnv: 'client';
	  }
	| {
			type: 'shader';
			versions: McVersion[];
			loaders: ShaderLoader[];
			multiplayerEnv: 'client';
	  };
