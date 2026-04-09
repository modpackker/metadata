import { writeLoaderSync } from '../lib.ts';

export const waterfall = async () => {
	writeLoaderSync('proxyserver', 'waterfall', {});
};
