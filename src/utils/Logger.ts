import chalk from 'chalk';

class Logger {
    static log(message: string): void {
        console.log(chalk.green(message));
    }

    static error(message: string): void {
        console.error(chalk.red(message));
    }

    static printAsciiArt(): void {
        const asciiArt = `
           _     _ _                   _     _     _ _        (\\(\\
          | |   (_) |                 | |   | |   (_) |       ( -.-)
 __      _| |__  _| |_ ___   _ __ __ _| |__ | |__  _| |_      o_(")(")
 \\ \\ /\\ / / '_ \\| | __/ _ \\ | '__/ _\` | '_ \\| '_ \\| | __|
  \\ V  V /| | | | | ||  __/ | | | (_| | |_) | |_) | | |_
   \\_/\\_/ |_| |_|_|\\__\\___| |_|  \\__,_|_.__/|_.__/|_|\\__|
                                                         
                                                         
        `;
        console.log(asciiArt);
    }
}

export default Logger;
