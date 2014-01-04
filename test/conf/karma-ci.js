var ciConfig = require('./karma-common.js');

module.exports = function (config) {
    ciConfig.browsers = ciConfig.getBrowsers() || [
        'Firefox',
        'Chrome',
        'IE9 - Win7',
        'IE10 - Win7',
        'IE11 - Win7'
    ];
    ciConfig.singleRun = true;
    ciConfig.reporters.push('junit');
    ciConfig.junitReporter = {
        outputFile: 'target/test-reports/test-results.xml'
    };
    ciConfig.coverageReporter.type = 'cobertura';
    ciConfig.logLevel = config.LOG_INFO;
    config.set(ciConfig);
};