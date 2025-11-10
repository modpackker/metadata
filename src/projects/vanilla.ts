import z from 'zod';

export const vanillaTypes = ['datapack', 'resourcepack', 'seed'] as const satisfies string[];

export const vanillaTypeValidator = z.enum(vanillaTypes);

export type VanillaType = (typeof vanillaTypes)[number];

/*  */

/* export * from './datapack'; */
/* export * from './resourcepack'; */
export * from './seed';
