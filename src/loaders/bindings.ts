import type { Version } from '../minecraft';
import type { ModLoader } from './modloaders';
import type { PluginLoader } from './pluginloaders';
import type { ShaderLoader } from './shaderloaders';

export type Bindings = {
	[mcVersion in Version]?: string;
};
export type ProjectBindings = {
	[loader in ModLoader | PluginLoader | ShaderLoader]?: Bindings;
};
