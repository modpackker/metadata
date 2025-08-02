import type { DeprecatedModLoader, ModLoader } from './modloaders';
import type { PluginLoader } from './pluginloaders';

export type ModPluginLoader = ModLoader | DeprecatedModLoader | PluginLoader;