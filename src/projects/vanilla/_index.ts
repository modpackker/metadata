import z from 'zod';

export const vanillaTypes = [
	'addon',
	'datapack',
	'resourcepack',
	'schematic',
	'seed',
	'server',
	'skin',
	'world',
] as const satisfies string[];

export type VanillaType = (typeof vanillaTypes)[number];

export const vanillaTypeValidator = z.enum(vanillaTypes);

/*  */

import type { Addon } from './addon.js';
import type { Datapack } from './datapack.js';
import type { ResourcePack } from './resourcepack.js';
import type { Schematic } from './schematic.js';
import type { Seed } from './seed.js';
import type { Server } from './server.js';
import type { Skin } from './skin.js';
import type { World } from './world.js';

export type VanillaProject =
	| Addon
	| Datapack
	| ResourcePack
	| Schematic
	| Seed
	| Server
	| Skin
	| World;

/*  */

export * from './addon.js';
export * from './datapack.js';
export * from './resourcepack.js';
export * from './schematic.js';
export * from './seed.js';
export * from './server.js';
export * from './skin.js';
export * from './world.js';
