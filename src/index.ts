#!/usr/bin/env node
import CLIManager from './cli/cli-manager.js';

const whiteRabbit = new CLIManager();

whiteRabbit.run().catch(error => {
    console.error(error);
    process.exit(1);
});
