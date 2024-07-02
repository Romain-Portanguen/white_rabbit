import CLIManager from '../../cli/cli-manager';
import QuestionManagerInterface from '../../@types/cli/question-manager';
import ApplicationBuilderInterface from '../../@types/core/application-builder';
import Logger from '../../utils/logger';

jest.mock('../../utils/logger.ts');

describe('The CLIManager class', () => {
    let mockQuestionManager: QuestionManagerInterface;
    let mockApplicationBuilder: ApplicationBuilderInterface;
    let cliManager: CLIManager;
    let loggerSpy: jest.SpyInstance;

    beforeEach(() => {
        mockQuestionManager = {
            askQuestions: jest.fn()
        };

        mockApplicationBuilder = {
            buildApplication: jest.fn()
        };

        cliManager = new CLIManager(mockQuestionManager, mockApplicationBuilder);

        loggerSpy = jest.spyOn(Logger.prototype, 'log').mockImplementation(() => {});
        jest.spyOn(Logger.prototype, 'printAsciiArt').mockImplementation(() => {});
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should print welcome message on run', async () => {
        await cliManager.run();

        expect(Logger.prototype.printAsciiArt).toHaveBeenCalled();
        expect(loggerSpy).toHaveBeenCalledWith('Welcome to White Rabbit CLI 🐇');
    });

    it('should build application if user confirms', async () => {
        (mockQuestionManager.askQuestions as jest.Mock).mockResolvedValue({
            confirm: true
        });

        await cliManager.run();

        expect(mockQuestionManager.askQuestions).toHaveBeenCalled();
        expect(mockApplicationBuilder.buildApplication).toHaveBeenCalled();
        expect(loggerSpy).toHaveBeenCalledWith('Application created successfully, happy hacking! 🚀');
    });

    it('should not build application if user does not confirm', async () => {
        (mockQuestionManager.askQuestions as jest.Mock).mockResolvedValue({
            confirm: false
        });

        await cliManager.run();

        expect(mockQuestionManager.askQuestions).toHaveBeenCalled();
        expect(mockApplicationBuilder.buildApplication).not.toHaveBeenCalled();
        expect(loggerSpy).toHaveBeenCalledWith('Installation cancelled by user 😢');
    });

    it('should log an error if an error occurs during the installation process', async () => {
        const error = new Error('Test error');
        (mockQuestionManager.askQuestions as jest.Mock).mockRejectedValue(error);

        await cliManager.run();

        expect(loggerSpy).toHaveBeenCalledWith(
            'An error occurred during the installation process. Please refer to the repository and send us an issue based on the error encountered.'
        );
        expect(Logger.prototype.error).toHaveBeenCalledWith(error.message);
    });
});
