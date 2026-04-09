import { writeLoaderSync } from '../lib.js';

export const waterfall = async () => {
	writeLoaderSync('proxyserver', 'waterfall', {});
};
