import z from 'zod';

import { deprecatedModLoaders, modLoaders } from './modloaders';
import { pluginLoaders } from './pluginloaders';

/* @ts-expect-error */
export const modPluginLoaders = modLoaders.concat(deprecatedModLoaders).concat(pluginLoaders);

export const modPluginLoaderValidator = z.enum(modPluginLoaders);

export type ModPluginLoader = (typeof modPluginLoaders)[number];
