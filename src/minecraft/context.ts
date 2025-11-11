import z from 'zod';

export const contexts = ['vanilla', 'modding'] as const satisfies string[];

export const contextValidator = z.enum(contexts);

export type Context = (typeof contexts)[number];
