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

const parseArgs = () => {
  let args = process.argv;
  if (args.length < 2) {
    console.error('No arguments found');
    return {};
  }

  args = args.slice(2);
  const result = {};
  result._ = [];

  for (let i = 0; i < args.length; i++) {
    if (args[i].includes('--')) {
      const temp = args[i].slice(2);
      if (temp.includes('=')) {
        const [k, v] = temp.split('=');
        if (v.toLowerCase() === 'true') {
          result[k] = true;
        } else if (v.toLowerCase() === 'false') {
          result[k] = false;
        } else {
          result[k] = v;
        }
      } else {
        result[temp] = true;
      }
    } else if (args[i].includes('-')) {
      const temp = args[i].slice(1);
      if (temp.includes('=')) {
        const [k, v] = temp.split('=');
        if (v.toLowerCase() === 'true') {
          result[k] = true;
        } else if (v.toLowerCase() === 'false') {
          result[k] = false;
        } else {
          result[k] = v;
        }
      } else {
        result[temp] = true;
      }
    } else {
      result._ = [...result._, args[i]];
    }
  }
  return result;
};

module.exports = { snakeCaseCap, parseArgs };
