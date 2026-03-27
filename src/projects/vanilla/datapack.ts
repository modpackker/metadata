import type { Metadata } from '../metadata.js';

export const datapack = {
	context: 'vanilla',
	type: 'datapack',
	editions: ['java'],
	versions: [],
	gameplayEnvs: {
		singleplayer: true,
		multiplayer: ['client', 'server'],
	},
} satisfies Metadata;

export type Datapack = typeof datapack;
