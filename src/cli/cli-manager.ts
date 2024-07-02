import QuestionManagerInterface from '../@types/cli/question-manager';
import ApplicationBuilderInterface from '../@types/core/application-builder';
import Logger from '../utils/logger';
import { Answers } from '../@types/common/answers';

const USE_COLORS = true; // ROP: Define whether log messages should use colours.

class CLIManager {
    private questionManager: QuestionManagerInterface;
    private applicationBuilder: ApplicationBuilderInterface;
    private logger: Logger;

    constructor(questionManager: QuestionManagerInterface, applicationBuilder: ApplicationBuilderInterface) {
        this.questionManager = questionManager;
        this.applicationBuilder = applicationBuilder;
        this.logger = new Logger(USE_COLORS);
    }

    public async run(): Promise<void> {
        this.printWelcomeMessage();
        try {
            const answers: Answers = await this.questionManager.askQuestions();
            
            if (answers.confirm) {
                await this.applicationBuilder.buildApplication(answers);
                this.logger.log('Application created successfully, happy hacking! 🚀');
            } else {
                this.logger.log('Installation cancelled by user 😢');
            }
        } catch (error: any) {
            this.logger.log('An error occurred during the installation process. Please refer to the repository and send us an issue based on the error encountered.');
            this.logger.error(error.message);
        }
    }

    private printWelcomeMessage(): void {
        this.logger.printAsciiArt();
        this.logger.log('Welcome to White Rabbit CLI 🐇');
    }
}

export default CLIManager;
