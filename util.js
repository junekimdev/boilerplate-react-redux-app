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
  args = process.argv;
  if (args.length < 2) assert('No arguments found');

  args = args.slice(2);
  result = {};
  result['_'] = [];

  for (i = 0; i < args.length; i++) {
    if (args[i].includes('--')) {
      temp = args[i].slice(2);
      if (temp.includes('=')) {
        temp = temp.split('=');
        if (temp[1].toLowerCase() === 'true') {
          result[temp[0]] = true;
        } else if (temp[1].toLowerCase() === 'false') {
          result[temp[0]] = false;
        } else {
          result[temp[0]] = temp[1];
        }
      } else {
        result[temp] = true;
      }
    } else if (args[i].includes('-')) {
      temp = args[i].slice(1);
      if (temp.includes('=')) {
        temp = temp.split('=');
        if (temp[1].toLowerCase() === 'true') {
          result[temp[0]] = true;
        } else if (temp[1].toLowerCase() === 'false') {
          result[temp[0]] = false;
        } else {
          result[temp[0]] = temp[1];
        }
      } else {
        result[temp] = true;
      }
    } else {
      result['_'] = [...result['_'], args[i]];
    }
  }
  return result;
};

module.exports = { snakeCaseCap, parseArgs };
