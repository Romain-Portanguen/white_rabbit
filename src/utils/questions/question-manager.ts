import inquirer, { DistinctQuestion } from 'inquirer';
import inquirerAutocompletePrompt from 'inquirer-autocomplete-prompt';
import { Answers } from '../../@types/answers.js';
import initialQuestions from './initial-questions.js';
import commonQuestions from './common-questions.js';
import { printSummary } from '../summary.js';
import { modifySelections } from '../modify-selections.js';
import { runAngularCLI } from '../../core/project-initializer/angular-initializer.js';

inquirer.registerPrompt('autocomplete', inquirerAutocompletePrompt as any);

class QuestionManager {
    async askQuestions(): Promise<Answers> {
        let answers: Answers = await inquirer.prompt<Answers>(initialQuestions);

        if (answers.projectType === 'Angular') {
            await runAngularCLI(answers);
            answers.confirm = true;
            return answers;
        }

        const additionalQuestions: DistinctQuestion<Answers>[] = [...commonQuestions];
        answers = { ...answers, ...(await inquirer.prompt<Answers>(additionalQuestions)) };

        let confirmSummary = true;

        while (confirmSummary) {
            printSummary(answers);

            const { modify, confirm } = await inquirer.prompt<{ modify: boolean, confirm: boolean }>([
                {
                    type: 'confirm',
                    name: 'modify',
                    message: 'Do you want to modify any of your selections?',
                    default: false
                },
                {
                    type: 'confirm',
                    name: 'confirm',
                    message: 'Do you want to proceed with the installation?',
                    default: false,
                    when: (response) => !response.modify
                }
            ]);

            if (modify) {
                answers = await modifySelections(answers);
            } else {
                confirmSummary = false;
                answers.confirm = confirm;
            }
        }

        return answers;
    }
}

export default QuestionManager;
