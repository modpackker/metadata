import z from 'zod';

export const vanillaTypes = [
	'addon',
	'datapack',
	'map',
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

import type { Addon } from './addon';
import type { Datapack } from './datapack';
import type { Map } from './map';
import type { ResourcePack } from './resourcepack';
import type { Schematic } from './schematic';
import type { Seed } from './seed';
import type { Server } from './server';
import type { Skin } from './skin';
import type { World } from './world';

export type VanillaProject =
	| Addon
	| Datapack
	| Map
	| ResourcePack
	| Schematic
	| Seed
	| Server
	| Skin
	| World;

/*  */

export * from './addon';
export * from './datapack';
export * from './map';
export * from './resourcepack';
export * from './schematic';
export * from './seed';
export * from './server';
export * from './skin';
export * from './world';
