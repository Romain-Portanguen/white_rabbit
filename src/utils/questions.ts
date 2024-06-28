import inquirer, { QuestionCollection } from 'inquirer';
import inquirerAutocompletePrompt from 'inquirer-autocomplete-prompt';
import { Answers } from '../@types/answers.js';
import { getDependenciesByProjectType } from './dependencies.js';
import { getDirectorySuggestions } from './path-suggestions.js';

inquirer.registerPrompt('autocomplete', inquirerAutocompletePrompt);

const questions: QuestionCollection<Answers> = [
    {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of your project?',
    },
    {
        type: 'autocomplete',
        name: 'destination',
        message: 'Where do you want to create the project? (Specify the path)',
        source: async (answers: Answers, input: string) => {
            return getDirectorySuggestions(input);
        },
        default: './projects',
        validate: (input) => {
            if (!input) {
                return 'Please specify a path';
            }
            return true;
        }
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
        type: 'confirm',
        name: 'installDependencies',
        message: 'Do you want to install additional dependencies?',
        default: true
    },
    {
        type: 'checkbox',
        name: 'dependencies',
        message: 'Which additional dependencies do you want to install?',
        choices: (answers) => getDependenciesByProjectType(answers.projectType, answers.language || 'JavaScript'),
        when: (answers) => answers.installDependencies
    },
    {
        type: 'confirm',
        name: 'installLintingTools',
        message: 'Do you want to install linting tools?',
        default: true,
        when: (answers) => answers.installDependencies
    },
    {
        type: 'checkbox',
        name: 'lintingTools',
        message: 'Which linting tools do you want to use?',
        choices: [
            'ESLint',
            'TSLint',
            'Prettier'
        ],
        when: (answers) => answers.installLintingTools
    },
    {
        type: 'confirm',
        name: 'installFormattingTools',
        message: 'Do you want to install formatting tools?',
        default: true,
        when: (answers) => answers.installDependencies
    },
    {
        type: 'checkbox',
        name: 'formattingTools',
        message: 'Which formatting tools do you want to use?',
        choices: [
            'Prettier',
            'ESLint'
        ],
        when: (answers) => answers.installFormattingTools
    },
    {
        type: 'confirm',
        name: 'installTestingTools',
        message: 'Do you want to install testing tools?',
        default: true,
        when: (answers) => answers.installDependencies
    },
    {
        type: 'checkbox',
        name: 'testingTools',
        message: 'Which testing tools do you want to use?',
        choices: [
            'jest',
            'mocha',
            '@testing-library/react'
        ],
        when: (answers) => answers.installTestingTools
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
        type: 'confirm',
        name: 'initializeGit',
        message: 'Do you want to initialize a git repository?',
        default: true
    }
];

export default questions;
