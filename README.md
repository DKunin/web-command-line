# Web Command Line

Simple server to execute bash commands locally

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [License](#license)

## Install

```console
    docker build ./ -t username/web-command-line
    docker run -p 4949:8080 -d username/web-command-line
```

## Usage

Example request:
```
    YOUR_ADRESS:4949/command/:commandName?options=options
```

If you don't need a response:
```
    YOUR_ADRESS:4949/silent/:commandName?options=options
```

## License

MIT © Dmitri Kunin
