import Table from 'cli-table3';
import { Answers } from '../@types/answers.js';

export const printSummary = (answers: Answers): void => {
    const table = new Table({
        head: ['Category', 'Selection'],
        colWidths: [20, 50]
    });

    table.push(
        ['Project Name', answers.projectName],
        ['Destination', answers.destination],
        ['Project Type', answers.projectType],
        ['Language', answers.language || 'JavaScript'],
        ['Dependencies', answers.dependencies.join(', ') || 'None'],
        ['Package Manager', answers.packageManager],
        ['Testing Tools', answers.testingTools.join(', ') || 'None'],
        ['Linting Tools', answers.lintingTools.join(', ') || 'None'],
        ['Formatting Tools', answers.formattingTools.join(', ') || 'None'],
        ['Initialize Git', answers.initializeGit ? 'Yes' : 'No']
    );

    console.log(table.toString());
};
