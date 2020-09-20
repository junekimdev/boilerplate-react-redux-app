# Boilerplate codes for React App

This is boilerplate codes to quick-start a react app

## Table of Contents

1. [Getting Started](#getting_-started)
1. [Tech Stack](#tech-stack)
1. [Directory Structure](#directory-structure)
1. [Code Generation](#code-generation)
1. [Authors](#Authors)
1. [License](#License)

---

## Getting Started

### Prerequisites

Install Node.js at least 12.x.x LTS

```shell
# Debian
sudo apt update
sudo apt install nodejs
nodejs -v
```

### Installing

Clone the repo and install dependencies

```shell
# git clone will create a directory named myAppName
# if the directory is already created, then use .(dot) instead of myAppName
git clone https://github.com/JuneKimDev/boilerplate-react-app.git myAppName
cd myAppName
yarn
```

Make sure to remove `.git` directory for a fresh new start

```shell
# remove .git directory first
git init
git add .
git commit -m "Initial commit"
git branch -M master
git remote add origin https://github.com/JuneKimDev/boilerplate-react-app.git
git push -u origin master
```

Add a file `.env` that includes env var

example

```shell
#NODE_ENV=production
#PUBLIC_URL=https://app.domain.com
API_URL=http://api.domain.com
```

## Tech Stack

- Markup language (Web Standard): HTML5
- Stylesheet language (Web Standard): CSS3
- Script language: ECMAScript 2015 (a.k.a Javascript ES6)
- Javascript Package Manager: Yarn
- Script preprocessor: Typescript
- Website client-side rendering framework: ReactJS
- Website server-side rendering framework: NextJS
- Package management: webpack (included in NextJS)
- Transpiler: Babel (included in NextJS)
- State management: Redux
- Redux middleware: Redux-saga
- HTTP client: axios
- JavaScript Testing Framework: Jest
- User Agent detection script: Modernizr
- Browser style normalization script: Normalize
- Stylesheet preprocessor: SASS/SCSS
- Stylesheet postprocessor: Postcss (included in NextJS)
- Postcss plugin: Autoprefixer
- Version control: Git
- Source code repository: GitHub
- Linter: ESLint
- Formatter: Prettier
- Template engine for code generation: EJS

## Directory Structure

Root  
|-- components  
|--|-- \_theme.scss  
|--|-- eachComponent  
|--|--|-- index.ts  
|--|--|-- eachComponent.scss  
|--|--|-- eachComponentInteractor.tsx  
|--|--|-- eachComponentPresenter.tsx  
|--|--|-- eachComponentViewName.tsx  
|-- controllers  
|--|-- index.ts  
|--|-- store.ts  
|--|-- apiURLs.ts  
|--|-- actions  
|--|--|-- index.ts  
|--|--|-- eachAction.ts  
|--|-- reducers  
|--|--|-- index.ts  
|--|--|-- eachReducer.ts  
|--|-- sagas  
|--|--|-- index.ts  
|--|--|-- eachSaga.ts  
|-- pages  
|--|-- index.ts  
|--|-- \_app.tsx  
|--|-- \_document.tsx  
|--|-- global.scss  
|-- public  
|--|-- favicon.ico (similar files)  
|--|-- robot.txt  
|--|-- assets  
|--|--|-- images  
|--|--|--|-- eachImage.png  
|-- types  
|--|-- index.ts  
|--|-- eachTypes.ts  
|-- templates  
|--|-- eachCodeGenerationTemplate.ejs

## Code Generation

### Component Generator

- With a View file

```shell
node codegen-comp.js --name=myComponent
```

- Without a View file

```shell
node codegen-comp.js --name=myComponent --V
```

### Action Generator

#### Creating new files

1. Create new file, `myNewAction.ts`, one for each action, reducer, saga by using `codegen-action.js`

   > ```shell
   > # action names should be in arguments (e.g. action1, action2, action3, moreActions)
   > node codegen-action.js --name=myNewAction action1 action2 action3 moreActions --all --n
   > ```

1. Add `myNewAction` into `index.ts` under actions directory

   > ```ts
   > export { default as myNewAction } from './myNewAction';
   > ```

1. Add `myNewActionReducer` into `index.ts` under reducers directory

   > ```ts
   > import myNewAction from './myNewActionReducer';
   > const rootReducer = combineReducers({ existingAction, myNewAction });
   > ```

1. Add `myNewActionSaga` into `index.ts` under sagas directory

   > ```ts
   > import myNewActionSaga from './myNewActionSaga';
   > const sagas: any[] = [requestSaga, existingActionSaga, myNewActionSaga];
   > ```

#### Appending to the existing files

1. Create new actions in `myNewAction.ts` by using `codegen-action.js`

   > ```shell
   > # action names should be in arguments (e.g. action1, action2, action3, moreActions)
   > node codegen-action.js --name=myNewAction action1 action2 action3 moreActions --all
   > ```

## Authors

- **June Kim** - _Initial work_ - [Github](https://github.com/JuneKimDev)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
