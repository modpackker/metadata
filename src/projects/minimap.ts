import type { Version } from '../minecraft';

export type Minimap = {
	context: 'modding';
	integrationType: 'content';
	type: 'minimap';
	edition: 'java';
	version: Version;
};
