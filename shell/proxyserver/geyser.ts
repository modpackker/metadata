import { writeLoaderSync } from '../lib.js';

export const geyser = async () => {
	writeLoaderSync('proxyserver', 'geyser', {});
};
