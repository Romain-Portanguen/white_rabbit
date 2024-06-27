import QuestionManager from '../utils/QuestionManager.js';
import ApplicationBuilder from '../core/ApplicationBuilder.js';
import Logger from '../utils/Logger.js';
import { Answers } from '../@types/Answers.js';

class CLIManager {
    private questionManager: QuestionManager;
    private applicationBuilder: ApplicationBuilder;

    constructor() {
        this.questionManager = new QuestionManager();
        this.applicationBuilder = new ApplicationBuilder();
    }

    async run(): Promise<void> {
        this.printWelcomeMessage();
        const answers: Answers = await this.questionManager.askQuestions();
        
        if (answers.confirm) {
            await this.applicationBuilder.buildApplication(answers);
            Logger.log('Application created successfully!');
        } else {
            Logger.log('Installation cancelled by user.');
        }
    }

    private printWelcomeMessage(): void {
        Logger.printAsciiArt();
        Logger.log('Welcome to White Rabbit CLI!');
    }
}

export default CLIManager;
