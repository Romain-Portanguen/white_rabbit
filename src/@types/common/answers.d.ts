declare module 'inquirer' {
  interface QuestionMap<T> {
    autocomplete: AutocompleteQuestion<T>;
  }

  interface AutocompleteQuestion<T> extends Question<T> {
    type: 'autocomplete';
    source: (answers: T, input: string) => Promise<string[]>;
  }
}

export interface Answers {
  confirm: boolean;
  confirmSummary?: boolean;
  dependencies?: string[];
  destination: string;
  formattingTools?: string[];
  initializeGit: boolean;
  installDependencies: boolean;
  installFormattingTools?: boolean;
  installLintingTools?: boolean;
  installTestingTools?: boolean;
  language: string;
  lintingTools?: string[];
  packageManager: string;
  projectName: string;
  projectType: string;
  testingTools: string[];
}
