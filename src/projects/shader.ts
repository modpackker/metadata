import type { ShaderLoader } from '../loaders';
import type { Version } from '../minecraft';

export type Shader = {
	context: 'modding';
	integrationType: 'code';
	type: 'shader';
	edition: 'java';
	versions: Version[];
	loaderType: 'shaderloader';
	loaders: ShaderLoader[];
	gameplayEnv: {
		singleplayer: true;
		multiplayer: 'client';
	};
};
