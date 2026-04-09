import { writeLoaderSync } from '../lib.js';

export const bukkit = async () => {
	writeLoaderSync('pluginloader', 'bukkit', {});
};
