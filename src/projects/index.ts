import z from 'zod';
import { moddingTypes } from './modding';
import { vanillaTypes } from './vanilla';

export const projectTypes = [...vanillaTypes, ...moddingTypes];

export type ProjectType = (typeof projectTypes)[number];

export const projectTypeValidator = z.enum(projectTypes);

/*  */

import type { VanillaProject } from './vanilla';
import type { ModdingProject } from './modding';

export type Project = VanillaProject | ModdingProject;

/*  */

export * from './vanilla';
export * from './modding';
