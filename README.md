![](https://github.com/Romain-Portanguen/white_rabbit/blob/7bc4fe9e4da83071f77bf5b8587b02c454cab923/src/public/assets/WhiteRabbit_Banner.png)

<h3 align="center">
Command-line tool (CLI) designed to facilitate the creation of web dev projects.
</h3>

<p align="center">
<img src="https://img.shields.io/badge/-Typescript-05122A?style=plastic&amp;logo=Typescript&amp;color=2B343B" alt="shields">
<img src="https://img.shields.io/badge/-Beta-05122A?style=plastic&amp;logo=Beta&amp;color=2B343B" alt="shields">
</p>

## 📑 Table of Contents

- [📑 Table of Contents](#-table-of-contents)
- [🔬 Features](#-features)
- [🚧 Installation](#-installation)
- [🔧 Usage](#-usage)
- [👀 Example](#-example)
- [⚙️ Options](#️-options)
- [💡 Configuration](#-configuration)
- [🛠️ Development](#️-development)
- [👨🏻‍💻 Contributing](#-contributing)
- [📄 Licence](#-licence)

## 🔬 Features

- **Project Initialization**: Quickly set up projects for React, Angular, Vue.js, and Node.js.
- **Language Choice**: Choose between JavaScript and TypeScript for your project.
- **Dependency Management**: Optionally install additional dependencies during setup.
- **Package Manager**: Select your preferred package manager: npm, yarn, or pnpm.
- **Testing Tools**: Set up testing tools like Jest, Mocha, and Chai.
- **Linting and Formatting**: Configure ESLint, TSLint, and Prettier with customizable options.
- **Git Initialization**: Optionally initialize a Git repository with a pre-configured `.gitignore` file.
- **Autocompletion**: Directory path autocompletion during setup for ease of use.
- **Customization**: Extensive options to tailor the project setup to your needs.

## 🚧 Installation

To install White Rabbit CLI, ensure you have Node.js and npm installed on your machine. Then, run:

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
- Type of project (React, Angular, Vue.js, or Node js).
- Language (JavaScript or TypeScript).
- Additional dependencies.
- Preferred package manager.
- Testing tools.
- Linting tools.
- Formatting tools.
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

**White Rabbit CLI** provides the following robust options during setup:

- **Project Type**: Choose between **React, Angular, Vue.js**, and **Node.js**.
- **Language**: Select **JavaScript** or **TypeScript**.
- **Dependencies**: Option to install popular libraries such as **Redux, Axios, Styled-Components, Tailwind CSS**, and more.
- **Package Manager**: Choose your preferred package manager: **npm, yarn**, or **pnpm**.
- **Testing Tools**: Set up testing tools like **Jest, Mocha**, and **Chai**.
- **Linting Tools**: Configure linting tools including **ESLint, TSLint**, and **Prettier**.
- **Formatting Tools**: Set up formatting tools like **Prettier**.
- **Initialize Git**: Option to initialize a Git repository with a pre-configured **.gitignore** file.

## 💡 Configuration

White Rabbit CLI allows extensive customisation to meet your needs. Configuration files for tools such as ESLint, Prettier and test frames will be automatically generated according to your choices. You can further customise these configurations by editing the generated files afterwards.

## 🛠️ Development

If you want to set it up for development purposes, follow these steps:

- Clone the repository:

```sh
git clone https://github.com/Romain-Portanguen/white_rabbit.git
```

- Navigate to the project directory:

```sh
cd white_rabbit
```

- Install dependencies:

```sh
npm install
```

- Build the project:

```sh
npm run build
```

- Run the project:

```sh
npm start
```

## 👨🏻‍💻 Contributing

We welcome contributions to improve White Rabbit CLI! To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch: git checkout -b my-feature-branch
3. Make your changes and commit them: git commit -m 'Add new feature'
4. Push to the branch: git push origin my-feature-branch
5. Submit a pull request.

Please make sure your code follows the project's coding standards and includes tests where applicable.

## 📄 Licence

This project is distributed under the MIT license.
