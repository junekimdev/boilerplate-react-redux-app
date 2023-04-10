# Boilerplate codes for React-Redux App

![release-version](https://img.shields.io/github/v/release/junekimdev/boilerplate-react-redux-app?display_name=tag)
![last-commit](https://img.shields.io/github/last-commit/junekimdev/boilerplate-react-redux-app)
![license](https://img.shields.io/github/license/junekimdev/boilerplate-react-redux-app)

This is boilerplate codes to quick-start a React app with Redux

## Table of Contents

1. [Getting Started](#getting-started)
1. [Tech Stack](#tech-stack)
1. [Directory Structure](#directory-structure)
1. [Code Generation](#code-generation)
1. [Authors](#authors)
1. [License](#license)

---

## Getting Started

### Prerequisite

> `React` doesn't require `Node.js`
>
> `Node.js` is needed for code generators

Install latest Node.js LTS

```shell
# Debian
sudo apt update
sudo apt install nodejs
nodejs -v

# Windows
choco install nodejs-lts
```

### Installation

Clone the repo and install dependencies

```shell
# git clone will create a directory named myAppName
# if the directory is already created, then use .(dot) instead of myAppName
git clone https://github.com/junekimdev/boilerplate-react-redux-app.git <myAppName>
cd myAppName
yarn
```

Make sure to remove `.git` directory to start afresh

```shell
# remove .git directory beforehand
git init
git add .
git commit -m "Initial commit"
git branch -M master
git remote add origin <myGitRepo>
git push -u origin master
```

Add a file `.env` that includes environmental variables

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
- Transpiler: SWC (included in NextJS)
- State management: Redux
- Redux middleware: Redux-saga
- HTTP client: axios
- JavaScript Testing Framework: Jest
- Browser style normalization script: Normalize
- Stylesheet preprocessor: SASS/SCSS
- Stylesheet postprocessor: Postcss (included in NextJS)
- Postcss plugin: Autoprefixer (included in NextJS)
- Version control: Git
- Source code repository: GitHub
- Linter: ESLint
- Formatter: Prettier
- Template engine for code generation: EJS

## Directory Structure

<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD037 -->
<pre>
Root
├── components  
    ├── _theme.scss  
    └── eachComponent  
        ├── index.ts  
        ├── eachComponent.module.scss  
        ├── eachComponentInteractor.tsx  
        ├── eachComponentPresenter.tsx  
        ├── eachComponentViewName.tsx  
        └── eachComponentType.tsx  
├── controllers  
    ├── index.ts  
    ├── store.ts  
    ├── apiURLs.ts  
    ├── actions  
        ├── index.ts  
        └── eachAction.ts  
    ├── reducers  
        ├── index.ts  
        └── eachReducer.ts  
    ├── sagas  
        ├── index.ts  
        └── eachSaga.ts  
    └── types  
        ├── index.ts  
        └── eachTypes.ts  
├── pages  
    ├── _app.tsx  
    ├── _document.tsx  
    ├── index.ts  
    └── global.scss  
├── public  
    ├── favicon.ico (similar files)  
    ├── robot.txt  
    └── assets  
        └── images  
            └── eachImage.png  
├── templates  
    └── eachCodeGenerationTemplate.ejs
</pre>
<!-- markdownlint-enable MD033 -->
<!-- markdownlint-enable MD037 -->

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

#### Adding New Actions in a New File

1. Create new file, `myNewAction.ts`, one for each action, reducer, saga by using `codegen-action.js`

   action names should be in arguments as unnamed args (e.g. action1, action2, action3, moreActions)

   > ```shell
   > node codegen-action.js --name=myNewAction action1 action2 action3 moreActions
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

#### Appending Actions to an Existing File

1. Create new actions in `myNewAction.ts` by using `codegen-action.js`

   Appending actions require the same filename which exists already in each folder

   > ```shell
   > node codegen-action.js --name=myNewAction action1 action2 action3 moreActions
   > ```

## Authors

- **June Kim** - _Initial work_ - [Github](https://github.com/junekimdev)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
