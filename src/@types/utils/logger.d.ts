export default interface LoggerInterface {
  log(message: string): void;
  error(message: string): void;
  printAsciiArt(): void;
}
