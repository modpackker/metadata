import type { Metadata } from '../metadata.js';

export const modpack = {
	type: 'modpack',
	context: 'modding',
	editions: ['java'],
	versions: [],
	gameplayEnvs: {
		singleplayer: true,
		multiplayer: ['client', 'server', 'client&server'],
	},
} satisfies Metadata;

export type Modpack = typeof modpack;
