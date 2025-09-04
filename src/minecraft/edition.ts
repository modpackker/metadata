export const editions = ['bedrock', 'java']	 as const satisfies string[];

export type Edition = (typeof editions)[number];