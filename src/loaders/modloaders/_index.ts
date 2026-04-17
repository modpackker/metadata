import { z } from 'zod';

export const modLoaders = [
	'vanilla',
	'java-agent',
	/*  */
	'babric',
	'bta-babric',
	'fabric',
	'forge',
	'legacyfabric',
	'neoforge',
	'nilloader',
	'ornithe',
	'quilt',
] as const satisfies string[];

export type ModLoader = (typeof modLoaders)[number];

export const modLoaderValidator = z.enum(modLoaders);

/*  */

export const deprecatedModLoaders = ['modloader', 'liteloader', 'rift'] as const satisfies string[];

export type DeprecatedModLoader = (typeof deprecatedModLoaders)[number];

export const deprecatedModLoaderValidator = z.enum(deprecatedModLoaders);

/*  */

export { babricBindings } from './babric.js';
export { btaBindings } from './bta.js';
export { fabricBindings } from './fabric.js';
export { forgeBindings } from './forge.js';
export { legacyfabricBindings } from './legacyfabric.js';
export { liteloaderBindings } from './liteloader.js';
export { modloaderBindings } from './modloader.js';
export { neoforgeBindings } from './neoforge.js';
export { nilloaderBindings } from './nilloader.js';
export { ornitheBindings } from './ornithe.js';
export { quiltBindings } from './quilt.js';
export { riftBindings } from './rift.js';
