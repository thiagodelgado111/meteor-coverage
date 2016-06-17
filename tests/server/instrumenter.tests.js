
Tinytest.add(
    'meteor-coverage - testing component Instrumenter checkIfAutorised',
    function (test) {
        var Instrumenter = Package['lmieulet:meteor-coverage'].MeteorCoverage.Instrumenter,
            Conf = Package['lmieulet:meteor-coverage'].MeteorCoverage.Conf;
            console.log(Conf)
        // Excluded
        test.isFalse(Instrumenter.checkIfAutorised(Conf, '/home/travis/build/serut/meteor-coverage/packages/lmieulet:meteor-coverage/tests/methods.js'));

        // Client coverage
        test.isTrue(Instrumenter.checkIfAutorised(Conf, '/home/travis/build/serut/meteor-coverage/packages/meteor-coverage/client/methods.js'));

        // Server coverage
        test.isTrue(Instrumenter.checkIfAutorised(Conf, '/home/travis/build/serut/meteor-coverage/packages/meteor-coverage/client/methods.js'));

    }
);
