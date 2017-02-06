# Jira Board Issues

Simple module - to make request to jira api, and recieve issues

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [License](#license)

## Install

Clone repository, install pm2, configure, run index.js

## Usage

Example request:
```
    YOUR_ADRESS:4747/api/kanban?boardId=229&jql=assignee%20=%20currentUser()
```
jql is currently mandatory

## License

MIT © Dmitri Kunin
