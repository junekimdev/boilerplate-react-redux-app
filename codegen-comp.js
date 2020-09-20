const fs = require('fs-extra');
const ejs = require('ejs');
const parser = require('yargs-parser');
const path = require('path');

const renderEjs = (templateFile, name, outFilename) => {
  const data = { name };
  ejs.renderFile(templateFile, data, {}, (err, str) => {
    if (err) console.error(err);

    const filePath = path.join(__dirname, 'components', name, outFilename);
    fs.ensureFileSync(filePath); // Check if file exists, or create it
    fs.outputFileSync(filePath, str);
  });
};

const main = () => {
  console.log('Begins code generation...');
  try {
    /**
     * v: when true, view will be generated; default to true
     * V: when true, view will not be genereated
     */
    const { name, v = true, V } = parser(process.argv.slice(2));

    // Check that the required flags are in
    if (!name) {
      console.error('--name flag required');
      process.exit(1);
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
    renderEjs(scssTemplate, name, `${name}.scss`);
    if (v && !V) renderEjs(viewTemplate, name, `${name}View.tsx`);

    console.log(`Generated the [${name}] component`);
  } catch (err) {
    console.error(err);
  }
};

main();
