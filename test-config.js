function testBrowser(name, version) {
    var config {
        'browserName': name,
        'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER || 'test',
        'build': process.env.TRAVIS_BUILD_NUMBER,
        'name': 'angular-import-scope'
    }

    if (version) {
        config.version = version;
    }

    return config;
}

exports.config = {
    specs: [
        'test/*.js'
    ],

    multiCapabilities: [
        testBrowser('chrome'),
        testBrowser('firefox'),
        testBrowser('safari', 5),
        testBrowser('safari', 6),
        testBrowser('safari', 7),
        testBrowser('internet explorer', 9),
        testBrowser('internet explorer', 10),
        testBrowser('internet explorer', 11),
        testBrowser('iphone', '6.1'),
        testBrowser('iphone', '7.1'),
        testBrowser('android', '4.0'),
        testBrowser('android', '4.3'),
    ]
};
