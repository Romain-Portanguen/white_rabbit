import readline from 'readline';

export default class Spinner {
    private frames: string[];
    private interval: NodeJS.Timeout | null;
    private frameIndex: number;

    constructor() {
        this.frames = ['-', '\\', '|', '/'];
        this.interval = null;
        this.frameIndex = 0;
    }

    start(message: string): void {
        this.frameIndex = 0;
        this.interval = setInterval(() => {
            readline.cursorTo(process.stdout, 0);
            process.stdout.write(`${this.frames[this.frameIndex]} ${message}`);
            this.frameIndex = (this.frameIndex + 1) % this.frames.length;
        }, 100);
    }

    stop(): void {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
            readline.cursorTo(process.stdout, 0);
            process.stdout.write('');
            readline.clearLine(process.stdout, 0);
        }
    }

    succeed(message: string): void {
        this.stop();
        console.log(`✔ ${message}`);
    }

    fail(message: string): void {
        this.stop();
        console.error(`✖ ${message}`);
    }
}
