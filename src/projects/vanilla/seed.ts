import { z } from 'zod';

import type { Metadata } from '../metadata.js';

export const seed = {
	type: 'seed',
	context: 'vanilla',
	editions: ['bedrock', 'java'],
	versions: [],
	gameplayEnvs: {
		singleplayer: true,
		multiplayer: ['client&server'],
	},
} satisfies Metadata;

export type Seed = typeof seed;

/*  */

export const seedValidator = z.string().regex(/-?\d{1,32}/);
