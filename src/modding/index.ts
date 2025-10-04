import type { Version } from '../minecraft';
import type { ModPluginLoader } from './modpluginloader';
import type { ShaderLoader } from './shaderloaders';

export type Bindings = {
	[mcVersion in Version]?: string;
};
export type ProjectBindings = {
	[loader in ModPluginLoader | ShaderLoader]?: Bindings;
};

/*  */

export * from './modloaders';
export * from './shaderloaders';
export * from './pluginloaders';
export * from './modpluginloader';
export * from './proxyservers';
