/*
 * This file defines a custom Cucumber world for testing scenarios with Playwright.
 * It extends the default Cucumber World class to include additional properties and methods.
 * The CustomWorld class is instantiated as the world object for Cucumber scenarios.
 * The setWorldConstructor function is then used to set CustomWorld as the constructor
 * for the Cucumber world.
 *
 * The world object contains properties such as debug mode, feature information, browser context, page, etc.
 * These properties are used throughout the test scenarios for setup, execution, and verification.
 *
 * This setup allows for easy integration of Playwright functionality with Cucumber tests,
 * enabling efficient and effective end-to-end testing of web applications.
 */

import { setWorldConstructor, World, IWorldOptions } from '@cucumber/cucumber';
import * as messages from '@cucumber/messages';
import { BrowserContext, Page, PlaywrightTestOptions } from '@playwright/test';

export interface CucumberWorldConstructorParams {
  parameters: { [key: string]: string };
}

export class CustomWorld extends World {
  debug: boolean = false;
  feature?: messages.Pickle;
  context?: BrowserContext;
  page?: Page;
  testName?: string;
  startTime?: Date;
  server?: string;
  playwrightOptions?: PlaywrightTestOptions;
  variables: Map<string, any> = new Map<string, any>();
  jsonData?: any;

  constructor(options: IWorldOptions & CucumberWorldConstructorParams) {
    super(options);
    this.debug = false; // Initialize debug to false
    this.variables = new Map<string, any>(); // Initialize variables map
  }
}

setWorldConstructor(CustomWorld);
