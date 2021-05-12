const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const { parseArgs } = require('./util');

const renderEjs = (templateFile, name, outFilename) => {
  const data = { name };
  ejs.renderFile(templateFile, data, {}, (err, str) => {
    if (err) console.error(err);

    const filePath = path.join(__dirname, 'components', name, outFilename);

    try {
      const writer = fs.createWriteStream(filePath, { flags: 'w' });
      writer.write(str);
      writer.end();
    } catch (e) {
      console.error(`Failed to create file: ${outFilename}`);
    }
  });
};

const main = () => {
  console.log('Begins code generation...');
  try {
    /**
     * v: when true, view will be generated; default to true
     * V: when true, view will not be genereated
     */
    const { name, v = true, V } = parseArgs();

    // Check that the required flags are in
    if (!name) {
      console.error('--name flag required');
      process.exit(1);
    }

    // Check if the directory exists
    const dirPath = path.join(__dirname, 'components', name);
    try {
      fs.accessSync(dirPath);
      // If exists, exit
      console.error('A component with the given name exists already');
      process.exit(1);
    } catch (e) {
      console.log(`Creating ${dirPath}`);
      fs.mkdirSync(dirPath);
    }

    // Boilerplate Templates
    const indexTemplate = path.join(__dirname, 'templates', 'compIndex.ejs');
    const interactorTemplate = path.join(__dirname, 'templates', 'interactor.ejs');
    const presenterTemplate = path.join(__dirname, 'templates', 'presenter.ejs');
    const scssTemplate = path.join(__dirname, 'templates', 'scss.ejs');
    const viewTemplate = path.join(__dirname, 'templates', 'view.ejs');

    // Boilerplate Outputs
    renderEjs(indexTemplate, name, 'index.ts');
    renderEjs(interactorTemplate, name, `${name}Interactor.tsx`);
    renderEjs(presenterTemplate, name, `${name}Presenter.tsx`);
    renderEjs(scssTemplate, name, `${name}.module.scss`);
    if (v && !V) renderEjs(viewTemplate, name, `${name}View.tsx`);

    console.log(`Generated the component: ${name}`);
  } catch (err) {
    console.error(err);
  }
};

main();
