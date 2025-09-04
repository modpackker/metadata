import { z } from 'zod';

export const envs = ['client', 'server', 'client&server'] as const satisfies string[];

export const envValidator = z.enum(envs);

export const singleplayerEnvValidator = z.enum(['client&server']);
export const multiplayerEnvValidator = envValidator;

export type Env = (typeof envs)[number];

export type SingleplayerEnv = 'client&server';
export type MultiplayerEnv = Env;
