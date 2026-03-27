import type { Metadata } from '../metadata.js';

export const server = {
	type: 'server',
	context: 'vanilla',
	editions: ['bedrock', 'java'],
	versions: [],
	gameplayEnvs: {
		singleplayer: true,
		multiplayer: ['server'],
	},
} satisfies Metadata;

export type Server = typeof server;
