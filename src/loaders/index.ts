import z from 'zod';

import type { DeprecatedModLoader, ModLoader } from './modloaders';
import type { PluginLoader } from './pluginloaders';
import type { ProxyServer } from './proxyservers';
import type { ShaderLoader } from './shaderloaders';

export const loaderTypes = [
	'modloader',
	'pluginloader',
	'proxyservers',
	'shaderloader',
] as const satisfies string[];

export type LoaderType = (typeof loaderTypes)[number];

export const loaderTypeValidator = z.enum(loaderTypes);

export type Loader = ModLoader | DeprecatedModLoader | ShaderLoader | PluginLoader | ProxyServer;

/*  */

export * from './bindings';

export * from './modloaders';
export * from './shaderloaders';
export * from './pluginloaders';
export * from './modpluginloader';
export * from './proxyservers';
