#!/usr/bin/env node
import CLIManager from './cli/cli-manager';
import QuestionManager from './cli/questions/question-manager';
import ApplicationBuilder from './core/application-builder';
import DependencyInstaller from './core/dependency-installer';
import DependencyConfigurer from './core/dependency-configurer';
import GitInitializer from './core/git-initializer';
import PackageManagerChecker from './core/package-manager-checker';
import { CommandExecutor } from './utils/command-executor';
import { FileSystem } from './utils/file-system';

const commandExecutor = new CommandExecutor();
const fileSystem = new FileSystem();
const questionManager = new QuestionManager(commandExecutor);
const packageManagerChecker = new PackageManagerChecker();
const dependencyInstaller = new DependencyInstaller(packageManagerChecker, commandExecutor);
const dependencyConfigurer = new DependencyConfigurer(commandExecutor, fileSystem);
const gitInitializer = new GitInitializer(commandExecutor, fileSystem);
const applicationBuilder = new ApplicationBuilder(dependencyInstaller, dependencyConfigurer, gitInitializer, commandExecutor, fileSystem);
const cliManager = new CLIManager(questionManager, applicationBuilder);

cliManager.run();
