import * as CLI from 'cli';

const Package = require('../package.json');

// CLI Plugins
CLI.enable('version');

// CLI Configuration
CLI.setApp(Package.name, Package.version);

// Command line arguments
const args = CLI.parse({
    manager: ['m', 'Luminati Proxy Manager hostname. E.g. 127.0.0.1:22999', 'string', '127.0.0.1:22999'],
});

console.log('Pulling proxies from:', args.manager);