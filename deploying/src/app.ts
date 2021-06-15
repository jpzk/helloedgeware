// Import
const { ApiPromise, WsProvider } = require('@polkadot/api');
import { spec } from '@edgeware/node-types';

async function main() {
	// Construct
	const provider = new WsProvider('ws://localhost:9944');
	// Create the API and wait until ready
	const api = await ApiPromise.create({ provider });

	// Retrieve the chain & node information information via rpc calls
	const [nodeName, nodeVersion] = await Promise.all([
		api.rpc.system.name(),
		api.rpc.system.version()
	]);

	console.log(`You are connected to chain using ${nodeName} v${nodeVersion}`);
}

main()
