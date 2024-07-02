import { Answers } from './answers';

export default interface QuestionManagerInterface {
    askQuestions(): Promise<Answers>;
}
