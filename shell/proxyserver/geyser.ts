import { writeLoaderSync } from '../lib';

export const geyser = async () => {
	writeLoaderSync('proxyserver', 'geyser', {});
};
