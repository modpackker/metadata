import z from 'zod';

export const moddingTypes = ['mod', 'modpack', 'plugin', 'shader'] as const satisfies string[];

export const moddingTypeValidator = z.enum(moddingTypes);

export type ModdingType = (typeof moddingTypes)[number];

/*  */

/* export * from './mod' */
/* export * from './modpack' */
/* export * from './plugin' */
/* export * from './shader' */
