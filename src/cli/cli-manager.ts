import QuestionManager from '../utils/question-manager.js';
import ApplicationBuilder from '../core/application-builder.js';
import Logger from '../utils/logger.js';
import { Answers } from '../@types/answers.js';

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
            Logger.log('Application created successfully, happy hacking! 🚀');
        } else {
            Logger.log('Installation cancelled by user 😢');
        }
    }

    private printWelcomeMessage(): void {
        Logger.printAsciiArt();
        Logger.log('Welcome to White Rabbit CLI 🐇');
    }
}

export default CLIManager;
