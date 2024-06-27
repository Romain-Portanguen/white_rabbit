import inquirer, { QuestionCollection, DistinctQuestion } from 'inquirer';
import { Answers } from '../@types/answers.js';
import questions from './questions.js';

export const modifySelections = async (currentAnswers: Answers): Promise<Answers> => {
    const modifyQuestions: DistinctQuestion<Answers>[] = (questions as Array<QuestionCollection<Answers>>).map((question) => {
        const modifiedQuestion = { ...question } as DistinctQuestion<Answers>;
        if (currentAnswers[modifiedQuestion.name as keyof Answers] !== undefined) {
            modifiedQuestion.default = currentAnswers[modifiedQuestion.name as keyof Answers];
        }
        return modifiedQuestion;
    });

    return inquirer.prompt<Answers>(modifyQuestions);
};
