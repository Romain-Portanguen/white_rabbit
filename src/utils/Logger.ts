import chalk from 'chalk';
import LoggerInterface from '../@types/utils/logger';

type LogLevel = 'log' | 'error';

class Logger implements LoggerInterface {
    private useColors: boolean;

    constructor(useColors: boolean = true) {
        this.useColors = useColors;
    }

    public log(message: string): void {
        this.printMessage('log', message);
    }

    public error(message: string): void {
        this.printMessage('error', message);
    }

    public printAsciiArt(): void {
        const asciiArt = `
           _     _ _                   _     _     _ _        (\\(\\
          | |   (_) |                 | |   | |   (_) |       ( -.-)
 __      _| |__  _| |_ ___   _ __ __ _| |__ | |__  _| |_      o_(")(")
 \\ \\ /\\ / / '_ \\| | __/ _ \\ | '__/ _\` | '_ \\| '_ \\| | __|
  \\ V  V /| | | | | ||  __/ | | | (_| | |_) | |_) | | |_
   \\_/\\_/ |_| |_|_|\\__\\___| |_|  \\__,_|_.__/|_.__/|_|\\__|
                                                         
                                                         
        `;
        console.log(this.useColors ? chalk.magenta(asciiArt) : asciiArt);
    }

    private printMessage(level: LogLevel, message: string): void {
        const color = level === 'log' ? chalk.green : chalk.red;
        const prefix = level === 'log' ? '✔' : '✖';
        const formattedMessage = `${prefix} ${message}`;

        if (this.useColors) {
            console[level](color(formattedMessage));
        } else {
            console[level](formattedMessage);
        }
    }
}

export default Logger;
