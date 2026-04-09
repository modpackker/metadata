import { writeLoaderSync } from '../lib.ts';

export const velocity = async () => {
	writeLoaderSync('proxyserver', 'velocity', {});
};
