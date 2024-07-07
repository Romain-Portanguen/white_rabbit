import { DistinctQuestion } from 'inquirer';
import { Answers } from '../../@types/common/answers';
import { getDependenciesByProjectType } from '../../utils/dependencies';

const getCommonQuestions = (answers: Answers): DistinctQuestion<Answers>[] => {
    const dependencies = getDependenciesByProjectType(answers.projectType);

    return [
        {
            type: 'confirm',
            name: 'installDependencies',
            message: 'Do you want to install additional dependencies?',
            default: true,
            when: (answers) => {
                return answers.projectType !== 'Angular';
            }
        },
        {
            type: 'checkbox',
            name: 'dependencies',
            message: 'Which additional dependencies do you want to install?',
            choices: dependencies.map(dep => ({ name: dep, value: dep })),
            when: (answers) => {
                return !!answers.installDependencies && answers.projectType !== 'Angular';
            }
        },
        {
            type: 'confirm',
            name: 'installLintingTools',
            message: 'Do you want to install linting tools?',
            default: true,
            when: (answers) => {
                return !!answers.installDependencies && answers.projectType !== 'Angular';
            }
        },
        {
            type: 'checkbox',
            name: 'lintingTools',
            message: 'Which linting tools do you want to use?',
            choices: ['ESLint', 'TSLint', 'Prettier'],
            when: (answers) => {
                return !!answers.installLintingTools && answers.projectType !== 'Angular';
            }
        },
        {
            type: 'confirm',
            name: 'installFormattingTools',
            message: 'Do you want to install formatting tools?',
            default: true,
            when: (answers) => {
                return !!answers.installDependencies && answers.projectType !== 'Angular';
            }
        },
        {
            type: 'checkbox',
            name: 'formattingTools',
            message: 'Which formatting tools do you want to use?',
            choices: ['Prettier', 'ESLint'],
            when: (answers) => {
                return !!answers.installFormattingTools && answers.projectType !== 'Angular';
            }
        },
        {
            type: 'confirm',
            name: 'installTestingTools',
            message: 'Do you want to install testing tools?',
            default: true,
            when: (answers) => {
                return !!answers.installDependencies && answers.projectType !== 'Angular';
            }
        },
        {
            type: 'checkbox',
            name: 'testingTools',
            message: 'Which testing tools do you want to use?',
            choices: ['jest', 'mocha', '@testing-library/react'],
            when: (answers) => {
                return !!answers.installTestingTools && answers.projectType !== 'Angular';
            }
        },
        {
            type: 'confirm',
            name: 'initializeGit',
            message: 'Do you want to initialize a git repository?',
            default: true,
            when: (answers) => {
                return answers.projectType !== 'Angular';
            }
        }
    ];
};

export default getCommonQuestions;
