import { z } from 'zod';

import { moddingTypes } from './modding/_index.js';
import { vanillaTypes } from './vanilla/_index.js';

export const projectTypes = [...vanillaTypes, ...moddingTypes] as const satisfies string[];

export type ProjectType = (typeof projectTypes)[number];

export const projectTypeValidator = z.enum(projectTypes);

/*  */

import type { ModdingProject } from './modding/_index.js';
import type { VanillaProject } from './vanilla/_index.js';

export type Project = VanillaProject | ModdingProject;

/*  */

export * from './metadata.js';
export * from './modding/_index.js';
export * from './vanilla/_index.js';
