<p align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/6295/6295417.png" width="100" alt="project-logo">
</p>
<p align="center">
    <h1 align="center">WHITE_RABBIT</h1>
</p>
<p align="center">
    <em>Unleash code magic, effortlessly optimize and deploy.</em>
</p>
<p align="center">
 <img src="https://img.shields.io/github/license/Romain-Portanguen/white_rabbit?style=plastic&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
 <img src="https://img.shields.io/github/last-commit/Romain-Portanguen/white_rabbit?style=plastic&logo=git&logoColor=white&color=0080ff" alt="last-commit">
 <img src="https://img.shields.io/github/languages/top/Romain-Portanguen/white_rabbit?style=plastic&color=0080ff" alt="repo-top-language">
 <img src="https://img.shields.io/github/languages/count/Romain-Portanguen/white_rabbit?style=plastic&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
  <em>Developed with the software and tools below.</em>
</p>
<p align="center">
 <img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=plastic&logo=JavaScript&logoColor=black" alt="JavaScript">
 <img src="https://img.shields.io/badge/YAML-CB171E.svg?style=plastic&logo=YAML&logoColor=white" alt="YAML">
 <img src="https://img.shields.io/badge/Jest-C21325.svg?style=plastic&logo=Jest&logoColor=white" alt="Jest">
 <img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=plastic&logo=TypeScript&logoColor=white" alt="TypeScript">
 <img src="https://img.shields.io/badge/tsnode-3178C6.svg?style=plastic&logo=ts-node&logoColor=white" alt="tsnode">
 <img src="https://img.shields.io/badge/JSON-000000.svg?style=plastic&logo=JSON&logoColor=white" alt="JSON">
</p>

<br><!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary><br>

- [📍 Overview](#-overview)
- [🧩 Features](#-features)
- [🗂️ Repository Structure](#️-repository-structure)
- [📦 Modules](#-modules)
- [🚀 Getting Started](#-getting-started)
  - [⚙️ Installation](#️-installation)
  - [🤖 Usage](#-usage)
  - [🧪 Tests](#-tests)
- [🤝 Contributing](#-contributing)
- [🎗 License](#-license)

</details>
<hr>

## 📍 Overview

White Rabbit automates project setup by offering an interactive CLI tool that initializes JavaScript projects with TypeScript support. It manages dependencies, sets up Git repositories, and configures popular tools like ESLint, Prettier, and Jest. By dynamically handling project types such as React, Vue.js, Node.js and Angular, White Rabbit streamlines application building and execution, enhancing developer productivity.

---

## 🧩 Features

|     | Feature           | Description                                                                                                                                                                                                                                                                                                                                            |
|-----|-------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ⚙️  | **Architecture**  | White Rabbit project features a modular architecture with interfaces for core functionalities like dependency management, Git initialization, and application building. It utilizes TypeScript for type safety and enhanced structure. CLI Manager orchestrates various modules for streamlined application creation.                                  |
| 🔩  | **Code Quality**  | The codebase maintains high code quality standards with TypeScript for strict typing, consistent naming conventions, and clean architecture patterns. Jest testing framework ensures robust test coverage, enhancing code reliability and maintainability. ESLint and Prettier configurations enforce consistent code formatting and style guidelines. |
| 📄  | **Documentation** | The project provides comprehensive documentation, including type declarations for core modules, CLI operations, and utilities. README.md offers project overview, installation instructions, and usage guidelines. Inline comments and type annotations enhance code readability and maintainability.                                                  |
| 🔌  | **Integrations**  | Key integrations include Jest for testing, Inquirer for interactive prompts, chalk for colored output, and execa for shell command execution. External dependencies like cli-table3 and ora enhance CLI functionality and user experience. Modular design facilitates seamless integration of new features and tools.                                  |
| 🧩  | **Modularity**    | White Rabbit emphasizes modularity and reusability with interfaces defining core functionalities. Dependencies are managed dynamically based on project type, enhancing flexibility and extensibility. Modules like dependency-installer and git-initializer encapsulate specific tasks, promoting code reusability and maintainability.               |
| 🧪  | **Testing**       | The project utilizes Jest along with TypeScript to ensure comprehensive test coverage. Mocks and spies are employed for testing CLI Manager functionalities, ensuring reliable testing outcomes. Testing Library configurations enhance testing capabilities, supporting efficient unit and integration testing.                                       |
| ⚡️  | **Performance**   | White Rabbit focuses on efficiency with tools like UglifyJS for code minification and optimization. The project's streamlined architecture and use of TypeScript contribute to improved performance and resource utilization. Dynamic dependency installation and Git setup enhance project initialization speed.                                      |
| 🛡️ | **Security**      | Security measures include robust typing with TypeScript, preventing common runtime errors and vulnerabilities. Git initializer ensures proper setup of version control, enhancing code security and collaboration. Strict ESLint rules and standardized code formatting promote secure coding practices.                                               |
| 📦  | **Dependencies**  | Key dependencies include Jest for testing, Inquirer for CLI interaction, chalk for colored output, and execa for command execution. TypeScript, ts-node, and ts-jest support the projects TypeScript ecosystem. yaml and glob aid in configuration and file handling tasks.                                                                            |

---

## 🗂️ Repository Structure

```sh
└── white_rabbit/
    ├── .github
    │   └── FUNDING.yml
    ├── LICENSE
    ├── README.md
    ├── add-js-extensions.js
    ├── jest.config.ts
    ├── minify.mjs
    ├── package-lock.json
    ├── package.json
    ├── src
    │   ├── @types
    │   ├── __tests__
    │   ├── cli
    │   ├── core
    │   ├── index.ts
    │   ├── public
    │   └── utils
    └── tsconfig.json
```

---

## 📦 Modules

<details closed><summary>.</summary>

| File                                                                                                       | Summary                                                                                                                                                                                                                                                                                                                                                                                |
|------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [minify.mjs](https://github.com/Romain-Portanguen/white_rabbit/blob/master/minify.mjs)                     | Initiates minification process using UglifyJS for all JavaScript files in the dist directory. Finds, minifies, renames, and deletes files, ensuring efficient handling of JavaScript resources for the project.                                                                                                                                                                        |
| [add-js-extensions.js](https://github.com/Romain-Portanguen/white_rabbit/blob/master/add-js-extensions.js) | Automates adding.js extensions to ES module imports in the dist directory to ensure proper module resolution for JavaScript files within the White Rabbit repository.                                                                                                                                                                                                                  |
| [package-lock.json](https://github.com/Romain-Portanguen/white_rabbit/blob/master/package-lock.json)       | The code in `minify.mjs` is responsible for optimizing and reducing the size of JavaScript files within the `white_rabbit` repository. By minimizing the code, it enhances the overall performance and efficiency of the software. This file plays a crucial role in ensuring that the final output of the repositorys JavaScript codebase is streamlined and optimized for execution. |
| [package.json](https://github.com/Romain-Portanguen/white_rabbit/blob/master/package.json)                 | Enables rapid project initialization via the White Rabbit CLI tool. It manages project setup intelligently, leveraging TypeScript and Node.js. Key features include interactive prompts, project type selection, and efficient code minification.                                                                                                                                      |
| [tsconfig.json](https://github.com/Romain-Portanguen/white_rabbit/blob/master/tsconfig.json)               | Enables TypeScript compilation and resolution, optimizing the projects structure. It specifies ESNext target, node module resolution, and plugins for transforming JavaScript files, ensuring strict typing and consistent naming conventions while including relevant source directories for processing.                                                                              |
| [jest.config.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/jest.config.ts)             | Configures Jest testing environment for TypeScript files, excluding specified paths. Specifies file extensions, root directories, and transformation rules. Defines global settings for TypeScript compilation.                                                                                                                                                                        |

</details>

<details closed><summary>.github</summary>

| File                                                                                             | Summary                                                                                                                                                                                                     |
|--------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [FUNDING.yml](https://github.com/Romain-Portanguen/white_rabbit/blob/master/.github/FUNDING.yml) | Defines funding options for the project, linking to platforms like GitHub Sponsors, Patreon, and Open Collective. Enables financial support via various channels to sustain project development and growth. |

</details>

<details closed><summary>src</summary>

| File                                                                                   | Summary                                                                                                                                                                                                                          |
|----------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [index.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/index.ts) | Initiates CLI Manager, facilitating interactive questioning and software creation. Orchestrates Dependency Installer, Configurer, Git Initializer, and Package Manager Checker to streamline application building and execution. |

</details>

<details closed><summary>src.@types.core</summary>

| File                                                                                                                                       | Summary                                                                                                                                                                                                            |
|--------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [package-manager-checker.d.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/@types/core/package-manager-checker.d.ts) | Defines interface for checking availability of package managers and confirming if they are available. Crucial for managing package installations across different environments within the white_rabbit repository. |
| [dependency-installer.d.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/@types/core/dependency-installer.d.ts)       | Defines interface for installing dependencies using specified package manager and project directory.                                                                                                               |
| [git-initializer.d.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/@types/core/git-initializer.d.ts)                 | InitializeGitRepository() and createGitignoreFile(), crucial for setting up and customizing Git repositories within the core module of the white_rabbit project.                                                   |
| [dependency-configurer.d.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/@types/core/dependency-configurer.d.ts)     | Defines DependencyConfigurerInterface to manage project dependencies dynamically based on language, enhancing modularity and flexibility in dependency handling within the repositorys architecture.               |
| [application-builder.d.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/@types/core/application-builder.d.ts)         | Defines interface for application builder to construct application based on user answers.                                                                                                                          |

</details>

<details closed><summary>src.@types.utils</summary>

| File                                                                                                                          | Summary                                                                                                                                                                                                       |
|-------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [command-executor.d.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/@types/utils/command-executor.d.ts) | Defines CommandExecutorInterface for executing commands with options like current working directory and stream I/O.                                                                                           |
| [logger.d.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/@types/utils/logger.d.ts)                     | Defines a LoggerInterface for logging messages and printing ASCII art. Essential for enforcing logging standards across the projects utilities and maintaining a consistent user experience.                  |
| [file-system.d.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/@types/utils/file-system.d.ts)           | Defines FileSystemInterface with methods for file manipulation, access, and directory handling. Crucial for interacting with the file system in White Rabbits architecture for core functionality operations. |

</details>

<details closed><summary>src.@types.cli</summary>

| File                                                                                                                        | Summary                                                                                                                                                                                               |
|-----------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [question-manager.d.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/@types/cli/question-manager.d.ts) | Defines QuestionManagerInterface interface for asking questions, importing Answers interface. Facilitates interaction with the CLI question manager within the white_rabbit repositorys architecture. |

</details>

<details closed><summary>src.@types.common</summary>

| File                                                                                                                                                   | Summary                                                                                                                                                                                                                                                                                         |
|--------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [inquirer-autocomplete-prompt.d.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/@types/common/inquirer-autocomplete-prompt.d.ts) | Defines type declaration for inquirer-autocomplete-prompt module, facilitating structured interaction within the parent repository.                                                                                                                                                             |
| [answers.d.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/@types/common/answers.d.ts)                                           | Defines Inquirer extension for Autocomplete questions, augmenting the QuestionMap interface. Specifies answer structure for project setup choices like project name, language & testing tools. Enhances user input experience during project initialization within the White Rabbit repository. |

</details>

<details closed><summary>src.core</summary>

| File                                                                                                                            | Summary                                                                                                                                                                                                                                                                                                                                    |
|---------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [dependency-configurer.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/core/dependency-configurer.ts)     | Implements a class to configure Tailwind CSS dependencies dynamically in a project directory. Handles setting up Tailwind configuration files and generating necessary CSS content. Key for enhancing project styling without manual setup.                                                                                                |
| [git-initializer.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/core/git-initializer.ts)                 | Initializing repos and creating.gitignore files. It utilizes external interfaces for executing commands and file system interactions, supporting the core functionality of setting up Git repositories in the project directory.                                                                                                           |
| [package-manager-checker.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/core/package-manager-checker.ts) | Detects available package managers and checks their availability for use in the project, ensuring seamless integration with supported managers-pnpm, yarn, and npm. Offering a fallback mechanism by prioritizing alternative managers if the preferred one is unavailable.                                                                |
| [dependency-installer.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/core/dependency-installer.ts)       | Enables seamless installation of project dependencies with various package managers. Validates package manager availability, constructs install commands dynamically, and provides real-time installation feedback using a spinner. A crucial component for managing project dependencies effectively within the repositorys architecture. |
| [application-builder.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/core/application-builder.ts)         | Builds projects, initializes tools, handles dependencies, configures linting, formatting, and testing tools, sets up Git, and changes project directories based on user input for various project types like Angular and Node.js in the repositorys core architecture.                                                                     |

</details>

<details closed><summary>src.core.project-initializer</summary>

| File                                                                                                                                        | Summary                                                                                                                                                                                                                                                                                                            |
|---------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [react-initializer.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/core/project-initializer/react-initializer.ts)     | Generates React projects with TypeScript support, leveraging the command executor interface for setup.                                                                                                                                                                                                             |
| [vuejs-initializer.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/core/project-initializer/vuejs-initializer.ts)     | Creates a Vue.js project with TypeScript support, handling project initialization, dependencies installation, and configuration setup. The function ensures seamless Vue.js project creation and properly configures TypeScript support for enhanced development capabilities within the repositorys architecture. |
| [nodejs-initializer.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/core/project-initializer/nodejs-initializer.ts)   | Initiates Node.js project setup, handling package.json creation, installing dependencies, and configuring ESLint, Prettier, Jest, Mocha, and Testing Library. Ensures smooth project initialization, logging success or failure, forking on user input.                                                            |
| [angular-initializer.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/core/project-initializer/angular-initializer.ts) | Initialize and run Angular projects with CLI commands. Handles project directory creation and Angular setup. Facilitates smooth project initialization with logging and error handling. Centralizes CLI commands execution for efficient project setup.                                                            |
| [index.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/core/project-initializer/index.ts)                             | Enables dynamic creation of React, Angular, Node.js, and Vue.js projects with specified tools and dependencies based on user input. Abstraction layer for project initialization logic in the core architecture.                                                                                                   |

</details>

<details closed><summary>src.utils</summary>

| File                                                                                                               | Summary                                                                                                                                                                                                                                                                                                                     |
|--------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [dependencies.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/utils/dependencies.ts)         | Extracts dependencies based on project types like React, Vue.js, or Node.js from a map, aiding in managing necessary libraries for different project frameworks.                                                                                                                                                            |
| [file-system.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/utils/file-system.ts)           | Implements filesystem operations for writing, appending, creating directories, checking access, reading directories, and getting file stats within the white_rabbit repositorys architecture.                                                                                                                               |
| [command-executor.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/utils/command-executor.ts) | Implements a CommandExecutor class handling execution of shell commands using execa. Facilitates executing commands with customizable options like current working directory and standard input/output handling for efficient command line operations within the white_rabbit repositorys architecture.                     |
| [summary.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/utils/summary.ts)                   | Prints a summary of project details using a color-formatted table. Allows visualizing key selections such as project name, type, language, dependencies, tools, and Git initialization status. Facilitates easy grasp of project setup information for better organization and planning within the repository architecture. |
| [Logger.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/utils/Logger.ts)                     | Employs a colorful Logger to produce ASCII art and custom log messages based on the given severity level. Enhances readability by using chalk.                                                                                                                                                                              |
| [path-suggestions.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/utils/path-suggestions.ts) | Generates directory suggestions based on input, filtering out certain directories. Conducts error logging for file system operations. Main features include resolving paths, reading directory contents, and handling errors gracefully.                                                                                    |

</details>

<details closed><summary>src.utils.configurations</summary>

| File                                                                                                                                          | Summary                                                                                                                                                                                                                                                  |
|-----------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [mocha-config.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/utils/configurations/mocha-config.ts)                     | Generates and updates Mocha configuration and test files based on project type, enhancing test capabilities and script commands in the repository.                                                                                                       |
| [jest-config.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/utils/configurations/jest-config.ts)                       | Generates Jest configuration based on project type, updates setup files for React, Vue.js, or Node.js projects, and enhances package.json with Jest test script.                                                                                         |
| [testing-library-config.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/utils/configurations/testing-library-config.ts) | Generates Jest configurations based on project type, Vue.js-specific setup if applicable, adds jest-dom to testing environment, and updates package.json for Jest script, enhancing testing capabilities in the White Rabbit repository.                 |
| [prettier-config.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/utils/configurations/prettier-config.ts)               | Generates Prettier configuration file for project directory, defining formatting rules.                                                                                                                                                                  |
| [eslint-config.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/utils/configurations/eslint-config.ts)                   | Generates ESLint configuration file with preset rules for React and TypeScript projects. Dynamically creates.eslintrc.json in the specified project directory based on recommended ESLint and Prettier configurations to enforce code quality standards. |

</details>

<details closed><summary>src.cli</summary>

| File                                                                                                   | Summary                                                                                                                                                                         |
|--------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [cli-manager.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/cli/cli-manager.ts) | Orchestrates question prompts and application building, handling success and error logging. Implements a colorful log feature and ASCII art for a personalized welcome message. |

</details>

<details closed><summary>src.cli.questions</summary>

| File                                                                                                                         | Summary                                                                                                                                                                                                                                                           |
|------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [question-manager.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/cli/questions/question-manager.ts)   | Manages user prompts for project configuration, based on answers guides actions. Supports customization and decision-making during setup, with error handling.                                                                                                    |
| [common-questions.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/cli/questions/common-questions.ts)   | Generates common questions for project setup based on project type, providing options for dependencies, linting tools, formatting tools, testing tools, and initializing a git repository. Supports customization for different project types, excluding Angular. |
| [initial-questions.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/cli/questions/initial-questions.ts) | Inquire project name, destination path, project type, language, and package manager choices. Utilize filesystem interface for directory suggestions and conditional prompts based on project type selection.                                                      |

</details>

<details closed><summary>src.__tests__.cli</summary>

| File                                                                                                                       | Summary                                                                                                                                                                                 |
|----------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [cli-manager.test.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/__tests__/cli/cli-manager.test.ts) | Printing welcome message, building application based on user confirmation, handling installation errors. Uses mocks for dependencies and spies on logger methods during test execution. |

</details>

---

## 🚀 Getting Started

**System Requirements:**

- **TypeScript**: `version x.y.z`

### ⚙️ Installation

<h4>From <code>source</code></h4>

> 1. Clone the white_rabbit repository:
>
> ```console
> $ git clone https://github.com/Romain-Portanguen/white_rabbit
> ```
>
> 2. Change to the project directory:
>
> ```console
> $ cd white_rabbit
> ```
>
> 3. Install the dependencies:
>
> ```console
> $ npm install
> ```

### 🤖 Usage

<h4>From <code>source</code></h4>

> Run white_rabbit using the command below:
>
> ```console
> $ npm run build && npm start
> ```

### 🧪 Tests

> Run the test suite using the command below:
>
> ```console
> $ npm run test
> ```

---

## 🤝 Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Report Issues](https://github.com/Romain-Portanguen/white_rabbit/issues)**: Submit bugs found or log feature requests for the `white_rabbit` project.
- **[Submit Pull Requests](https://github.com/Romain-Portanguen/white_rabbit/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/Romain-Portanguen/white_rabbit/discussions)**: Share your insights, provide feedback, or ask questions.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.

   ```sh
   git clone https://github.com/Romain-Portanguen/white_rabbit
   ```

3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.

   ```sh
   git checkout -b new-feature-x
   ```

4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.

   ```sh
   git commit -m 'Implemented new feature x.'
   ```

6. **Push to github**: Push the changes to your forked repository.

   ```sh
   git push origin new-feature-x
   ```

7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!

</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="center">
   <a href="https://github.com{/Romain-Portanguen/white_rabbit/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=Romain-Portanguen/white_rabbit">
   </a>
</p>
</details>

---

## 🎗 License

This project is protected under the [MIT](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---
