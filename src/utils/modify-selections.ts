import inquirer, { DistinctQuestion } from 'inquirer';
import getCommonQuestions from './questions/common-questions.js';
import initialQuestions from './questions/initial-questions.js';
import { Answers } from '../@types/answers.js';

export async function modifySelections(answers: Answers): Promise<Answers> {
    const commonQuestions = getCommonQuestions(answers);
    const allQuestions: DistinctQuestion<Answers>[] = [...initialQuestions, ...commonQuestions];
    const questionMap = new Map(allQuestions.map(q => [q.name, q]));

    const modifyChoices = Object.keys(answers).filter(key => key !== 'confirm').map(key => ({
        name: questionMap.get(key)?.message || key,
        value: key
    }));

    const { selectionsToModify } = await inquirer.prompt([
        {
            type: 'checkbox',
            name: 'selectionsToModify',
            message: 'Which selections do you want to modify?',
            choices: modifyChoices,
            default: modifyChoices.map(choice => choice.value)
        }
    ]);

    for (const selection of selectionsToModify) {
        const question = questionMap.get(selection);
        if (question) {
            const newAnswer = await inquirer.prompt([question]);
            answers = { ...answers, ...newAnswer };
        }
    }

    return answers;
}
