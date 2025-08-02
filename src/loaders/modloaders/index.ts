export const modLoaders = ['vanilla', 'babric', 'bta-babric', 'fabric', 'forge', 'java-agent', 'legacyfabric', 'neoforge', 'nilloader', 'orinthe', 'quilt'] as const satisfies string[];

export type ModLoader = typeof modLoaders[number];

/*  */

export { bindings as fabricBindings } from './fabric';
export { bindings as forgeBindings } from './forge';
export { bindings as neoforgeBindings } from './neoforge';
export { bindings as quiltBindings } from './quilt';

/*  */

export * from './deprecated';