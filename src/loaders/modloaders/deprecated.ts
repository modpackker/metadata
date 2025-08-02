export const deprecatedModLoaders = ['modloader', 'liteloader', 'rift'] as const satisfies string[];

export type DeprecatedModLoader = typeof deprecatedModLoaders[number];