import z from "zod";

export const envs = [
	"client",
	"server",
	"client&server",
] as const satisfies string[];

export const envValidator = z.enum(envs);

export type Env = (typeof envs)[number];
