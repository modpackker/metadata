export * from './edition';

export * from './gamemode';

export * from './envs';

export {
	versions as mcVersions,
	legacyVersions as mcLegacyVersions,
	majorVersions as mcMajorVersions,
	type Version as McVersion,
	type LegacyVersion as McLegacyVersion,
	type MajorVersion as McMajorVersion,
} from './versions';
