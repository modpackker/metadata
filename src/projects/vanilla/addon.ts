import type { Metadata } from '../metadata.js';

const addon = {
	type: 'addon',
	context: 'vanilla',
	editions: ['bedrock'],
	versions: [],
	gameplayEnvs: {
		singleplayer: true,
		multiplayer: ['client'],
	},
} satisfies Metadata;

export type Addon = typeof addon;
