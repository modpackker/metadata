import { z } from 'zod';

export const javaVersions = [25, 21, 17, 11, 8] as const satisfies number[];

export type JavaVersion = (typeof javaVersions)[number];

export const javaVersionValidator = z.union([
	z.literal(25),
	z.literal(21),
	z.literal(17),
	z.literal(11),
	z.literal(8),
]);
