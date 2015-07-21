require.config({
    baseUrl: "scripts",
    paths: {
        jQuery: "lib/jquery-1.11.3",
        util: "lib/util"
    }
});


require(["jQuery"], function (jQuery) {
    console.log("Succesfull load")
});
require(["util"], function (jQuery) {
    console.log("Succesfull load")
});
