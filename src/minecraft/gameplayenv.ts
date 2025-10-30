import z from "zod";

import { envValidator, type Env } from "./env";

export const singleplayerEnvValidator = z.enum(["client&server"]);
export const multiplayerEnvValidator = envValidator;

export type SingleplayerEnv = "client&server";
export type MultiplayerEnv = Env;
