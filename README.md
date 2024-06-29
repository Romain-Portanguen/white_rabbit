![](https://github.com/Romain-Portanguen/white_rabbit/blob/7bc4fe9e4da83071f77bf5b8587b02c454cab923/src/public/assets/WhiteRabbit_Banner.png)

<h3 align="center">
Command-line tool (CLI) designed to facilitate the creation of web dev projects.
</h3>

<p align="center">
<img src="https://img.shields.io/badge/-Typescript-05122A?style=plastic&amp;logo=Typescript&amp;color=2B343B" alt="shields">
<img src="https://img.shields.io/badge/-Beta-05122A?style=plastic&amp;logo=Beta&amp;color=2B343B" alt="shields">
</p>

<hr>

<h4 align=center>
🚨 Disclaimer 🚨
</h4>

<p align="center">
<strong>White Rabbit CLI</strong> is still in beta version and malfunctions may occur. </br>
I am actively working on optimising the whole process of initialising the project. Thank you for your understanding.
</p>

## 📑 Table of Contents

- [📑 Table of Contents](#-table-of-contents)
- [🔬 Features](#-features)
- [🚧 Installation](#-installation)
- [🔧 Usage](#-usage)
- [👀 Example](#-example)
- [⚙️ Options](#️-options)
- [👨🏻‍💻 Contributing](#-contributing)
- [📄 Licence](#-licence)

## 🔬 Features

- Initialize projects for React, Angular, Vue.js and Node.js.
- Choose between JavaScript and TypeScript.
- Install additional dependencies.
- Select your preferred package manager: npm, yarn, or pnpm.
- Configure testing tools like Jest, Mocha, and Chai.
- Set up linting and formatting tools including ESLint, TSLint, and Prettier and their associated configuration files.
- Optionally initialize a Git repository with a pre-configured `.gitignore` file.
- Autocompletion for directory paths during setup.

## 🚧 Installation

To install White Rabbit CLI, ensure you have Node.js and npm installed on your machine, then run:

```sh
npm install -g white-rabbit-cli

```

## 🔧 Usage

To create a new project, run:

```sh
white-rabbit

```

Follow the prompts to configure your project. You will be asked to provide the following information:

- Project name.
- Destination path for the project.
- Type of project (React, Angular, Vue.js and Node.js).
- Language (JavaScript or TypeScript).
- Additional dependencies.
- Preferred package manager.
- Testing tools.
- Linting tools.
- Formatting tools.
- Additional configuration for tools.
- Initialize Git repository.

## 👀 Example

```sh
$ white-rabbit

           _     _ _                   _     _     _ _        (\(\ 
          | |   (_) |                 | |   | |   (_) |       ( -.-)
 __      _| |__  _| |_ ___   _ __ __ _| |__ | |__  _| |_      o_(")(")
 \ \ /\ / / '_ \| | __/ _ \ | '__/ _` | '_ \| '_ \| | __|
  \ V  V /| | | | | ||  __/ | | | (_| | |_) | |_) | | |_
   \_/\_/ |_| |_|_|\__\___| |_|  \__,_|_.__/|_.__/|_|\__|

✔ Welcome to White Rabbit CLI 🐇
? What is the name of your project? rabbit-test
? Where do you want to create the project? (Specify the path) ../white-rabbit-gen
? Which type of project do you want to initialize? React
? Which language do you want to use? TypeScript
? Do you want to install additional dependencies? Yes
? Which additional dependencies do you want to install? @types/react-dom, @types/react-redux, @types/react, react-icons, react-redux, react-router-dom, react-toastify, redux, styled-components, yup, prop-types
? Do you want to install linting tools? Yes
? Which linting tools do you want to use? ESLint
? Do you want to install formatting tools? Yes
? Which formatting tools do you want to use? Prettier
? Do you want to install testing tools? Yes
? Which testing tools do you want to use? jest
? Which package manager do you want to use? yarn
? Do you want to initialize a git repository? Yes

Summary of your selections:

| Category         | Selection                                        |
|------------------|--------------------------------------------------|
| Project Name     | rabbit-test                                      |
| Destination      | ../white-rabbit-gen                              |
| Project Type     | React                                            |
| Language         | TypeScript                                       |
| Dependencies     | @types/react-dom, @types/react-redux, @types/... |
| Package Manager  | yarn                                             |
| Testing Tools    | jest                                             |
| Linting Tools    | ESLint                                           |
| Formatting Tools | Prettier                                         |
| Initialize Git   | Yes                                              |

Initializing TypeScript React project: rabbit-test at ../white-rabbit-gen/rabbit-test
✔ Dependencies installed successfully
✔ Git repository initialized successfully
.gitignore file already exists. Keeping the existing file.
✔ Project setup completed.
You are now in the project directory: /Users/romain/Development/SideProjects/react-projects/white-rabbit-gen/rabbit-test
✔ Application created successfully, happy hacking! 🚀
```

## ⚙️ Options

White Rabbit CLI provides the following options during setup:

Project Type: Choose between React, Angular, Vue.js and Node.js.
Language: Select JavaScript or TypeScript.
Dependencies: Option to install popular libraries such as Redux, Axios, Styled-Components, Tailwind CSS, and more.
Package Manager: Choose your preferred package manager: npm, yarn, or pnpm.
Testing Tools: Set up testing tools like Jest, Mocha, and Chai.
Linting Tools: Configure linting tools including ESLint, TSLint, and Prettier.
Formatting Tools: Set up formatting tools like Prettier.
Initialize Git: Option to initialize a Git repository with a pre-configured .gitignore file.

## 👨🏻‍💻 Contributing

We welcome contributions to improve White Rabbit CLI! To contribute, follow these steps:

Fork the repository.
Create a new branch: git checkout -b my-feature-branch
Make your changes and commit them: git commit -m 'Add new feature'
Push to the branch: git push origin my-feature-branch
Submit a pull request.
Please make sure your code follows the project's coding standards and includes tests where applicable.

## 📄 Licence

This project is distributed under the MIT license.
