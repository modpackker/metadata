import z from 'zod';

export const gameplays = ['singleplayer', 'multiplayer'] as const satisfies string[];

export type Gameplay = (typeof gameplays)[number];

export const gameplayValidator = z.enum(gameplays);
