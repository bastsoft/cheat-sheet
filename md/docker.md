---
title: "шпаргалка по Docker"
date: "2020-06-09"
tags:
  - ci
  - docker
description: |
  Пока только о docker-compose
---

## docker-compose

- ```docker-compose up``` создать контейнер 
- ```docker-compose up -d``` запустить контейнер в фоновом режиме
- ```docker ps``` вывести все активные контейнеры
- ```docker ps -a``` вывести все существующие контейнеры 
- ```docker-compose stop``` остановит ваши запущенные docker-контейнеры, однако не удалит их
- ```docker-compose down``` остановит запущенные docker-контейнеры и удалит их
- ```docker-compose down -v ``` тоже самое но еще и удалит все созданные тома

#### Ссылки

- [Hexlet Guides docker](https://guides.hexlet.io/docker/)

