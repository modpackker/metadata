import { writeLoaderSync } from '../lib.js';

export const velocity = async () => {
	writeLoaderSync('proxyserver', 'velocity', {});
};
