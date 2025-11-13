import z from 'zod';

import { envs, envValidator, type Env } from './env';

export const singleplayerEnvs = ['client&server'];
export const multiplayerEnvs = envs;

export type SingleplayerEnv = (typeof singleplayerEnvs)[number];
export type MultiplayerEnv = (typeof multiplayerEnvs)[number];

export type GameplayEnv = {
	singleplayer: SingleplayerEnv;
	multiplayer: MultiplayerEnv;
};

export const singleplayerEnvValidator = z.enum(singleplayerEnvs);
export const multiplayerEnvValidator = z.enum(multiplayerEnvs);
