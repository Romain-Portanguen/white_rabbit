import CLIManager from './cli/CLIManager.js';

const whiteRabbit = new CLIManager();

whiteRabbit.run().catch(error => {
    console.error(error);
    process.exit(1);
});
