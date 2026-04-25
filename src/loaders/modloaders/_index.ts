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
	'liteloader',
	'modloader',
	'neoforge',
	'nilloader',
	'ornithe',
	'quilt',
	'rift',
] as const satisfies string[];

export type ModLoader = (typeof modLoaders)[number];

export const modLoaderValidator = z.enum(modLoaders);

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
