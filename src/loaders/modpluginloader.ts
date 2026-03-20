import z from 'zod';

import {
	deprecatedModLoaders,
	modLoaders,
	type DeprecatedModLoader,
	type ModLoader,
} from './modloaders';
import { pluginLoaders, type PluginLoader } from './pluginloaders';

export type ModPluginLoader = ModLoader | DeprecatedModLoader | PluginLoader;

export const modPluginLoaders = [
	...new Set([...modLoaders, ...deprecatedModLoaders, ...pluginLoaders]),
] as const satisfies ModPluginLoader[];

export const modPluginLoaderValidator = z.enum(modPluginLoaders);
