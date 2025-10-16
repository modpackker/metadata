import type { MultiplayerEnv } from '../minecraft';
import type { Version } from '../minecraft';
import type { ModLoader, PluginLoader, ShaderLoader } from '../loaders';

export type Specs =
	| {
			type: 'datapack';
			versions: Version[];
			loaders: null;
			gameplayEnv: {
				singleplayer: true;
				multiplayer: 'client';
			};
	  }
	| {
			type: 'mod';
			versions: Version[];
			loaders: ModLoader[];
			gameplayEnv: {
				singleplayer: boolean;
				multiplayer: false | MultiplayerEnv;
			};
	  }
	| {
			type: 'modpack';
			versions: Version[];
			loaders: ModLoader[];
			gameplayEnv: {
				singleplayer: boolean;
				multiplayer: false | MultiplayerEnv;
			};
	  }
	| {
			type: 'plugin';
			versions: Version[];
			loaders: PluginLoader[];
			gameplayEnv: {
				singleplayer: true;
				multiplayer: 'server';
			};
	  }
	| {
			type: 'resourcepack';
			versions: Version[];
			loaders: null;
			gameplayEnv: {
				singleplayer: true;
				multiplayer: 'client';
			};
	  }
	| {
			type: 'shader';
			versions: Version[];
			loaders: ShaderLoader[];
			gameplayEnv: {
				singleplayer: true;
				multiplayer: 'client';
			};
	  };
