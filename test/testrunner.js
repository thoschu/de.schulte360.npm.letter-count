const Jasmine = require('jasmine');
var jasmine = new Jasmine();

jasmine.loadConfigFile('spec/support/jasmine.json');

// jasmine.loadConfig({
//     spec_dir: 'spec',
//     spec_files: [
//         'appSpec.js',
//         'requests/**/*[sS]pec.js',
//         'utils/**/*[sS]pec.js'
//     ],
//     helpers: [
//         'helpers/**/*.js'
//     ]
// });

jasmine.configureDefaultReporter({
    // The `timer` passed to the reporter will determine the mechanism for seeing how long the suite takes to run.
    timer: new jasmine.jasmine.Timer(),
    // The `print` function passed the reporter will be called to print its results.
    print: function(arguments) {
        process.stdout.write(arguments);
    },
    // `showColors` determines whether or not the reporter should use ANSI color codes.
    showColors: true
});


jasmine.onComplete(function (passed) {
    if (passed) {
        console.log('All specs have passed');
    } else {
        console.log('At least one spec has failed');
    }
});

jasmine.execute();

// var Jasmine = require('jasmine');
// var jasmine = new Jasmine();
//
// jasmine.loadConfigFile('spec/support/jasmine.json');
// jasmine.configureDefaultReporter({
//     showColors: false
// });
// jasmine.execute();