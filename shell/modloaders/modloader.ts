import { writeLoaderSync } from '../lib.js';

export const modloader = async () => {
	writeLoaderSync('modloader', 'modloader', {});
};
