import Table from 'cli-table3';
import chalk from 'chalk';
import { Answers } from '../@types/answers.js';

export const printSummary = (answers: Answers): void => {
    const table = new Table({
        head: [chalk.magenta('Category'), chalk.magenta('Selection')],
        colWidths: [20, 50],
        style: {
            head: ['magenta'],
            border: ['gray']
        }
    });

    table.push(
        [chalk.green('Project Name'), answers.projectName],
        [chalk.green('Destination'), answers.destination],
        [chalk.green('Project Type'), answers.projectType],
        [chalk.green('Language'), answers.language || 'JavaScript'],
        [chalk.green('Dependencies'), answers.dependencies?.join(', ') || 'None'],
        [chalk.green('Package Manager'), answers.packageManager],
        [chalk.green('Testing Tools'), answers.testingTools?.join(', ') || 'None'],
        [chalk.green('Linting Tools'), answers.lintingTools?.join(', ') || 'None'],
        [chalk.green('Formatting Tools'), answers.formattingTools?.join(', ') || 'None'],
        [chalk.green('Initialize Git'), answers.initializeGit ? 'Yes' : 'No']
    );

    console.log(table.toString());
};
