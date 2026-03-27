import type { Metadata } from '../metadata.js';

export const shader = {
	type: 'shader',
	context: 'modding',
	editions: ['java'],
	versions: [],
	gameplayEnvs: {
		singleplayer: true,
		multiplayer: ['client'],
	},
} satisfies Metadata;

export type Shader = typeof shader;
