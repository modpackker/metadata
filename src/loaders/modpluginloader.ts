import z from "zod";

import {
	deprecatedModLoaders,
	modLoaders,
	type DeprecatedModLoader,
	type ModLoader,
} from "./modloaders";
import { pluginLoaders, type PluginLoader } from "./pluginloaders";

export const modPluginLoaderValidator = z.enum([
	...modLoaders,
	...deprecatedModLoaders,
	...pluginLoaders,
]);

export type ModPluginLoader = ModLoader | DeprecatedModLoader | PluginLoader;
