import { writeLoaderSync } from '../lib';

export const bukkit = async () => {
	writeLoaderSync('pluginloader', 'bukkit', {});
};
