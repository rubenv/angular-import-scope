exports.config = {
    specs: [
        'test/*.js'
    ],

    multiCapabilities: [
        {
            'browserName': 'chrome',
            'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER || 'test',
            'build': process.env.TRAVIS_BUILD_NUMBER,
            'name': 'angular-import-scope'
        },
        {
            'browserName': 'firefox',
            'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER || 'test',
            'build': process.env.TRAVIS_BUILD_NUMBER,
            'name': 'angular-import-scope'
        },
    ]
};
