import inquirer, { QuestionCollection } from 'inquirer';
import { Answers } from '../@types/answers.js';
import questions from './questions.js';
import { printSummary } from './summary.js';
import { modifySelections } from './modify-selections.js';

class QuestionManager {
    async askQuestions(): Promise<Answers> {
        let answers: Answers = await inquirer.prompt<Answers>(questions as QuestionCollection<Answers>);
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
