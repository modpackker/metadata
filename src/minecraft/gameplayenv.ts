import z from 'zod';

import { envs, envValidator, type Env } from './env';

export const singleplayerEnvs = 'client&server' as const satisfies string;
export const multiplayerEnvs = envs;

export type SingleplayerEnv = (typeof singleplayerEnvs)[number];
export type MultiplayerEnv = (typeof multiplayerEnvs)[number];

export type GameplayEnv = {
	singleplayer: boolean;
	multiplayer: false | MultiplayerEnv;
};

export const singleplayerEnvValidator = z.literal(singleplayerEnvs);
export const multiplayerEnvValidator = z.enum(multiplayerEnvs);
