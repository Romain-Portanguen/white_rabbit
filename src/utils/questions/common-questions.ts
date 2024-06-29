import { DistinctQuestion } from 'inquirer';
import { Answers } from '../../@types/answers.js';
import { getDependenciesByProjectType } from '../dependencies.js';

const commonQuestions: DistinctQuestion<Answers>[] = [
    {
        type: 'confirm',
        name: 'installDependencies',
        message: 'Do you want to install additional dependencies?',
        default: true,
        when: (answers) => answers.projectType !== 'Angular'
    },
    {
        type: 'checkbox',
        name: 'dependencies',
        message: 'Which additional dependencies do you want to install?',
        choices: (answers) => {
            const dependencies = getDependenciesByProjectType(answers.projectType);
            return dependencies.map(dep => ({ name: dep, value: dep }));
        },
        when: (answers) => !!answers.installDependencies && answers.projectType !== 'Angular'
    },
    {
        type: 'confirm',
        name: 'installLintingTools',
        message: 'Do you want to install linting tools?',
        default: true,
        when: (answers) => !!answers.installDependencies && answers.projectType !== 'Angular'
    },
    {
        type: 'checkbox',
        name: 'lintingTools',
        message: 'Which linting tools do you want to use?',
        choices: ['ESLint', 'TSLint', 'Prettier'],
        when: (answers) => !!answers.installLintingTools && answers.projectType !== 'Angular'
    },
    {
        type: 'confirm',
        name: 'installFormattingTools',
        message: 'Do you want to install formatting tools?',
        default: true,
        when: (answers) => !!answers.installDependencies && answers.projectType !== 'Angular'
    },
    {
        type: 'checkbox',
        name: 'formattingTools',
        message: 'Which formatting tools do you want to use?',
        choices: ['Prettier', 'ESLint'],
        when: (answers) => !!answers.installFormattingTools && answers.projectType !== 'Angular'
    },
    {
        type: 'confirm',
        name: 'installTestingTools',
        message: 'Do you want to install testing tools?',
        default: true,
        when: (answers) => !!answers.installDependencies && answers.projectType !== 'Angular'
    },
    {
        type: 'checkbox',
        name: 'testingTools',
        message: 'Which testing tools do you want to use?',
        choices: ['jest', 'mocha', '@testing-library/react'],
        when: (answers) => !!answers.installTestingTools && answers.projectType !== 'Angular'
    },
    {
        type: 'list',
        name: 'packageManager',
        message: 'Which package manager do you want to use?',
        choices: ['npm', 'yarn', 'pnpm'],
        when: (answers) => answers.projectType !== 'Angular'
    },
    {
        type: 'confirm',
        name: 'initializeGit',
        message: 'Do you want to initialize a git repository?',
        default: true,
        when: (answers) => answers.projectType !== 'Angular'
    }
];

export default commonQuestions;
