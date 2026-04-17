import { z } from 'zod';

import {
	type DeprecatedModLoader,
	deprecatedModLoaders,
	type ModLoader,
	modLoaders,
} from './modloaders/_index.js';
import { type PluginLoader, pluginLoaders } from './pluginloaders/_index.js';

export type ModPluginLoader = ModLoader | DeprecatedModLoader | PluginLoader;

export const modPluginLoaders = [
	...modLoaders,
	...deprecatedModLoaders,
	...(pluginLoaders.slice(1) as unknown as Exclude<PluginLoader, 'vanilla'>[]),
] as const satisfies ModPluginLoader[];

export const modPluginLoaderValidator = z.enum(modPluginLoaders);
