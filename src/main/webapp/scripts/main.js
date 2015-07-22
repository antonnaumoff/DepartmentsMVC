require.config({
    baseUrl: "scripts",
    paths: {

        jQuery: 'lib/jquery-1.11.3',
        util: 'lib/util'


    }
});



require(["jQuery"], function (jQuery) {
    console.log("Succesfull load jQuery")
});
require(["util"], function (util) {
    console.log("Succesfull load util")
});
