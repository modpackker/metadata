import type { Edition, Version } from '../minecraft';

export type Map = {
	context: 'vanilla';
	integrationTypes: 'content';
	type: 'map';
	edition: Edition;
	version: Version;
};
