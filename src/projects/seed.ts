import z from 'zod';

import type { Dimension, Edition, Version } from '../minecraft';

export type Seed = {
	context: 'vanilla';
	scope: 'content';
	type: 'seed';
	edition: Edition;
	version: Version;
	dimension: Dimension;
};

export const seedValidator = z.string().regex(/-?\d{1,32}/);
