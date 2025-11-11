import type { Edition, Version } from '../minecraft';

export type Server = {
	context: 'vanilla';
	integrationType: 'external';
	type: 'server';
	edition: Edition;
	versions: Version[];
};
