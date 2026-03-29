import { writeLoaderSync } from '../lib';

export const modloader = async () => {
	writeLoaderSync('modloader', 'modloader', {});
};
