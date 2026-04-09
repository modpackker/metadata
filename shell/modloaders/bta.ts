import { writeLoaderSync } from '../lib.ts';

export const bta = async () => {
	writeLoaderSync('modloader', 'bta', {});
};
