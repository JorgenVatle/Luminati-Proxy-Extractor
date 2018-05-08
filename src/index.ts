import * as CLI from 'cli';

const Package = require('../package.json');

// CLI Plugins
CLI.enable('version');

// CLI Configuration
CLI.setApp(Package.name, Package.version);

// Command line arguments
const args = CLI.parse({
    manager: ['m', 'Luminati Proxy Manager hostname.', 'string', '127.0.0.1:22999'],
    output: ['o', 'Proxy output path.', 'string', `./luminati-proxies-${Date.now()}.txt`]
});

console.log('Pulling proxies from:', args.manager);