import { writeLoaderSync } from '../lib';

export const liteloader = async () => {
	writeLoaderSync('modloader', 'liteloader', {});
};
