import z from 'zod';

export const editions = ['bedrock', 'java'] as const satisfies string[];

export type Edition = (typeof editions)[number];

export const editionValidator = z.enum(editions);
