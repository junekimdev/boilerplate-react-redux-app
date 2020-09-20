const fs = require('fs-extra');
const ejs = require('ejs');
const parser = require('yargs-parser');
const path = require('path');

/**
 *
 * @param {string} string
 */
const snakeCaseCap = (string) => {
  return string
    .replace(/\W+/g, ' ')
    .split(/ |\B(?=[A-Z0-9])/)
    .map((word) => word.toUpperCase())
    .join('_');
};

const renderEjs = (templateFile, data, outFilename, flags, outType) => {
  ejs.renderFile(templateFile, data, {}, (err, str) => {
    if (err) console.error(err);

    const filePath = path.join(__dirname, 'controllers', outType, `${outFilename}.ts`);
    const writer = fs.createWriteStream(filePath, { flags });
    writer.write(str);
    writer.end();
  });
};

const main = () => {
  console.log('Begins code generation...');
  try {
    /**
     * a: when true, actions will be generated; default to true
     * r: when true, reducer will be generated
     * s: when true, saga will be genereated
     * all: when true, actions, reducer, saga will be generated
     * n: when true, new templates instead of extention templates will be used
     */
    let { _: funcnames, name, a, r, s, all, n } = parser(process.argv.slice(2));

    if (all) a = r = s = true;

    // Check that the required flags are in
    if (!funcnames.length) {
      console.error('Action name(s) required');
      process.exit(1);
    }
    if (!name) {
      console.error('--name flag required');
      process.exit(1);
    }

    const typenames = funcnames.map((s) => `${name.toUpperCase()}_${snakeCaseCap(s)}`);

    // Boilerplate Templates
    const actionTemplate = n
      ? path.join(__dirname, 'templates', 'action.ejs')
      : path.join(__dirname, 'templates', 'actionExtend.ejs');
    const reducerTemplate = n
      ? path.join(__dirname, 'templates', 'actionReducer.ejs')
      : path.join(__dirname, 'templates', 'actionReducerExtend.ejs');
    const sagaTemplate = n
      ? path.join(__dirname, 'templates', 'actionSaga.ejs')
      : path.join(__dirname, 'templates', 'actionSagaExtend.ejs');

    // Boilerplate Outputs
    const data = { name, funcnames, typenames };
    const flags = n ? 'w' : 'a';
    if (a) renderEjs(actionTemplate, data, name, flags, 'actions');
    if (r) renderEjs(reducerTemplate, data, `${name}Reducer`, flags, 'reducers');
    if (s) renderEjs(sagaTemplate, data, `${name}Saga`, flags, 'sagas');

    if (a && n) console.log(`Created ${funcnames.length} action(s) for [${name}]`);
    if (r && n) console.log(`Created a reducer file for [${name}]`);
    if (s && n) console.log(`Created a saga file for [${name}]`);

    if (a && !n) console.log(`Added ${funcnames.length} action(s) for [${name}]`);
    if (r && !n) console.log(`Added ${funcnames.length} reducer(s) for [${name}]`);
    if (s && !n) console.log(`Added ${funcnames.length} saga(s) for [${name}]`);
  } catch (err) {
    console.error(err);
  }
};

main();
