import CLIManager from './cli/CLIManager.js';

const cliManager = new CLIManager();
cliManager.run().catch(error => {
    console.error(error);
    process.exit(1);
});
