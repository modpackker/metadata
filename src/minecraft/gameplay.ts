import { z } from 'zod';

export const gameplays = ['singleplayer', 'multiplayer'] as const satisfies string[];

export const gameplayValidator = z.enum(gameplays);

export type Gameplay = (typeof gameplays)[number];
