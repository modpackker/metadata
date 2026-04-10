import { z } from 'zod';

export const proxyServers = [
	'bungeecord',
	'geyser',
	'velocity',
	'waterfall',
] as const satisfies string[];

export type ProxyServer = (typeof proxyServers)[number];

export const proxyServerValidator = z.enum(proxyServers);

/*  */

export { bungeecordBindings } from './bungeecord.js';
export { geyserBindings } from './geyser.js';
export { velocityBindings } from './velocity.js';
export { waterfallBindings } from './waterfall.js';
