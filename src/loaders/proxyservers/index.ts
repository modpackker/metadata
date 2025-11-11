import z from 'zod';

export const proxyServers = [
	'bungeecord',
	'geyser',
	'velocity',
	'waterfall',
] as const satisfies string[];

export type ProxyServer = (typeof proxyServers)[number];

export const proxyServerValidator = z.enum(proxyServers);

/*  */

export { bindings as bungeecordBindings } from './bungeecord';
export { bindings as geyserBindings } from './geyser';
export { bindings as velocityBindings } from './velocity';
export { bindings as waterfallBindings } from './waterfall';
