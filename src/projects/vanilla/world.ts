import type { Metadata } from '../metadata.js';

export const world = {
	type: 'world',
	context: 'vanilla',
	editions: ['java'],
	versions: [],
	gameplayEnvs: {
		singleplayer: true,
		multiplayer: ['client', 'server'],
	},
} satisfies Metadata;

export type World = typeof world;
