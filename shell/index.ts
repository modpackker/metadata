import { minecraft } from './minecraft.js';
import { babric } from './modloaders/babric.js';
import { bta } from './modloaders/bta.js';
import { fabric } from './modloaders/fabric.js';
import { forge } from './modloaders/forge.js';
import { legacyfabric } from './modloaders/legacyfabric.js';
import { liteloader } from './modloaders/liteloader.js';
import { modloader } from './modloaders/modloader.js';
import { neoforge } from './modloaders/neoforge.js';
import { nilloader } from './modloaders/nilloader.js';
import { ornithe } from './modloaders/ornithe.js';
import { quilt } from './modloaders/quilt.js';
import { rift } from './modloaders/rift.js';
import { mrpack } from './mrpack.js';
import { bukkit } from './pluginloaders/bukkit.js';
import { folia } from './pluginloaders/folia.js';
import { paper } from './pluginloaders/paper.js';
import { purpur } from './pluginloaders/purpur.js';
import { spigot } from './pluginloaders/spigot.js';
import { sponge } from './pluginloaders/sponge.js';
import { bungeecord } from './proxyserver/bungeecord.js';
import { geyser } from './proxyserver/geyser.js';
import { velocity } from './proxyserver/velocity.js';
import { waterfall } from './proxyserver/waterfall.js';
import { canvas } from './shaderloaders/canvas.js';
import { iris } from './shaderloaders/iris.js';
import { optifine } from './shaderloaders/optifine.js';

await Promise.all([
	minecraft(),

	/* modloaders */
	babric(),
	bta(),
	fabric(),
	forge(),
	legacyfabric(),
	liteloader(),
	modloader(),
	neoforge(),
	nilloader(),
	ornithe(),
	quilt(),
	rift(),

	/* pluginloaders */
	bukkit(),
	folia(),
	paper(),
	purpur(),
	spigot(),
	sponge(),

	/* proxyservers */
	bungeecord(),
	geyser(),
	velocity(),
	waterfall(),

	/* shaderloaders */
	canvas(),
	iris(),
	optifine(),

	/*  */

	mrpack(),
]);
