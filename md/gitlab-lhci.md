---
title: "GitLab CI"
date: "2020-06-09"
tags:
  - ci
  - lighthouse
  - Cypress
description: |
  Настройка lhci
---

## Cypress

Cypress желательно выполнять на каждый МР, тк MP у нас подтвергаются ревью, подождать не будет лишним

```sh
cypress:
  stage: test
  image: cypress/browsers:node13.6.0-chrome80-ff72
  script:
    - npm ci
    - cp ./patches/"@nuxt"/types/config/build.d.ts  ./node_modules/"@nuxt"/types/config/build.d.ts
    - cp ./patches/"@nuxt"/types/config/cli.d.ts  ./node_modules/"@nuxt"/types/config/cli.d.ts
    - cp ./patches/"@types"/webpack-dev-middleware/index.d.ts  ./node_modules/"@types"/webpack-dev-middleware/index.d.ts
    - npm install -g wait-on
    - npm run build
    - npm run generate
    - npm start & wait-on http://localhost:3000/ && npx cypress run --browser chrome --headless --reporter cypress-mochawesome-reporter --config baseUrl=http://localhost:9000
    - npx generate-mochawesome-report
  artifacts:   
   paths: 
     - cypress
   expire_in: 1 day
  except:
    - master
    - hotfix
    - /^hf.*$/
```

## Lighthouse

1. Установить docker контейнер с lhci server

2. lhci wizard

на вопрос Where is the project's code hosted?  лучше выполнить комманду

``` git config --get remote.origin.url```


3. Создать файл ```.lighthouserc.js```

```javascript
module.exports = {
    ci: {
      collect: {
        settings: {
          "chromeFlags": " --no-sandbox"
        },
        url: ['http://localhost:5000/'],
      },
      upload: {
        target: 'lhci',
        serverBaseUrl: 'http://18x.13x.23x.x:900x/',
        token: 'xxxxxx-e616-48c5-aa34-9fbc5d6460f2', // Use build token
      },
      assert: {
        preset: 'lighthouse:recommended',
        assertions: {
          'unused-css-rules': 'off',
          'unused-javascript': 'off',
          'maskable-icon': 'off',
          'is-crawlable': 'off',
          'meta-viewport': 'off',
          'offline-start-url': 'off',
          'offscreen-images': 'off',
          'uses-rel-preconnect': 'off',
          'uses-text-compression': 'off',
          'works-offline': 'off'
        },
      },
    }
  };
```

4. Добавить в .gitlab-ci.yml

Lighthouse желательно выполнять только на master ветки, тк он собирает историю по ветки.

```sh
lhci:
  stage: test
  image: cypress/browsers:node13.6.0-chrome80-ff72
  script:
    - npm ci
    - npm install -g @lhci/cli@0.4.x
    - npm install -g wait-on
    - npm run build
    - npm run generate
    - npm start & wait-on http://localhost:3000/ && lhci autorun
  only:
  - master
```
