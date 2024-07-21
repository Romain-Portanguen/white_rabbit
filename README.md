<p align="center">
  <img src="https://img.icons8.com/?size=512&id=55494&format=png" width="100" alt="project-logo">
</p>
<p align="center">
    <h1 align="center">WHITE_RABBIT</h1>
</p>
<p align="center">
    <em>Streamline Your Projects, Simplify Your Setup!</em>
</p>
<p align="center">
	<!-- Shields.io badges not used with skill icons. --><p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<a href="https://skillicons.dev">
		<img src="https://skillicons.dev/icons?i=js,jest,md,ts">
	</a></p>

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

The white_rabbit project is a robust command-line interface (CLI) tool designed to streamline the initialization and configuration of various software projects, including frameworks like React, Angular, and Vue.js. By automating dependency management, project scaffolding, and configuration processes, it enhances the usability and efficiency for developers. Its well-structured architecture supports TypeScript, integrates testing frameworks, and promotes community engagement for ongoing sustainability. Overall, white_rabbit provides a streamlined and user-friendly experience that simplifies project setup, enabling developers to focus on building rather than configuring.

---

## 🧩 Features

|     | Feature           | Description                                                                                                                                                                                                                               |
|-----|-------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ⚙️  | **Architecture**  | The project employs a modular architecture designed primarily for a command-line interface (CLI), ensuring easy integration of various components that enhance usability and functionality across multiple project types.                 |
| 🔩  | **Code Quality**  | The code follows TypeScript standards and utilizes consistent naming conventions. Quality is enforced through tools like ESLint and Prettier to maintain readability and style across the codebase.                                       |
| 📄  | **Documentation** | The repository includes essential README instructions and comments in the code. However, additional in-depth documentation could further clarify usage and contribution guidelines for users and developers.                              |
| 🔌  | **Integrations**  | Key integrations include TypeScript for type safety, Jest for testing, and other packages like inquirer and chalk to enhance user interaction and command-line aesthetics, supporting a robust development workflow.                      |
| 🧩  | **Modularity**    | The codebase is highly modular with defined interfaces, allowing for easily extendable components. The architecture promotes reusability and flexibility, particularly through utility functions and interfaces within the code.          |
| 🧪  | **Testing**       | The project uses Jest as the primary testing framework, complemented by ts-jest for TypeScript support. Testing is organized into specific directories, promoting clarity and consistency in test execution.                              |
| ⚡️  | **Performance**   | The project emphasizes performance with efficient file handling and streamlined command execution. Scripts for minification and optimized build processes contribute to overall speed and resource management.                            |
| 🛡️ | **Security**      | Security measures include verifying accessibility of package managers and customizing .gitignore files to protect sensitive project files. However, further implementation of data validation and access controls could enhance security. |
| 📦  | **Dependencies**  | Major dependencies include 'inquirer', 'typescript', 'jest', and 'chalk'. This selection supports functionalities around user input handling, testing, and aesthetic CLI output.                                                          |
| 🚀  | **Scalability**   | The project is designed to scale efficiently by managing multiple project setups (React, Angular, Node.js, Vue.js) and handling increased user interactions through asynchronous processes and optimized command execution.               |

---

## 🗂️ Repository Structure

```sh
└── white_rabbit/
    ├── .github
    │   └── FUNDING.yml
    ├── LICENSE
    ├── README.md
    ├── jest.config.ts
    ├── package-lock.json
    ├── package.json
    ├── scripts
    │   ├── add-js-extensions.js
    │   └── minify.mjs
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

<details closed><summary>src.core</summary>

| File                                                                                                                            | Summary                                                                                                                                                                                                                                                                                                                                                          |
|---------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [dependency-configurer.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/core/dependency-configurer.ts)     | Facilitates the configuration of project dependencies, particularly Tailwind CSS, enhancing the repositorys core functionality. By automating the setup process, it streamlines project initialization and ensures a consistent development environment, thus contributing significantly to the overall architectures efficiency and usability.                  |
| [git-initializer.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/core/git-initializer.ts)                 | Facilitates the initialization of Git repositories by executing commands and creating essential configuration files. It enhances project setup by automating the creation of a.gitignore file tailored for various project types, ultimately streamlining development workflows within the repositorys architecture.                                             |
| [package-manager-checker.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/core/package-manager-checker.ts) | Enables the detection and validation of package managers within the projects ecosystem. By checking the availability of primary package managers and their fallbacks, it ensures seamless integration and functionality across various environments, enhancing the overall robustness of the repositorys software architecture.                                  |
| [dependency-installer.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/core/dependency-installer.ts)       | Facilitates dependency installation within the white_rabbit repository by verifying the package managers availability and executing the appropriate installation command. Enhances project setup efficiency while providing user feedback during the process, thereby supporting the core functionality and usability of the overall system architecture.        |
| [application-builder.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/core/application-builder.ts)         | ApplicationBuilder facilitates the creation and configuration of new projects by initializing various types, such as Angular and Node.js, managing dependencies, and setting up linting, formatting, and testing tools. It enhances user experience through streamlined processes, ensuring efficient project setup within the repositorys overall architecture. |

</details>

<details closed><summary>src.core.project-initializer</summary>

| File                                                                                                                                        | Summary                                                                                                                                                                                                                                                                                                                                                      |
|---------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [react-initializer.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/core/project-initializer/react-initializer.ts)     | Facilitates the creation of new React projects by determining the appropriate command based on the selected programming language. Integrates seamlessly within the core architecture of the white_rabbit repository, enabling developers to efficiently bootstrap projects with TypeScript or JavaScript in a user-friendly manner.                          |
| [vuejs-initializer.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/core/project-initializer/vuejs-initializer.ts)     | Facilitates the creation of Vue.js projects within a specified directory, supporting both JavaScript and TypeScript setups. Integrates command execution and file system operations to streamline project initialization, enhancing the core functionality of the repository by offering a user-friendly setup process for developers.                       |
| [nodejs-initializer.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/core/project-initializer/nodejs-initializer.ts)   | Facilitates the initialization of Node.js projects by organizing project setup, managing dependencies, and configuring essential development tools such as ESLint and Prettier. Integrates with the broader architecture to streamline project scaffolding while ensuring optimal integration of testing and formatting tools tailored to user preferences.  |
| [angular-initializer.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/core/project-initializer/angular-initializer.ts) | Facilitates the initialization of Angular projects within the white_rabbit repository by providing functions to create project directories and execute Angular CLI commands. Enhances user experience through logging and spinner feedback, aligning with the repositorys focus on streamlined project setup and robust developer tools.                     |
| [index.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/core/project-initializer/index.ts)                             | Facilitates project initialization by providing a unified interface to create various types of web applications, including React, Angular, Node.js, and Vue.js. Integrates essential tools for command execution, file handling, and package management, ensuring streamlined project setup across different frameworks within the repositorys architecture. |

</details>

<details closed><summary>src.utils</summary>

| File                                                                                                               | Summary                                                                                                                                                                                                                                                                                                                                                                       |
|--------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [dependencies.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/utils/dependencies.ts)         | Facilitates the retrieval of essential dependencies based on specified project types, such as React, Vue.js, and Node.js, enhancing the repositorys modular architecture. This utility contributes to streamlined project setup and dependency management, ensuring developers have quick access to relevant packages for their chosen frameworks.                            |
| [file-system.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/utils/file-system.ts)           | Facilitating file management within the white rabbit repository, the FileSystem class implements essential operations such as writing, reading, appending, and managing directories. Its integration ensures seamless interaction with the filesystem, enhancing the core functionality and supporting various utilities across the projects architecture.                    |
| [command-executor.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/utils/command-executor.ts) | Facilitating command execution within the white_rabbit repository, the CommandExecutor class streamlines running shell commands with customizable options. This utility enhances the core functionality by enabling asynchronous processes, thus contributing to the overall architecture by promoting modularity and reusability in command handling across the application. |
| [summary.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/utils/summary.ts)                   | Enhances project initialization by generating a structured summary of user inputs, displaying key project attributes in a visually appealing table format. This utility function contributes to user experience within the repositorys architecture by ensuring clarity and accessibility of essential project information during setup.                                      |
| [Logger.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/utils/Logger.ts)                     | Provides a versatile logging system that enhances the user experience by allowing color-coded output for differing log levels. Integrates with the broader repository architecture to facilitate error tracking and general logging, while also offering a unique ASCII art display, making debugging more visually engaging and intuitive.                                   |
| [path-suggestions.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/utils/path-suggestions.ts) | Facilitates directory suggestion retrieval by analyzing the file system, leveraging asynchronous operations to identify valid directories while excluding specific paths. Integrates error logging to track issues during file system interactions, contributing to the overall robustness and user experience within the repositorys core functionality.                     |

</details>

<details closed><summary>src.utils.configurations</summary>

| File                                                                                                                                          | Summary                                                                                                                                                                                                                                                                                                                                                                                    |
|-----------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [mocha-config.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/utils/configurations/mocha-config.ts)                     | Generate Mocha configuration for testing frameworks, accommodating project types like React and Vue.js. Set up essential testing scripts in the package.json, create a test directory, and include a sample test. This utility enhances the testing infrastructure within the white_rabbit repository, ensuring streamlined test execution.                                                |
| [jest-config.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/utils/configurations/jest-config.ts)                       | Facilitates the generation of Jest configuration tailored for different project types, enhancing testing capabilities within the white_rabbit repository. By automating configuration setup, it simplifies the integration of Jest into new projects, ensuring a consistent testing environment across React, Vue.js, and Node.js applications.                                            |
| [testing-library-config.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/utils/configurations/testing-library-config.ts) | Generates a Jest configuration tailored for testing JavaScript and Vue.js projects, enhancing the testing setup within the repository. It establishes a comprehensive testing environment by modifying package.json and creating essential setup files, ensuring efficient integration and compatibility with the overall architecture of the white_rabbit repository.                     |
| [prettier-config.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/utils/configurations/prettier-config.ts)               | Generates a Prettier configuration for the project, ensuring consistent code formatting across the repository. Positioned within the utilities directory, it streamlines setup for developers and enhances code quality by automatically creating a standardized configuration file, aligning with the overall architectures focus on maintainability and collaboration.                   |
| [eslint-config.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/utils/configurations/eslint-config.ts)                   | Facilitates the automatic generation of an ESLint configuration file tailored for JavaScript and TypeScript projects within the repository. By establishing recommended coding standards and integrating necessary plugins, it enhances code quality and consistency, aligning with the overarching goal of maintaining a robust development environment in the white_rabbit architecture. |
| [typescript-config.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/utils/configurations/typescript-config.ts)           | Generate TypeScript configuration tailored for either standard or Vue projects, enhancing the repositorys developer experience. Update essential project files, including `tsconfig.json` and `package.json`, to streamline project setup and build processes, ensuring adherence to best practices within the repositorys architecture.                                                   |

</details>

<details closed><summary>src.cli</summary>

| File                                                                                                   | Summary                                                                                                                                                                                                                                                                                                                                                                                                          |
|--------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [cli-manager.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/cli/cli-manager.ts) | Facilitate user interactions through the CLIManager, which orchestrates question prompts and application construction. It enhances the user experience by providing welcome messages and error handling, ensuring a seamless installation process while logging essential information. This component seamlessly integrates with the broader architecture by managing user inputs and guiding application setup. |

</details>

<details closed><summary>src.cli.questions</summary>

| File                                                                                                                         | Summary                                                                                                                                                                                                                                                                                                                                                                        |
|------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [question-manager.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/cli/questions/question-manager.ts)   | Facilitates user interaction through a series of dynamically generated questions for project configuration, specifically catering to Angular setups. Integrates command execution and file system operations, while providing logging and summary feedback, ultimately guiding the user through a streamlined installation process within the repositorys architecture.        |
| [common-questions.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/cli/questions/common-questions.ts)   | Facilitates user interaction by generating a series of common questions for a command-line interface, guiding users through the installation of dependencies, linting, formatting, testing tools, and Git initialization based on their project type. It enhances the setup experience within the repositorys broader architecture.                                            |
| [initial-questions.ts](https://github.com/Romain-Portanguen/white_rabbit/blob/master/src/cli/questions/initial-questions.ts) | Facilitating project initialization, initialQuestions gathers essential user input regarding project specifics like name, destination, type, language, and package manager. By integrating user prompts within the CLI, it enhances usability and streamlines the setup process, aligning with the repositorys goal of simplifying project creation across various frameworks. |

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
> $ npm run build && node dist/index.js
> ```

### 🧪 Tests

> Run the test suite using the command below:
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
