import type { Metadata } from '../metadata.js';

export const minimap = {
	type: 'minimap',
	context: 'modding',
	editions: ['java'],
	versions: [],
	gameplayEnvs: {
		singleplayer: true,
		multiplayer: ['client'],
	},
} satisfies Metadata;

export type Minimap = typeof minimap;
