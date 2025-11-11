import z from 'zod';

export const dimensions = ['overworld', 'nether', 'end'] as const satisfies string[];

export type Dimension = (typeof dimensions)[number];

export const dimensionValidator = z.enum(dimensions);
