const { resolve } = require('path');
const pullAll = require('lodash/pullAll');
const uniq = require('lodash/uniq');

const SparkDemo = {
  version: '1.0.0',
  dllPlugin: {
    defaults: {
      exclude: [
        'compression',
        'cross-env',
        'express',
        'ip',
      ],
      include: [],
      path: resolve('../node_modules/spark-demo-dlls'),
    },

    entry(pkg) {
      const dependencyNames = Object.keys(pkg.dependencies);
      const exclude = pkg.dllPlugin.exclude || SparkDemo.dllPlugin.defaults.exclude;
      const include = pkg.dllPlugin.include || SparkDemo.dllPlugin.defaults.include;
      const includeDependencies = uniq(dependencyNames.concat(include));

      return {
        sparkDemoDeps: pullAll(includeDependencies, exclude),
      };
    },
  },
};

module.exports = SparkDemo;
