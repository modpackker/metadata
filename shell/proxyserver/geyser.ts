import { writeLoaderSync } from '../lib.ts';

export const geyser = async () => {
	writeLoaderSync('proxyserver', 'geyser', {});
};
