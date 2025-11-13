export type Addon = {
	context: 'vanilla';
	scope: 'code';
	type: 'addon';
	edition: 'bedrock';
	version: unknown;
	gameplayEnv: {
		singleplayer: true;
		multiplayer: 'client';
	};
};
