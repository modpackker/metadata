import { z } from 'zod';

import { envs } from './env.js';

export const singleplayerEnvs = ['client&server'] as const satisfies string[];
export const multiplayerEnvs = envs;

export type SingleplayerEnv = (typeof singleplayerEnvs)[number];
export type MultiplayerEnv = (typeof multiplayerEnvs)[number];

export type GameplayEnv = {
	singleplayer: false | true /* true: client&server */;
	multiplayer: false | MultiplayerEnv;
};

export const singleplayerEnvValidator = z.enum(singleplayerEnvs);
export const multiplayerEnvValidator = z.enum(multiplayerEnvs);

export const gameplayEnvValidator = z.object({
	singleplayer: singleplayerEnvValidator,
	multiplayer: multiplayerEnvValidator,
});
