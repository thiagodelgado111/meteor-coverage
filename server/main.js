console.log(Object.keys(Package))

if (IS_COVERAGE_ACTIVE) {
    Instrumenter.hookLoader();
}
