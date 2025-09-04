import { z } from 'zod';

export const gamemodes = ['singleplayer', 'multiplayer'] as const satisfies string[];

export const gamemodeValidator = z.enum(gamemodes);

export type Gamemode = (typeof gamemodes)[number];
