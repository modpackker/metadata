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
			gamemodeEnv: {
				singleplayer: true;
				multiplayer: 'client';
			};
	  }
	| {
			type: 'mod';
			versions: Version[];
			loaders: ModLoader[];
			gamemodeEnv: {
				singleplayer: boolean;
				multiplayer: false | MultiplayerEnv;
			};
	  }
	| {
			type: 'modpack';
			versions: Version[];
			loaders: ModLoader[];
			gamemodeEnv: {
				singleplayer: boolean;
				multiplayer: false | MultiplayerEnv;
			};
	  }
	| {
			type: 'plugin';
			versions: Version[];
			loaders: PluginLoader[];
			gamemodeEnv: {
				singleplayer: true;
				multiplayer: 'server';
			};
	  }
	| {
			type: 'resourcepack';
			versions: Version[];
			loaders: null;
			gamemodeEnv: {
				singleplayer: true;
				multiplayer: 'client';
			};
	  }
	| {
			type: 'shader';
			versions: Version[];
			loaders: ShaderLoader[];
			gamemodeEnv: {
				singleplayer: true;
				multiplayer: 'client';
			};
	  };
