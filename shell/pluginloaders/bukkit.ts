import { writeLoaderSync } from '../lib.ts';

export const bukkit = async () => {
	writeLoaderSync('pluginloader', 'bukkit', {});
};
