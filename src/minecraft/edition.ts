import z from 'zod';

export const editions = ['bedrock', 'java'] as const satisfies string[];

export const editionValidator = z.enum(editions);

export type Edition = (typeof editions)[number];
