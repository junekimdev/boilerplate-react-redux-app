const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const { snakeCaseCap, getArgs, askQuestion } = require('./codegen-util');

const renderEjs = (templateFile, data, outFilename, flags, outType) => {
  ejs.renderFile(templateFile, data, {}, (err, str) => {
    if (err) console.error(err);

    const filePath = path.join(__dirname, 'controllers', outType, `${outFilename}.ts`);
    const writer = fs.createWriteStream(filePath, { flags });
    writer.write(str);
    writer.end();
  });
};

const main = async () => {
  console.log('Code generation started...');
  try {
    /**
     * name: filename
     *
     * When n is omitted, the code will try to access the file first;
     * if found, actions will be appended;
     * if not, the file will be created and actions will be there.
     */
    // eslint-disable-next-line prefer-const
    let { _: actions, name, n } = getArgs();

    // Check that the required flags are in
    if (!name) {
      console.log('Filename is required');
      name = await askQuestion('The filename, plz? ');
    }

    if (!actions.length) {
      console.log('At least, one action name is required');
      const actionName = await askQuestion('Action name, plz? ');
      actions.push(actionName);
    }

    const filePath = path.join(__dirname, 'controllers', 'actions', `${name}.ts`);
    try {
      // Check if the file exists
      fs.accessSync(filePath, fs.constants.R_OK | fs.constants.W_OK);
      if (n) {
        // The file exists; but option n is set
        console.log('A file with the given name already exists');
        const ans = await askQuestion('Do you want to overwrite it? [y/n] ');
        if (ans !== 'y' && ans !== 'Y') process.exit(1);
      }
    } catch (e) {
      // Not existing, create a new file
      n = true;
    }

    // Select templates
    const actionTemplate = n
      ? path.join(__dirname, 'templates', 'action.ejs')
      : path.join(__dirname, 'templates', 'actionExtend.ejs');
    const reducerTemplate = n
      ? path.join(__dirname, 'templates', 'actionReducer.ejs')
      : path.join(__dirname, 'templates', 'actionReducerExtend.ejs');
    const sagaTemplate = n
      ? path.join(__dirname, 'templates', 'actionSaga.ejs')
      : path.join(__dirname, 'templates', 'actionSagaExtend.ejs');

    // Output
    const typenames = actions.map((str) => `${name.toUpperCase()}_${snakeCaseCap(str)}`);
    const data = { name: name, funcnames: actions, typenames };
    const flags = n ? 'w' : 'a';
    renderEjs(actionTemplate, data, name, flags, 'actions');
    renderEjs(reducerTemplate, data, `${name}Reducer`, flags, 'reducers');
    renderEjs(sagaTemplate, data, `${name}Saga`, flags, 'sagas');

    const verb = n ? 'Created' : 'Added';
    console.log(verb, `${actions.length} action(s) for [${name}]`);
    console.log(verb, `${actions.length} reducer(s) for [${name}]`);
    console.log(verb, `${actions.length} saga(s) for [${name}]`);
  } catch (err) {
    console.error(err);
  }
};

main();
