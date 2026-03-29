import { writeLoaderSync } from '../lib';

export const velocity = async () => {
	writeLoaderSync('proxyserver', 'velocity', {});
};
