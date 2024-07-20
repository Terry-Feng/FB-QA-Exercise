# gitflow test
This repository contains an automated test framework designed to cover various test cases for coordinate points comparison. This is for testing purposes.

## Prerequisites
- **node.js** (https://nodejs.org/en)
    -  This project is developed and tested with Node.js v20.11.0. It is recommended to use this version or later. While it might work with earlier versions, it has not been tested.
- **npm**: Ensure you have npm installed, which comes bundled with Node.js.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/Terry-Feng/FB-QA-Exercise.git
    cd FB-QA-Exercise
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```


## Project Structure

The project is organized as follows:

```plaintext
FB-QA-Exercise
│
├── cucumber.mjs         # Cucumber configuration file
├── features             # Directory containing feature files
│   └── example.feature  # Example feature file
├── reports              # Directory for test reports
├── src                  # Source directory for test-related files
│   ├── assets           # Directory for any assets needed for tests
│   ├── steps            # Directory containing step definition files
│   ├── support          # Directory for support files and hooks
│   └── utils            # Directory for utility functions
├── .gitignore           # Git ignore file
├── package.json         # npm package configuration file
├── README.md            # Project documentation file
└── tsconfig.json        # TypeScript configuration file
```

## To run the tests

- `npm run e2e:test` to run all test
- `npm run e2e:inputValidation` to run the casual test with tag @inputValidation
- `npm run e2e:parallel` to run the parallel test to help you to prepare the test data
- set environment variable headless=true to use headless mode


## Branch and environment selection

Set environment variable to choose test ENV and branch in case of multiple test environment  
By default, test environment will be PREPROD and branch will be NZ

- Environment options: **LOCAL, QA, PREPROD, PROD**
- Country options: **AU, NZ**

To set env on Linux and Mac:

`environment=PREPROD npm run e2e:test`

To set env on Windows

```
set environment=PREPROD
npm run e2e:tag @tag
```

## Browser selection

By default, we will use chromium. You can define an envrionment variable called BROWSER and
set the name of the browser.

- Available options: **chromium, firefox, webkit**

On Linux and Mac you can:

`BROWSER=firefox npm run e2e:test` or `BROWSER=firefox npx cucumber-js` runs all tests using Firefox

One Windows you can

```
set BROWSER=firefox
npm run e2e:test
```

## Debugging Features

Set environment PWDEBUG variable to open Playwirght debug console

`PWDEBUG=1` on Linux or `set PWDEBUG=1` on Windows

For VSCode

- Set up the debug options in the VSCode debugger
- Set breakpoints in the code

To stop the feature, you can add the `Then debug` step inside your feature. It will stop your debugger.

For Webstorm

- Add run/debug configuration
- Set breakpoint in the code
- Select the run/debug configuration you added from the list and click debug

## Codegen feature

```
npx playwright codegen ${url}
```

## To ignore a scenario

- tag the scenario with `@ignore`

## Report
Report will be created/updated in reports folder after each run  
Provide json and html formatted report
- cucumber-report.json
- report.html

## Kudos

This repository is based on the [Cucumber-typescript-starter](https://github.com/hdorgeval/cucumber7-ts-starter/) repo.

## What's inside

- Typescript setup for writing steps with eslint/typescript and prettier
- Launching of Playwright browser before running all tests
- Launching new context and page for each scenario
- Running feature with video recording option
- Allure reports
