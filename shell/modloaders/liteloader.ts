import { writeLoaderSync } from '../lib.js';

export const liteloader = async () => {
	writeLoaderSync('modloader', 'liteloader', {});
};
