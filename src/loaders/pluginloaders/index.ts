export const pluginLoaders = ['vanilla', 'bukkit', 'bungeecord', 'folia', 'paper', 'purpur', 'spigot', 'sponge', 'velocity', 'waterfall'] as const satisfies string[];

export type PluginLoader = typeof pluginLoaders[number];

/*  */

export { bindings as bukkitBindings } from './bukkit';
export { bindings as bungeecordBindings } from './bungeecord';
export { bindings as foliaBindings } from './folia';
export { bindings as paperBindings } from './paper';
export { bindings as purpurBindings } from './purpur';
export { bindings as spigotBindings } from './spigot';
export { bindings as spongeBindings } from './sponge';
export { bindings as velocityBindings } from './velocity';
export { bindings as waterfallBindings } from './waterfall';