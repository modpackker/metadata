import type { Edition, Version } from '../minecraft';

export type Server = {
	context: 'vanilla';
	scope: 'external';
	type: 'server';
	edition: Edition;
	versions: Version[];
};
