#!/usr/bin/env node
import CLIManager from './cli/cli-manager';
import QuestionManager from './cli/questions/question-manager';
import ApplicationBuilder from './core/application-builder';

const questionManager = new QuestionManager();
const applicationBuilder = new ApplicationBuilder();
const cliManager = new CLIManager(questionManager, applicationBuilder);

cliManager.run();
