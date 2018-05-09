import * as CLI from 'cli';
import LmpInterface from "./LmpInterface";
import Pluralize from 'pluralize';

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

CLI.info(`Pulling proxies from: ${args.manager}`);

const Lmp = new LmpInterface(args.manager, args.managerPort);

Lmp.proxies(args.onlyRunning, (error, response, body) => {
    if (error) {
        CLI.error(error);
        return;
    }

    if (!body) {
        CLI.info(`Did not receive any proxies from the given manager. (${args.manager}:${args.managerPort})`);
        return;
    }

    CLI.ok(`Successfully pulled ${Pluralize('proxies', body.length, true)} from the proxy manager.`);
});