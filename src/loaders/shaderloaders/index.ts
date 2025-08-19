export const shaderLoaders = ['vanilla', 'canvas', 'iris', 'optifine'] as const satisfies string[];

export type ShaderLoader = (typeof shaderLoaders)[number];

/*  */

export { bindings as canvasBindings } from './canvas';
export { bindings as irisBindings } from './iris';
export { bindings as optifineBindings } from './optifine';
