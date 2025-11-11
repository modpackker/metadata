import z from 'zod';

export const contexts = ['vanilla', 'modding'] as const satisfies string[];

export type Context = (typeof contexts)[number];

export const contextValidator = z.enum(contexts);
