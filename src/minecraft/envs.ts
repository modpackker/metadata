export const envs = ['client', 'server', 'client&server'] as const satisfies string[];

export type Env = typeof envs[number];

export type SingleplayerEnv = Extract<Env, 'client&server'>;
export type MultiplayerEnv = Env;