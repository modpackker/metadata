import type { Version } from '../minecraft';

export type Schematic = {
	context: 'vanilla';
	scope: 'content';
	type: 'schematic';
	edition: 'java';
	version: Version[];
};
