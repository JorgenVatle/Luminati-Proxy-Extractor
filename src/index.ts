import * as CLI from 'cli';
import LmpInterface from "./LmpInterface";

const Package = require('../package.json');

// CLI Plugins
CLI.enable('version');

// CLI Configuration
CLI.setApp(Package.name, Package.version);

// Command line arguments
const args = CLI.parse({
    manager: ['m', 'Luminati Proxy Manager hostname.', 'string', '127.0.0.1'],
    managerPort: ['p', 'Luminati Proxy Manager port', 'number', 22999],
    output: ['o', 'Proxy output path.', 'string', `./luminati-proxies-${Date.now()}.txt`],
    onlyRunning: ['r', 'Extract running proxies only?', 'boolean', true],
});

console.log('Pulling proxies from:', args.manager);

const Lmp = new LmpInterface(args.manager, args.managerPort);

Lmp.proxies(args.onlyRunning, (error, response, body) => {
    console.log(error, response, body);
});