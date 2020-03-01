const format = (string, ...args) => {
  if (!string.match(/^(?:(?:(?:[^{}]|(?:\{\{)|(?:\}\}))+)|(?:\{[0-9]+\}))+$/)) {
    throw new Error('invalid format string.');
  }
  return string.replace(/((?:[^{}]|(?:\{\{)|(?:\}\}))+)|(?:\{([0-9]+)\})/g, (m, str, index) => {
    if (str) {
      return str.replace(/(?:{{)|(?:}})/g, m => m[0]);
    } else {
      if (index >= args.length) {
        throw new Error('argument index is out of range in format');
      }
      return args[index];
    }
  });
};

export const stringFormat = (string, ...args) => format(string, ...args);
