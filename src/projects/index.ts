import z from 'zod';

import { moddingTypes } from './modding';
import { vanillaTypes } from './vanilla';

export const projectTypes = [...vanillaTypes, ...moddingTypes] as const satisfies string[];

export type ProjectType = (typeof projectTypes)[number];

export const projectTypeValidator = z.enum(projectTypes);

/*  */

import type { ModdingProject } from './modding';
import type { VanillaProject } from './vanilla';

export type Project = VanillaProject | ModdingProject;

/*  */

export * from './vanilla';
export * from './modding';
