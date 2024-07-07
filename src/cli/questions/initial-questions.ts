import { DistinctQuestion } from 'inquirer';
import { Answers } from '../../@types/common/answers';
import { getDirectorySuggestions } from '../../utils/path-suggestions';
import FileSystemInterface from '../../@types/utils/file-system';

const initialQuestions = (fileSystem: FileSystemInterface): DistinctQuestion<Answers>[] => [
    {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of your project?',
        validate: (input) => !!input || 'Project name is required'
    },
    {
        type: 'autocomplete',
        name: 'destination',
        message: 'Where do you want to create the project? (Specify the path)',
        source: async (answers, input) => {
            return getDirectorySuggestions(input, fileSystem);
        },
        validate: (input) => !!input || 'Destination is required'
    },
    {
        type: 'list',
        name: 'projectType',
        message: 'Which type of project do you want to initialize?',
        choices: ['React', 'Vue.js', 'Angular', 'Node.js'],
        default: 'React'
    },
    {
        type: 'list',
        name: 'language',
        message: 'Which language do you want to use?',
        choices: ['JavaScript', 'TypeScript'],
        default: 'JavaScript',
        when: (answers) => {
            return answers.projectType !== 'Angular';
        }
    }
];

export default initialQuestions;
