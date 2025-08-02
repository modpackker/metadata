import type { McVersion } from '../minecraft';
import type { ModPluginLoader } from './modpluginloader';
import type { ShaderLoader } from './shaderloaders';

export type Bindings = Partial<Record<McVersion, string>>;
export type ProjectBindings = {
	[key in ModPluginLoader | ShaderLoader]?: Bindings;
}

/*  */

export * from './modloaders';
export * from './pluginloaders';
export * from './modpluginloader';
export * from './shaderloaders';