---
title: "GitLab CI - lighthouse"
date: "2020-06-09"
tags:
  - ci
  - lighthouse
description: |
  Настройка lhci
---

1. Установить docker контейнер с lhci server

2. lhci wizard

на вопрос Where is the project's code hosted?  лучше выполнить комманду

``` git config --get remote.origin.url```


3. Создать файл ```.lighthouserc.js```

```sh
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