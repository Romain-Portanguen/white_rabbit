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
	<img src="https://img.shields.io/badge/tsnode-3178C6.svg?style=plastic&logo=ts-node&logoColor=white" alt="tsnode">
	<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=plastic&logo=TypeScript&logoColor=white" alt="TypeScript">
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
- [🛠 Project Roadmap](#-project-roadmap)
- [🤝 Contributing](#-contributing)
- [🎗 License](#-license)
- [🔗 Acknowledgments](#-acknowledgments)
</details>
<hr>

## 📍 Overview

White Rabbit automates project setup with TypeScript CLI tools, facilitating seamless initialization, testing, and dependency management. Core functionalities include project structuring, Git integration, and tailored setup for React, Vue.js, Node.js, and Angular projects. The projects value lies in enhancing developer efficiency while ensuring consistent configurations and streamlined project initialization within the White Rabbit repository architecture.

---

## 🧩 Features

|    |   Feature         | Description |
|----|-------------------|---------------------------------------------------------------|
| ⚙️  | **Architecture**  | The project has a well-structured architecture with modules for CLI interaction, project initialization, configuration setup, and more, ensuring a clear and organized codebase. TypeScript is used throughout the project for type safety and maintainability. |
| 🔩 | **Code Quality**  | The codebase maintains a high level of quality with consistent coding style, error handling, and clear logging mechanisms. Testing is incorporated for quality assurance, and linting tools like ESLint and Prettier enforce code standards. |
| 📄 | **Documentation** | The project provides extensive documentation through type annotations, README files, and inline comments, enhancing code understandability and helping developers onboard quickly. The GitHub repository contains detailed guidelines and instructions for contributors. |
| 🔌 | **Integrations**  | Key integrations include Jest for testing, Inquirer for CLI interaction, chalk and cli-table3 for output formatting, and execa for executing CLI commands. These dependencies enhance functionality and improve user experience within the project. |
| 🧩 | **Modularity**    | The codebase exhibits high modularity with separate modules for different functionalities like dependency handling, project initialization, and CLI interactions. This modular approach encourages code reuse and simplifies maintenance tasks. |
| 🧪 | **Testing**       | The project utilizes Jest as the primary testing framework, enabling unit testing and ensuring code reliability. Test files are structured within the source directory, and Jest configurations are tailored to TypeScript and Node.js environments. |
| ⚡️  | **Performance**   | The project emphasizes efficiency with tools like UglifyJS for minification, speeding up production deployment. The use of async operations with execa ensures smooth CLI interactions, while performance optimizations are integrated across various functionalities. |
| 🛡️ | **Security**      | Measures such as package manager version verification, Git initialization safeguards, and error handling strategies contribute to data protection and secure project setup. Security practices are followed for CLI operations and dependency installation. |
| 📦 | **Dependencies**  | Key external libraries include Jest for testing, Inquirer for interactive prompts, and execa for CLI operations. Additional dependencies like chalk, cli-table3, and ora enhance the project's functionality and user experience. |

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

| File                                                                                                       | Summary                                                                                                                                                                                                                                                        |
| ---                                                                                                        | ---                                                                                                                                                                                                                                                            |
| [minify.mjs](https://github.com/Romain-Portanguen/white_rabbit/blob/master/minify.mjs)                     | Initiates JavaScript minification using UglifyJS on all files in the dist directory. Automatically compresses, mangles, and renames files, optimizing them for production deployment in the white_rabbit repository.                                           |
| [add-js-extensions.js](https://github.com/Romain-Portanguen/white_rabbit/blob/master/add-js-extensions.js) | Transforms JavaScript files by adding.js extensions to import statements to ensure proper module resolution within the dist directory in the White Rabbit project.                                                                                             |
| [package-lock.json](https://github.com/Romain-Portanguen/white_rabbit/blob/master/package-lock.json)       | To provide developers with tools and utilities that streamline the development process and improve the efficiency of their projects.                                                                                                                           |
| [package.json](https://github.com/Romain-Portanguen/white_rabbit/blob/master/package.json)                 | Enables rapid project setup with a TypeScript CLI tool. Automates project initialization, leveraging key node modules. Supports testing, minification, and type-checking to streamline development workflows.                                                  |
| [tsconfig.json](https://github.com/Romain-Portanguen/white_rabbit/blob/master/tsconfig.json)               | Enabling modern JavaScript features and resolving module paths for testing, the tsconfig.json configures strict TypeScript settings for the white_rabbit repositorys source and test directories.                                                              |
| [jest.config.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/jest.config.ts)             | Configures Jest testing framework for TypeScript and Node.js in the `white_rabbit` repository. Sets up test environment, module extensions, test paths, and transformation rules to ensure seamless testing of TypeScript files within designated directories. |

</details>

<details closed><summary>.github</summary>

| File                                                                                             | Summary                                                                                                                                                                               |
| ---                                                                                              | ---                                                                                                                                                                                   |
| [FUNDING.yml](https://github.com/Romain-Portanguen/white_rabbit/blob/master/.github/FUNDING.yml) | Defines funding platforms for GitHub Sponsors, Patreon, Open Collective, Ko-fi, Tidelift, and others. Facilitates financial support options for project contributors and maintainers. |

</details>

<details closed><summary>src</summary>

| File                                                                                   | Summary                                                                                                                                                                |
| ---                                                                                    | ---                                                                                                                                                                    |
| [index.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/index.ts) | Initiates CLI interaction, manages questions, and builds applications. Implements a structured approach within the parent architecture for a seamless user experience. |

</details>

<details closed><summary>src.@types.core</summary>

| File                                                                                                                                       | Summary                                                                                                                                                                                                                                                                     |
| ---                                                                                                                                        | ---                                                                                                                                                                                                                                                                         |
| [package-manager-checker.d.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/@types/core/package-manager-checker.d.ts) | Defines interface `PackageManagerCheckerInterface` facilitating checks for package manager availability and checking if a package manager is available. The file resides in the `@types/core` directory in the `white_rabbit` repository, contributing to its architecture. |
| [dependency-installer.d.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/@types/core/dependency-installer.d.ts)       | Defines interface `DependencyInstallerInterface` with method `installDependencies`, enabling installation of specified dependencies using a given package manager within a project directory.                                                                               |
| [git-initializer.d.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/@types/core/git-initializer.d.ts)                 | Defines the interface for initializing a Git repository and creating a.gitignore file based on project specifications.                                                                                                                                                      |
| [dependency-configurer.d.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/@types/core/dependency-configurer.d.ts)     | Defines DependencyConfigurerInterface to configure project dependencies with specified language in white_rabbit architecture.                                                                                                                                               |
| [application-builder.d.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/@types/core/application-builder.d.ts)         | Defines an interface for building applications with specified answers.                                                                                                                                                                                                      |

</details>

<details closed><summary>src.@types.utils</summary>

| File                                                                                                      | Summary                                                                                                                                                                                        |
| ---                                                                                                       | ---                                                                                                                                                                                            |
| [logger.d.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/@types/utils/logger.d.ts) | Defines LoggerInterface with log, error, and printAsciiArt methods for consistent logging across the white_rabbit repository, ensuring clear communication and error handling in the codebase. |

</details>

<details closed><summary>src.@types.cli</summary>

| File                                                                                                                        | Summary                                                                                                                                            |
| ---                                                                                                                         | ---                                                                                                                                                |
| [question-manager.d.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/@types/cli/question-manager.d.ts) | Defines QuestionManagerInterface interface for asking questions and returning Answers, enhancing modular structure within white_rabbit repository. |

</details>

<details closed><summary>src.@types.common</summary>

| File                                                                                                                                                   | Summary                                                                                                                                                                                                                                                          |
| ---                                                                                                                                                    | ---                                                                                                                                                                                                                                                              |
| [inquirer-autocomplete-prompt.d.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/@types/common/inquirer-autocomplete-prompt.d.ts) | Defines Inquirer autocomplete prompt module for seamless integration with existing Inquirer library, facilitating interactive CLI prompts.                                                                                                                       |
| [answers.d.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/@types/common/answers.d.ts)                                           | Defines enhanced Inquirer question types to streamline interactive CLI prompts for configuring project settings with autocomplete functionality. Contributing to a smoother user experience and more efficient setup process within the White Rabbit repository. |

</details>

<details closed><summary>src.core</summary>

| File                                                                                                                            | Summary                                                                                                                                                                                                                                                                                          |
| ---                                                                                                                             | ---                                                                                                                                                                                                                                                                                              |
| [dependency-configurer.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/core/dependency-configurer.ts)     | Implements a dependency configurer that sets up Tailwind CSS in a project directory. Uses execa for CLI operations, fs for file manipulation. Centralizes config tasks for easy extension.                                                                                                       |
| [git-initializer.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/core/git-initializer.ts)                 | GitInitializer** class initializes and manages Git repositories. It ensures successful Git repo initialization and creates a.gitignore file based on project type, language, and dependencies. Essential for setting up and organizing projects within the White Rabbit repository architecture. |
| [package-manager-checker.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/core/package-manager-checker.ts) | Verifies package manager availability by executing commands and checking versions. Handles multiple package managers and fallbacks. Supporting the architecture with robust package management functionality.                                                                                    |
| [dependency-installer.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/core/dependency-installer.ts)       | Implements a DependencyInstaller class handling installation of project dependencies. Utilizes execa for executing commands and ora for displaying installation progress. Handles different package managers gracefully.                                                                         |
| [application-builder.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/core/application-builder.ts)         | Builds project structure and configurations based on user input, installing dependencies, setting up linting, formatting, and testing tools. Handles Angular project initialization separately. ensures Git integration and directory switching for seamless setup.                              |

</details>

<details closed><summary>src.core.project-initializer</summary>

| File                                                                                                                                        | Summary                                                                                                                                                                                                                         |
| ---                                                                                                                                         | ---                                                                                                                                                                                                                             |
| [react-initializer.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/core/project-initializer/react-initializer.ts)     | Initiates React project with TypeScript support using create-react-app in specified directory.                                                                                                                                  |
| [vuejs-initializer.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/core/project-initializer/vuejs-initializer.ts)     | Generates Vue.js project scaffold with TypeScript support by creating necessary configuration files. Handles project creation and TypeScript setup, enhancing Vue.js project initialization.                                    |
| [nodejs-initializer.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/core/project-initializer/nodejs-initializer.ts)   | Creates Node.js projects using Express.js generator, accelerating project setup in the white_rabbit repository.                                                                                                                 |
| [angular-initializer.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/core/project-initializer/angular-initializer.ts) | Initialize and run Angular projects with project directories using execa commands. Provides seamless Angular project creation with logging and error handling.                                                                  |
| [index.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/core/project-initializer/index.ts)                             | Enables creation of React, Angular, Node.js, and Vue.js projects based on specified project type and language, ensuring project initialization is handled dynamically and efficiently within the repositorys core architecture. |

</details>

<details closed><summary>src.utils</summary>

| File                                                                                                               | Summary                                                                                                                                                                                              |
| ---                                                                                                                | ---                                                                                                                                                                                                  |
| [dependencies.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/utils/dependencies.ts)         | Retrieves dependencies based on project type defined in the repositorys architecture. Maps specific dependencies for React, Vue.js, and Node.js projects to streamline project setup and management. |
| [summary.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/utils/summary.ts)                   | Outputs project setup details in a structured table using chalk and cli-table3, enhancing readability and user experience.                                                                           |
| [Logger.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/utils/Logger.ts)                     | Implements a colorful Logger with log and error message methods, and an ASCII art display function for the white_rabbit repository.                                                                  |
| [path-suggestions.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/utils/path-suggestions.ts) | Identifies valid directories based on user input, excluding common system folders. Logs errors and returns a list of suggested directories.                                                          |

</details>

<details closed><summary>src.utils.configurations</summary>

| File                                                                                                                                          | Summary                                                                                                                                                                                                                                                                             |
| ---                                                                                                                                           | ---                                                                                                                                                                                                                                                                                 |
| [mocha-config.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/utils/configurations/mocha-config.ts)                     | Generates Mocha configuration and test setup dynamically based on project type. Writes config file, updates package.json scripts, creates test folder, and adds a sample test file. Enhances testing capabilities for React and Vue.js projects within the repository architecture. |
| [jest-config.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/utils/configurations/jest-config.ts)                       | Generates Jest configurations based on project types to enhance testing setup. Creates Jest config files, updates package.json scripts for running tests. Improves testing environments for React, Vue.js, and Node.js projects dynamically within the repository structure.        |
| [testing-library-config.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/utils/configurations/testing-library-config.ts) | Generates and updates Jest testing configuration for Vue.js or general projects. Adds setup files and scripts to enhance testing functionalities.                                                                                                                                   |
| [prettier-config.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/utils/configurations/prettier-config.ts)               | Generates Prettier configuration file for projects in white_rabbit repository, enforcing consistent code style with semicolons, single quotes, and trailing commas.                                                                                                                 |
| [eslint-config.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/utils/configurations/eslint-config.ts)                   | Generates ESLint configuration file based on specified project directory, ensuring browser, ES2021, React, and TypeScript support with recommended rules and Prettier integration.                                                                                                  |

</details>

<details closed><summary>src.cli</summary>

| File                                                                                                   | Summary                                                                                                                                                                                                                                                                     |
| ---                                                                                                    | ---                                                                                                                                                                                                                                                                         |
| [cli-manager.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/cli/cli-manager.ts) | Manages CLI interactions, orchestrates app building process, and handles errors. Initiates welcome message, prompts user with questions, and logs outcomes. Key roles include question handling, app construction, and feedback provision in White Rabbit CLI architecture. |

</details>

<details closed><summary>src.cli.questions</summary>

| File                                                                                                                         | Summary                                                                                                                                                                                                                                                                                                           |
| ---                                                                                                                          | ---                                                                                                                                                                                                                                                                                                               |
| [question-manager.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/cli/questions/question-manager.ts)   | Manages interactive CLI questions, guiding users through project setup decisions. Utilizes inquirer for prompting and customization, delegates to run project-specific initializers, and gracefully handles errors and user feedback. Supports seamless project configuration within the white_rabbit repository. |
| [common-questions.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/cli/questions/common-questions.ts)   | Generates distinct questions based on project type for additional tool installations (dependencies, linting, formatting, testing), package manager preference, and git initialization. Supports decision-making during project setup for non-Angular projects.                                                    |
| [initial-questions.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/cli/questions/initial-questions.ts) | Defines initial project setup questions for CLI interactions, including project name, destination path, project type, and language preferences. Utilizes autocomplete and validation for enhanced user input experience. Facilitates streamlined project initialization for various frameworks and languages.     |

</details>

<details closed><summary>src.__tests__.cli</summary>

| File                                                                                                                       | Summary                                                                                                                                                                                                                    |
| ---                                                                                                                        | ---                                                                                                                                                                                                                        |
| [cli-manager.test.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/__tests__/cli/cli-manager.test.ts) | Prints welcome message, builds app if user confirms, handles rejection, and logs errors. Mocks dependencies for isolated testing. Maintains logging consistency. Ensures a smooth user experience during CLI interactions. |

</details>

---

## 🚀 Getting Started

**System Requirements:**

* **TypeScript**: `version x.y.z`

### ⚙️ Installation

<h4>From <code>source</code></h4>

> 1. Clone the white_rabbit repository:
>
> ```console
> $ git clone https://github.com/Romain-Portanguen/white_rabbit
> ```
>
> 2. Change to the project directory:
> ```console
> $ cd white_rabbit
> ```
>
> 3. Install the dependencies:
> ```console
> $ npm install
> ```

### 🤖 Usage

<h4>From <code>source</code></h4>

> Run white_rabbit using the command below:
> ```console
> $ npm run build && node dist/main.js
> ```

### 🧪 Tests

> Run the test suite using the command below:
> ```console
> $ npm test
> ```

---

## 🛠 Project Roadmap

- [X] `► INSERT-TASK-1`
- [ ] `► INSERT-TASK-2`
- [ ] `► ...`

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

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

## 🔗 Acknowledgments

- List any resources, contributors, inspiration, etc. here.

[**Return**](#-overview)

---
