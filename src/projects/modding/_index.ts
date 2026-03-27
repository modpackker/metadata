import z from 'zod';

export const moddingTypes = [
	'minimap',
	'mod',
	'modpack',
	'plugin',
	'shader',
] as const satisfies string[];

export type ModdingType = (typeof moddingTypes)[number];

export const moddingTypeValidator = z.enum(moddingTypes);

/*  */

import type { Minimap } from './minimap.js';
import type { Mod } from './mod.js';
import type { Modpack } from './modpack.js';
import type { Plugin } from './plugin.js';
import type { Shader } from './shader.js';

export type ModdingProject = Minimap | Mod | Modpack | Plugin | Shader;

/*  */

export * from './minimap.js';
export * from './mod.js';
export * from './modpack.js';
export * from './plugin.js';
export * from './shader.js';
