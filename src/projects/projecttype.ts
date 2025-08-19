export const projectTypes = [
	'datapack',
	'mod',
	'modpack',
	'plugin',
	'resourcepack',
	'shader',
] as const satisfies string[];

export type ProjectType = (typeof projectTypes)[number];
