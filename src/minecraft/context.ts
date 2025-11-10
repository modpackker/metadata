import { z } from 'zod';

export const contexts = ['vanilla', 'modding'];

export const contextValidator = z.enum(contexts);

export type Context = (typeof contexts)[number];
