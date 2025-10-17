# Workflow Repo for the CA

## Description:
This is a front-end workflow project that demonstrates:
- Forking a repository
- Creating a new seperate branch, then commiting and pushing to this branch
- Installing and configuring various Development Tools such as:
  - ESLint
  - Prettier
- Installing, configuring Vitest. Including Tests on functions:
  - Redirecting through paths with true and false results
  - Saving and returning user object from storage, resulting in a username if successfully returned or null if no username returned.
- Installing, configuring Playwright for End-To-End testing with tests:
  - successfullyy login by going to a page, filling and submitting with an expected result of something specific displayed as a success.
  - Failed login by going to a page, filling and submitting with an expected result of something specific displayed as a success.
  - Navigating through pages, clicking on the first() post of many and expecting a result display of "Venue details" as a success.

## Getting Started

### Install dependencies

```bash
npm install
```

- Install Playwrights Browser Binaries ( Required to be installed separatly the first time )
```bash
npx playwright install
```

- Install Live Server:
```bash
npm install --save-dev live-server
```


### Running the project

Start Tailwind CSS in watchmode (Optional, for CSS Changes):
```bash
npm run dev
```

Run the project locally and open in your browser with:
```bash
npm run start
```

### Running tests

To run all Vitest tests use:
```bash
npm run test
```

To run all Playwright E2E Tests use:
```bash
npm run e2e
```

To open the report of the Playwright E2E Tests use:
```bash
npm run e2e:report
```

## Environment Variables

This project uses environment variables which are required. Create a .env file in the root of the project with the following format ( from .env.example in the root folder ):

```bash
TEST_USER_EMAIL=your_username@stud.noroff.no
TEST_USER_PASSWORD=your_password_here
```

Note: Ensure the credentials work before running login tests.
If it does not work, the tests will fail, you can register an account by running the project:
```bash
npm run start
```
and using the register form on /register page. Proceed with updating the Environment Variables in .env file with the newly created credentials.

## Available Scripts

- `npm run dev` - Start development server
- `npm run start` - Runs the project on live server (http://127.0.0.1:5500)
- `npm run test` - Run all Vitest tests
- `npm run prepare` - Sets up husky commit hooks
- `npm run e2e` - To run all end-to-end tests with Playwright.
- `npm run e2e:report` - Open last Playwright HTML Report in your browser
- `npm run lint` - Run ESLint on all .js files and actually fix issues.
- `npm run format` - Run Prittier on all .js, .html and .css files and changing them.

## Technologies used

- JavaScript
- HTML
- CSS
- ESLint
- Prettier
- Husky
- Playwright

# Author
#### Original Project:
Noroff | Connor OBrien

#### Workflow Branch Changes / CA Submission:
Henrik Leutscher
