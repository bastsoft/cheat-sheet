---
title: "cypress"
date: "2020-06-15"
tags:
  - ci
  - qa
description: |
  Настройка cypress
---

## Документация по коммандам

https://docs.cypress.io/api/commands/wait.html#Syntax

## Использование cypress для тестирование по фишме

https://docs.cypress.io/api/plugins/after-screenshot-api.html#Usage


## cypress-mochawesome-reporter

https://www.npmjs.com/package/cypress-mochawesome-reporter


https://www.npmjs.com/package/mochawesome

```addContext(testObj, context)```




```js
runnable:
{
  "title": "главная страница",
  "body": "function () {\n        cy.visit(\"/\");\n        cy.wait(3000);\n        cy.screenshot([\"figma\", \"главная страница\"].join(\" -- \") + \"---\" + \"831-1099\");\n    }",
  "async": 0,
  "sync": true,
  "_timeout": 4000,
  "_slow": 75,
  "_enableTimeouts": false,
  "timedOut": false,
  "_retries": -1,
  "_currentRetry": 0,
  "pending": false,
  "type": "test",
  "file": null,
  "parent": {
    "title": "figma",
    "ctx": {
      "_runnable": "[Circular ~.0.value]",
      "test": "[Circular ~.0.value]"
    },
    "suites": [],
    "tests": [
      "[Circular ~.0.value]"
    ],
    "pending": false,
    "_beforeEach": [],
    "_beforeAll": [],
    "_afterEach": [],
    "_afterAll": [],
    "root": false,
    "_timeout": 0,
    "_enableTimeouts": false,
    "_slow": 75,
    "_bail": false,
    "_retries": -1,
    "_onlyTests": [],
    "_onlySuites": [],
    "delayed": false,
    "_events": {},
    "_eventsCount": 1,
    "parent": {
      "title": "",
      "ctx": {},
      "suites": [
        "[Circular ~.0.value.parent]"
      ],
      "tests": [],
      "pending": false,
      "_beforeEach": [],
      "_beforeAll": [],
      "_afterEach": [],
      "_afterAll": [],
      "root": true,
      "_timeout": 0,
      "_enableTimeouts": false,
      "_slow": 75,
      "_bail": false,
      "_retries": -1,
      "_onlyTests": [],
      "_onlySuites": [],
      "delayed": false,
      "_events": {
        "pre-require": [
          null,
          null,
          null
        ]
      },
      "_eventsCount": 2,
      "file": "tests/e2e/integration/figma.js",
      "id": "r1",
      "type": "suite"
    },
    "file": null,
    "id": "r2",
    "type": "suite"
  },
  "ctx": {
    "_runnable": "[Circular ~.0.value]",
    "test": "[Circular ~.0.value]"
  },
  "id": "r3",
  "order": 1,
  "_events": {},
  "_eventsCount": 1,
  "wallClockStartedAt": "2020-06-15T11:14:42.957Z",
  "_fired": {
    "runner:test:before:run": true,
    "runner:test:before:run:async": true,
    "runner:runnable:after:run:async": true,
    "runner:test:after:run": true
  },
  "timings": {
    "lifecycle": 84,
    "test": {
      "fnDuration": 6092,
      "afterFnDuration": 0
    }
  },
  "timer": null,
  "duration": 6176,
  "state": "passed",
  "wallClockDuration": 6195
}
test:
{
  "id": "r3",
  "order": 1,
  "title": "главная страница",
  "state": "passed",
  "body": "function () {\n        cy.visit(\"/\");\n        cy.wait(3000);\n        cy.screenshot([\"figma\", \"главная страница\"].join(\" -- \") + \"---\" + \"831-1099\");\n    }",
  "type": "test",
  "duration": 6176,
  "wallClockStartedAt": "2020-06-15T11:14:42.957Z",
  "wallClockDuration": 6195,
  "timings": {
    "lifecycle": 84,
    "test": {
      "fnDuration": 6092,
      "afterFnDuration": 0
    }
  },
  "file": null,
  "context": "[Circular ~]"
}
Cypress.spec:
{
  "name": "figma.js",
  "relative": "tests/e2e/integration/figma.js",
  "absolute": "/Users/petrlaptev/project/tjump/larvij2-nuxt/tests/e2e/integration/figma.js",
  "specType": "integration"
}


```