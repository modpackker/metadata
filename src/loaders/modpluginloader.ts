import z from 'zod';

import {
	deprecatedModLoaders,
	modLoaders,
	type DeprecatedModLoader,
	type ModLoader,
} from './modloaders';
import { pluginLoaders, type PluginLoader } from './pluginloaders';

export type ModPluginLoader = ModLoader | DeprecatedModLoader | PluginLoader;

export const modPluginLoaders: ModPluginLoader[] = [
	...new Set([...modLoaders, ...deprecatedModLoaders, ...pluginLoaders]),
];

export const modPluginLoaderValidator = z.enum(modPluginLoaders);
