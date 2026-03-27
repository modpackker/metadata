import type { Metadata } from '../metadata.js';

export const plugin = {
	type: 'plugin',
	context: 'modding',
	editions: ['java'],
	versions: [],
	gameplayEnvs: {
		singleplayer: true,
		multiplayer: ['server'],
	},
} satisfies Metadata;

export type Plugin = typeof plugin;
