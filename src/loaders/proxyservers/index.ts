import z from "zod";

export const proxyServers = [
	"bungeecord",
	"velocity",
	"waterfall",
] as const satisfies string[];

export const proxyServerValidator = z.enum(proxyServers);

export type ProxyServer = (typeof proxyServers)[number];

/*  */

export { bindings as bungeecordBindings } from "./bungeecord";
export { bindings as velocityBindings } from "./velocity";
export { bindings as waterfallBindings } from "./waterfall";
