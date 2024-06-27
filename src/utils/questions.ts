import inquirer, { QuestionCollection } from 'inquirer';
import inquirerFuzzyPath from 'inquirer-fuzzy-path';
import { Answers } from '../@types/answers.js';
import { getDependenciesByProjectType } from './dependencies.js';

inquirer.registerPrompt('fuzzypath', inquirerFuzzyPath);

const questions: QuestionCollection<Answers> = [
    {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of your project?',
    },
    {
        type: 'fuzzypath',
        name: 'destination',
        itemType: 'directory',
        rootPath: '.',
        message: 'Where do you want to create the project? (Specify the path)',
        default: './',
        suggestOnly: false,
        depthLimit: 5
    },
    {
        type: 'list',
        name: 'projectType',
        message: 'Which type of project do you want to initialize?',
        choices: [
            'React',
            'Angular',
            'Vue.js',
            'Node.js'
        ]
    },
    {
        type: 'list',
        name: 'language',
        message: 'Which language do you want to use?',
        choices: [
            'JavaScript',
            'TypeScript'
        ],
        when: (answers) => answers.projectType !== 'Node.js'
    },
    {
        type: 'checkbox',
        name: 'dependencies',
        message: 'Which additional dependencies do you want to install?',
        choices: (answers) => getDependenciesByProjectType(answers.projectType)
    },
    {
        type: 'list',
        name: 'packageManager',
        message: 'Which package manager do you want to use?',
        choices: [
            'npm',
            'yarn',
            'pnpm'
        ]
    },
    {
        type: 'checkbox',
        name: 'testingTools',
        message: 'Which testing tools do you want to use?',
        choices: [
            'Jest',
            'Mocha',
            'Chai',
            'Testing Library'
        ]
    },
    {
        type: 'checkbox',
        name: 'lintingTools',
        message: 'Which linting tools do you want to use?',
        choices: [
            'ESLint',
            'TSLint',
            'Prettier'
        ]
    },
    {
        type: 'checkbox',
        name: 'formattingTools',
        message: 'Which formatting tools do you want to use?',
        choices: [
            'Prettier',
            'ESLint'
        ]
    },
    {
        type: 'confirm',
        name: 'additionalConfig',
        message: 'Do you want to add additional configuration for tools?'
    },
    {
        type: 'confirm',
        name: 'initializeGit',
        message: 'Do you want to initialize a git repository?',
        default: true
    }
];

export default questions;