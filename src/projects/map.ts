import type { Edition, Version } from '../minecraft';

export type Map = {
	context: 'vanilla';
	scope: 'content';
	type: 'map';
	edition: Edition;
	version: Version;
};
