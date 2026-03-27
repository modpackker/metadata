import type { Metadata } from '../metadata.js';

export const resourcepack = {
	type: 'resourcepack',
	context: 'vanilla',
	editions: ['java'],
	versions: [],
	gameplayEnvs: {
		singleplayer: true,
		multiplayer: ['client', 'server'],
	},
} satisfies Metadata;

export type ResourcePack = typeof resourcepack;
