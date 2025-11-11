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

import type { Minimap } from './minimap';
import type { Mod } from './mod';
import type { Modpack } from './modpack';
import type { Plugin } from './plugin';
import type { Shader } from './shader';

export type ModdingProject = Minimap | Mod | Modpack | Plugin | Shader;

/*  */

export * from './minimap';
export * from './mod';
export * from './modpack';
export * from './plugin';
export * from './shader';
