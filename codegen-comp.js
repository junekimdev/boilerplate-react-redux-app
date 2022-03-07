const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const { getArgs, askQuestion } = require('./codegen-util');

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

const main = async () => {
  console.log('Code generation started...');
  try {
    /**
     * v: when true, view will be generated; default to true
     * V: when true, view will not be genereated
     */
    let { name, v = true, V } = getArgs();

    // Make sure name has a value
    if (!name) {
      name = await askQuestion('Name of the Component? ');
    }

    // Check if the directory exists
    const dirPath = path.join(__dirname, 'components', name);
    try {
      fs.accessSync(dirPath);
      // If exists, ask to overwrite or not
      console.log('A component with the given name already exists');
      const ans = await askQuestion('Do you want to overwrite it? [y/n] ');
      if (ans !== 'y' && ans !== 'Y') process.exit(1);
    } catch (e) {
      // Not existing, create it
      console.log(`Creating ${dirPath}`);
      fs.mkdirSync(dirPath);
    }

    // Select template
    const indexTemplate = path.join(__dirname, 'templates', 'compIndex.ejs');
    const interactorTemplate = path.join(__dirname, 'templates', 'interactor.ejs');
    const presenterTemplate = path.join(__dirname, 'templates', 'presenter.ejs');
    const scssTemplate = path.join(__dirname, 'templates', 'scss.ejs');
    const typeTemplate = path.join(__dirname, 'templates', 'type.ejs');
    const viewTemplate = path.join(__dirname, 'templates', 'view.ejs');

    // Output
    renderEjs(indexTemplate, name, 'index.ts');
    renderEjs(interactorTemplate, name, `${name}Interactor.tsx`);
    renderEjs(presenterTemplate, name, `${name}Presenter.tsx`);
    renderEjs(scssTemplate, name, `${name}.module.scss`);
    renderEjs(typeTemplate, name, `${name}Type.ts`);
    if (v && !V) renderEjs(viewTemplate, name, `${name}View.tsx`);

    console.log(`Generated the component: ${name}`);
  } catch (err) {
    console.error(err);
  }
};

main();
