# SauceDemo Playwright Login Tests

## Overview

Automated UI tests for the SauceDemo login page, built with Playwright Test,
JavaScript, and Node.js.

## Test coverage

The login tests cover:

- Login with valid credentials
- Locked-out and unknown users
- Incorrect passwords
- Empty or missing username and password
- Password field masking
- Visibility of the login form

## Prerequisites

- Node.js and npm

## Installation

```bash
npm ci
npx playwright install chromium
```

## Run tests

```bash
# Run all tests
npm test

# Run login tests
npm run test:login

# Run login tests with a visible browser
npm run test:headed

# Open the Playwright UI
npm run test:ui
```

## Reports

The Playwright configuration generates:

- HTML report in `playwright-report/` (`npm run report` opens it)
- JUnit report in `results/junit.xml`
- Failure screenshots, videos, and traces in `test-results/`

## Project structure

- `tests/login.spec.js` — login test cases
- `tests/pages/LoginPage.js` — login page object
- `tests/data/loginUsers.js` — test users and expected error messages
- `playwright.config.js` — Playwright settings and reporters

These tests exercise the public SauceDemo UI in Chromium. They do not test
backend services or database state.