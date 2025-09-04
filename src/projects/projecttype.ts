import { z } from 'zod';

export const projectTypes = [
	'datapack',
	'mod',
	'modpack',
	'plugin',
	'resourcepack',
	'shader',
] as const satisfies string[];

export const projectTypeValidator = z.enum(projectTypes);

export type ProjectType = (typeof projectTypes)[number];
