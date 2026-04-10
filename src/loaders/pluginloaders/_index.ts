import { z } from 'zod';

export const pluginLoaders = [
	'vanilla',
	/*  */
	'bukkit',
	'folia',
	'paper',
	'purpur',
	'spigot',
	'sponge',
] as const satisfies string[];

export type PluginLoader = (typeof pluginLoaders)[number];

export const pluginLoaderValidator = z.enum(pluginLoaders);

/*  */

export { bukkitBindings } from './bukkit.js';
export { foliaBindings } from './folia.js';
export { paperBindings } from './paper.js';
export { purpurBindings } from './purpur.js';
export { spigotBindings } from './spigot.js';
export { spongeBindings } from './sponge.js';
