import type { Version } from '../minecraft';

export type Schematic = {
	context: 'vanilla';
	integrationType: 'content';
	type: 'schematic';
	edition: 'java';
	version: Version[];
};
