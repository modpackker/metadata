export const gamemodes = ['singleplayer', 'multiplayer'] as const satisfies string[];

export type Gamemode = (typeof gamemodes)[number];
