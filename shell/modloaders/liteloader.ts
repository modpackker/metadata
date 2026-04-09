import { writeLoaderSync } from '../lib.ts';

export const liteloader = async () => {
	writeLoaderSync('modloader', 'liteloader', {});
};
