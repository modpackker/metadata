export type Addon = {
	context: 'vanilla';
	integrationType: 'code';
	type: 'addon';
	edition: 'bedrock';
	version: unknown;
	gameplayEnv: {
		singleplayer: true;
		multiplayer: 'client';
	};
};
