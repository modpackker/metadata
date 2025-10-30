import z from "zod";

export const pluginLoaders = [
	"vanilla",
	"bukkit",
	"folia",
	"paper",
	"purpur",
	"spigot",
	"sponge",
] as const satisfies string[];

export const pluginLoaderValidator = z.enum(pluginLoaders);

export type PluginLoader = (typeof pluginLoaders)[number];

/*  */

export { bindings as bukkitBindings } from "./bukkit";
export { bindings as foliaBindings } from "./folia";
export { bindings as paperBindings } from "./paper";
export { bindings as purpurBindings } from "./purpur";
export { bindings as spigotBindings } from "./spigot";
export { bindings as spongeBindings } from "./sponge";
