function testBrowser(name) {
    return {
        'browserName': name,
        'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER || 'test',
        'build': process.env.TRAVIS_BUILD_NUMBER,
        'name': 'angular-import-scope'
    }
}

exports.config = {
    specs: [
        'test/*.js'
    ],

    multiCapabilities: [
        testBrowser('chrome'),
        testBrowser('firefox'),
        testBrowser('safari'),
        testBrowser('internet explorer'),
    ]
};
