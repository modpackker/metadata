import z from "zod";
import { moddingTypes } from "../modding";
import { vanillaTypes } from "../vanilla";

export const projectTypes = [...vanillaTypes, ...moddingTypes];

export const projectTypeValidator = z.enum(projectTypes);

export type ProjectType = (typeof projectTypes)[number];

/*  */

export * from "./specs";
