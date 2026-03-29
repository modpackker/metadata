import { writeLoaderSync } from '../lib';

export const waterfall = async () => {
	writeLoaderSync('proxyserver', 'waterfall', {});
};
