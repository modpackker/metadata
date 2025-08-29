import type { Bindings } from '..';

const ver = '?';

export const bindings: Bindings = {
	/* @ts-expect-error */
	'3.4.0-snapshot': ver,
	'3.3.0-snapshot': ver,
	'3.2.0-snapshot': ver,
	'3.1.2-snapshot': ver,
	'3.1.1': ver,
	'3.1.1-snapshot': ver,
	'3.1.0': ver,
	'1.1.9': ver,
	'1.0.10': ver,
};
