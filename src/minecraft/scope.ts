export const scopes = ['code', 'content', 'external', 'static'] as const satisfies string[];

export type Scope = (typeof scopes)[number];
