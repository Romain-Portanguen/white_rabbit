import { Answers } from './answers';

export default interface ApplicationBuilderInterface {
    buildApplication(answers: Answers): Promise<void>;
}
