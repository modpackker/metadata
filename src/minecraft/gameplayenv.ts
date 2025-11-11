import z from 'zod';

import { envValidator, type Env } from './env';

export type SingleplayerEnv = 'client&server';
export type MultiplayerEnv = Env;

export const singleplayerEnvValidator = z.enum(['client&server']);
export const multiplayerEnvValidator = envValidator;
