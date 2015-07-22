requirejs.config({
    paths: {
        one: '../scripts/one',
        two: '../scripts/two',
        three: '../scripts/three'
    }
});

require(["one", "two", "three"], function () {
    console.log('Success');
});