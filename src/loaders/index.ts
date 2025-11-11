import z from 'zod';

export const loaderTypes = ['modloader', 'pluginloader', 'proxyservers', 'shaderloader'];

export type LoaderType = (typeof loaderTypes)[number];

export const loaderTypeValidator = z.enum(loaderTypes);

/*  */

export * from './modloaders';
export * from './shaderloaders';
export * from './pluginloaders';
export * from './modpluginloader';
export * from './proxyservers';
