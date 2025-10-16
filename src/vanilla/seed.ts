import { z } from 'zod';

export const seedValidator = z.string().regex(/-?\d{1,32}/);

export type Seed = number;