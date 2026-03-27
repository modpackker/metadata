import type { Metadata } from '../metadata.js';

export const mod = {
	type: 'mod',
	context: 'modding',
	editions: ['java'],
	versions: [],
	gameplayEnvs: {
		singleplayer: true,
		multiplayer: ['client', 'server', 'client&server'],
	},
} satisfies Metadata;

export type Mod = typeof mod;
