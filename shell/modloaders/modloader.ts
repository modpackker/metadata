import { writeLoaderSync } from '../lib.ts';

export const modloader = async () => {
	writeLoaderSync('modloader', 'modloader', {});
};
