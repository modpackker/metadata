import z from 'zod';

export const javaVersions = ['25', '21', '17', '11', '8'] as const satisfies string[];

export type JavaVersion = (typeof javaVersions)[number];

export const javaVersionValidator = z.enum(javaVersions);
