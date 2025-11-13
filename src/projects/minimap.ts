import type { Version } from '../minecraft';

export type Minimap = {
	context: 'modding';
	scope: 'content';
	type: 'minimap';
	edition: 'java';
	version: Version;
};
