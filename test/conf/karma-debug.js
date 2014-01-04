var configHelper = require('./karma-config-helper.js'),
    debugConfig = require('./karma-common.js');

module.exports = function (config) {
    debugConfig.browsers = configHelper.getBrowsers() || [
        'Firefox'
    ];
    debugConfig.logLevel = config.LOG_DEBUG;
    config.set(debugConfig);
};