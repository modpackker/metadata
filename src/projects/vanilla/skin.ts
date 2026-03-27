import type { Metadata } from '../metadata.js';

export const skin = {
	type: 'skin',
	context: 'vanilla',
	editions: ['bedrock', 'java'],
	versions: [],
	gameplayEnvs: {
		singleplayer: true,
		multiplayer: ['client'],
	},
} satisfies Metadata;

export type Skin = typeof skin;
