# Express ES6 Setup
> Repo is setup for testing, playground and quick setup. It includes babel 7 setup, which is the most important purpose of the repo.

## Installation
If you are using npm
```sh
npm install
```

or using yarn 
```sh
yarn
```

## Run
For npm 
```sh
npm start
```
For yarn
```sh
yarn start
```

## DOCKER
The repo is named as `node-server`, if wanted to change the name of container, please update `container_name` in `./docker-compose.yml` 
```sh
...
container_name: node-server
...
```

## Testing 
`Mocha` and `chai` would be used in the repo, and you need to add unit test and test suits by yourself.