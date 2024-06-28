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
