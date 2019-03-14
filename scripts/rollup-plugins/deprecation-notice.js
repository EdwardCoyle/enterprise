// Simple plugin for rollup that detects the existence of JSDoc @deprecated comments
// and pumps them into the console during the build process.
const chalk = require('chalk');
const documentation = require('documentation');
const path = require('path');
const logger = require('../logger');

const projectRoot = process.cwd();
const EMPTY_MAP = {
  mappings: ''
};

// Method for parsing the `children` of a deprecated comment node, which can
// include paragraphs, spans, and other text-containing nodes.
const parseChildren = function (obj) {
  let str = '';
  if (obj) {
    if (obj.value) {
      str += `${obj.value}`;
    } else if (obj.children) {
      obj.children.forEach((child) => {
        str += parseChildren(child);
      });
    }
  }
  return str;
};

// Logs the deprecation notice in the terminal
const logDeprecation = function (componentName, methodName, deprecatedObj) {
  const formattedName = chalk.white.bold(`${componentName}.${methodName}()`);
  const msgStr = `${parseChildren(deprecatedObj)}` || '';

  logger('alert', `${formattedName} is deprecated ${msgStr}`);
};

// Connect to Rollup.js's `transform` hook to get access to an individual ES Module.
// This doesn't actually "transform" the code, but will pass its contents into
// Documentation.js for detection of a `@deprecated` tag.
const transform = function (code, filePath) {
  const ret = {
    code,
    map: EMPTY_MAP
  };

  if (!filePath || !filePath.includes(path.join(projectRoot, 'src'))) {
    // TODO: re-enable logging for a verbose mode?
    // logger(`Skipping file ${chalk.cyan(filePath)}...`);
    return ret;
  }

  documentation
    .build([filePath], { extension: 'js', shallow: true })
    .then((docs) => {
      if (!docs || !docs.length) {
        return;
      }

      docs.forEach((doc) => {
        if (!doc.members || !doc.members.instance || !doc.members.instance.length) {
          return;
        }

        const methods = doc.members.instance;
        methods.forEach((method) => {
          if (method.deprecated) {
            logDeprecation(doc.name, method.name, method.deprecated);
          }
        });
      });
    })
    .catch((err) => {
      logger('error', `${err}`);
    });

  return ret;
};

// The actual Rollup.js plugin wrapper
const plugin = function () {
  return {
    name: 'deprecation-notice',
    transform
  };
};

module.exports = plugin;
