import inquirer from 'inquirer';
import inquirerAutocompletePrompt from 'inquirer-autocomplete-prompt';
import QuestionManagerInterface from '../../@types/cli/question-manager';
import initialQuestions from './initial-questions';
import getCommonQuestions from './common-questions';
import { printSummary } from '../../utils/summary';
import { runAngularCLI } from '../../core/project-initializer/angular-initializer';
import { Answers } from '../../@types/common/answers';
import Logger from '../../utils/logger';
import CommandExecutorInterface from '../../@types/utils/command-executor';

const USE_COLORS = true;
const logger = new Logger(USE_COLORS);

inquirer.registerPrompt('autocomplete', inquirerAutocompletePrompt as any);

class QuestionManager implements QuestionManagerInterface {
    private commandExecutor: CommandExecutorInterface;

    constructor(commandExecutor: CommandExecutorInterface) {
        this.commandExecutor = commandExecutor;
    }

    async askQuestions(): Promise<Answers> {
        while (true) {
            try {
                let answers: Answers = await inquirer.prompt<Answers>(initialQuestions);

                if (answers.projectType === 'Angular') {
                    await runAngularCLI(answers, this.commandExecutor);
                    answers.confirm = true;
                    return answers;
                }

                const commonQuestions = getCommonQuestions(answers);
                answers = { ...answers, ...(await inquirer.prompt<Answers>(commonQuestions)) };

                printSummary(answers);

                const { confirm } = await inquirer.prompt<{ confirm: boolean }>([
                    {
                        type: 'confirm',
                        name: 'confirm',
                        message: 'Do you want to proceed with the installation?',
                        default: false
                    }
                ]);

                if (confirm) {
                    answers.confirm = true;
                    return answers;
                } else {
                    const { retry } = await inquirer.prompt<{ retry: boolean }>([
                        {
                            type: 'confirm',
                            name: 'retry',
                            message: 'Do you want to restart the configuration process?',
                            default: false
                        }
                    ]);

                    if (!retry) {
                        logger.log('Leaving the configuration process... The white rabbit returns to his burrow 🐇');
                        process.exit(0);
                    } else {
                        logger.log('Restarting the configuration process...');
                    }
                }
            } catch (error: any) {
                logger.error(`Error during the question process: ${error.message}`);
                throw error;
            }
        }
    }
}

export default QuestionManager;
