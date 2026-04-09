import { minecraft } from './minecraft';
import { babric } from './modloaders/babric';
import { bta } from './modloaders/bta';
import { fabric } from './modloaders/fabric';
import { forge } from './modloaders/forge';
import { legacyfabric } from './modloaders/legacyfabric';
import { liteloader } from './modloaders/liteloader';
import { modloader } from './modloaders/modloader';
import { neoforge } from './modloaders/neoforge';
import { nilloader } from './modloaders/nilloader';
import { ornithe } from './modloaders/ornithe';
import { quilt } from './modloaders/quilt';
import { rift } from './modloaders/rift';
import { bukkit } from './pluginloaders/bukkit';
import { folia } from './pluginloaders/folia';
import { paper } from './pluginloaders/paper';
import { purpur } from './pluginloaders/purpur';
import { spigot } from './pluginloaders/spigot';
import { sponge } from './pluginloaders/sponge';
import { bungeecord } from './proxyserver/bungeecord';
import { geyser } from './proxyserver/geyser';
import { velocity } from './proxyserver/velocity';
import { waterfall } from './proxyserver/waterfall';
import { canvas } from './shaderloaders/canvas';
import { iris } from './shaderloaders/iris';
import { optifine } from './shaderloaders/optifine';

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
]);
