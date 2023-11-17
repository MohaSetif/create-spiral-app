#!/usr/bin/node
import inquirer from 'inquirer';
import chalk from 'chalk';
import figlet from 'figlet';
import gradient from 'gradient-string';
import chalkAnimation from "chalk-animation";
import cliSpinners from 'cli-spinners';
import ora from 'ora';
import * as fs from 'fs';
import { dirname } from "path"
import { fileURLToPath } from 'url';
import createDirectoryContents from "./createDirectoryContents.js"
const CURR_DIR = process.cwd();

let coolGradient = gradient('blue', 'purple', 'pink');

figlet("Spiral Stack", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(coolGradient(data));

  setTimeout(presentTemplateChoices, 2000);
});

const __dirname = dirname(fileURLToPath(import.meta.url));

function presentTemplateChoices() {
  const CHOICES = fs.readdirSync(`${__dirname}/templates`);

  const QUESTIONS = [
    {
      name: 'project-choice',
      type: 'list',
      message: 'What project template would you like to generate?',
      choices: CHOICES,
    },
    {
      name: 'project-name',
      type: 'input',
      message: 'Project name:',
      validate: function (input) {
        if (/^([A-Za-z\-\_\d])+$/.test(input)) return true;
        else return 'Project name may only include letters, numbers, underscores, and dashes.';
      },
    },
  ];

  inquirer.prompt(QUESTIONS)
    .then(answers => {
      const projectChoice = answers['project-choice'];
      const projectName = answers['project-name'];
      const templatePath = `${__dirname}/templates/${projectChoice}`;

      if (projectChoice === 'Laravel-React' || projectChoice === 'Laravel-Vue') {
        // Ask the user to choose between Inertia and TypeScript for Laravel-React or Laravel-Vue
        const variantQuestion = [
          {
            name: 'variant-choice',
            type: 'list',
            message: `Choose the variant for ${projectChoice}:`,
            choices: ['Inertia', 'Typescript'],
          },
        ];

        inquirer.prompt(variantQuestion)
          .then(({ 'variant-choice': variantChoice }) => {
            const templateVariantPath = `${templatePath}/${variantChoice}`;
            const spinner = ora(`Generating ${projectChoice} template...`).start();

            // Simulate some asynchronous work (replace with actual template generation)
            setTimeout(() => {
              // Complete the template generation
              fs.mkdirSync(`${CURR_DIR}/${projectName}`);
              createDirectoryContents(templateVariantPath, projectName);

              // Stop the spinner
              spinner.stopAndPersist({
                text: `${projectChoice} template generated successfully!`,
                symbol: chalk.green('✔'),
              });

              console.log(`
                ${chalk.bgBlue('CONGRATS! Build something creative!')}
              `);
            }, 2000); // Replace this with your actual template generation logic
          });
      } else if (projectChoice === 'Sveltekit-Tailwind'){
        // Ask the user to choose between Inertia and TypeScript for Laravel-React or Laravel-Vue
        const variantQuestion = [
          {
            name: 'variant-choice',
            type: 'list',
            message: `Choose the variant for ${projectChoice}:`,
            choices: ['Javascript', 'Typescript'],
          },
        ];

        inquirer.prompt(variantQuestion)
          .then(({ 'variant-choice': variantChoice }) => {
            const templateVariantPath = `${templatePath}/${variantChoice}`;
            const spinner = ora(`Generating ${projectChoice} template...`).start();

            // Simulate some asynchronous work (replace with actual template generation)
            setTimeout(() => {
              // Complete the template generation
              fs.mkdirSync(`${CURR_DIR}/${projectName}`);
              createDirectoryContents(templateVariantPath, projectName);

              // Stop the spinner
              spinner.stopAndPersist({
                text: `${projectChoice} template generated successfully!`,
                symbol: chalk.green('✔'),
              });

              console.log(`
                ${chalk.bgBlue('CONGRATS! Build something creative!')}
              `);
            }, 2000); // Replace this with your actual template generation logic
          });
      }
      else {
        const spinner = ora(`Generating ${projectChoice} template...`).start();

        // Simulate some asynchronous work (replace with actual template generation)
        setTimeout(() => {
          // Complete the template generation
          fs.mkdirSync(`${CURR_DIR}/${projectName}`);
          createDirectoryContents(templatePath, projectName);

          // Stop the spinner
          spinner.stopAndPersist({
            text: `${projectChoice} template generated successfully!`,
            symbol: chalk.green('✔'),
          });

          console.log(`
            ${chalk.bgBlue('CONGRATS! Build something creative!')}
          `);
        }, 2000);
      }
    });
}
