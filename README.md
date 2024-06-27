# White Rabbit CLI

White Rabbit CLI is a command-line interface (CLI) tool that allows users to quickly create and initialize various types of projects such as React, Angular, Vue.js and Node.js. The CLI provides a guided setup with customizable options for project dependencies, testing tools, linting tools, and more.

## Table of Contents

- [White Rabbit CLI](#white-rabbit-cli)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Example](#example)
  - [Options](#options)
  - [Contributing](#contributing)
  - [License](#license)

## Features

- Initialize projects for React, Angular, Node.js, and Vue.js.
- Choose between JavaScript and TypeScript.
- Install additional dependencies such as Redux, Axios, Styled-Components, and Tailwind CSS.
- Select your preferred package manager: npm, yarn, or pnpm.
- Configure testing tools like Jest, Mocha, and Chai.
- Set up linting and formatting tools including ESLint, TSLint, and Prettier.
- Optionally initialize a Git repository with a pre-configured `.gitignore` file.
- Autocompletion for directory paths during setup.

## Installation

To install White Rabbit CLI, ensure you have Node.js and npm installed, then run:

```sh
npm install -g white-rabbit-cli

```

## Usage

To create a new project, run:

```sh
white-rabbit

```

Follow the prompts to configure your project. You will be asked to provide the following information:

- Project name.
- Destination path for the project.
- Type of project (React, Angular, Node.js, Vue.js).
- Language (JavaScript or TypeScript).
- Additional dependencies.
- Preferred package manager.
- Testing tools.
- Linting tools.
- Formatting tools.
- Additional configuration for tools.
- Initialize Git repository.

## Example

```sh

$ white-rabbit

           _     _ _                   _     _     _ _
          | |   (_) |                 | |   | |   (_) |
 __      _| |__  _| |_ ___   _ __ __ _| |__ | |__  _| |_
 \ \ /\ / / '_ \| | __/ _ \ | '__/ _` | '_ \| '_ \| | __|
  \ V  V /| | | | | ||  __/ | | | (_| | |_) | |_) | | |_
   \_/\_/ |_| |_|_|\__\___| |_|  \__,_|_.__/|_.__/|_|\__|

Welcome to White Rabbit CLI!
? What is the name of your project? my-awesome-app
? Where do you want to create the project? (Specify the path) ./projects
? Which type of project do you want to initialize? React
? Which language do you want to use? TypeScript
? Which additional dependencies do you want to install? redux, axios, styled-components
? Which package manager do you want to use? yarn
? Which testing tools do you want to use? Jest
? Which linting tools do you want to use? ESLint, Prettier
? Which formatting tools do you want to use? Prettier
? Do you want to add additional configuration for tools? No
? Do you want to initialize a git repository? Yes
? Do you want to proceed with the installation? Yes

Initializing TypeScript React project: my-awesome-app at ./projects
Project created successfully!
You are now in the project directory: /path/to/projects/my-awesome-app

```

## Options

White Rabbit CLI provides the following options during setup:

Project Type: Choose between React, Angular, Node.js, and Vue.js.
Language: Select JavaScript or TypeScript.
Dependencies: Option to install popular libraries such as Redux, Axios, Styled-Components, Tailwind CSS, and more.
Package Manager: Choose your preferred package manager: npm, yarn, or pnpm.
Testing Tools: Set up testing tools like Jest, Mocha, and Chai.
Linting Tools: Configure linting tools including ESLint, TSLint, and Prettier.
Formatting Tools: Set up formatting tools like Prettier.
Initialize Git: Option to initialize a Git repository with a pre-configured .gitignore file.

## Contributing

We welcome contributions to improve White Rabbit CLI! To contribute, follow these steps:

Fork the repository.
Create a new branch: git checkout -b my-feature-branch
Make your changes and commit them: git commit -m 'Add new feature'
Push to the branch: git push origin my-feature-branch
Submit a pull request.
Please make sure your code follows the project's coding standards and includes tests where applicable.

## License

License
This project is licensed under the MIT License. See the LICENSE file for details.
