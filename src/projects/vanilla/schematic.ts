import type { Metadata } from '../metadata.js';

export const schematic = {
	type: 'schematic',
	context: 'vanilla',
	editions: ['java'],
	versions: [],
	gameplayEnvs: {
		singleplayer: true,
		multiplayer: ['client'],
	},
} satisfies Metadata;

export type Schematic = typeof schematic;
