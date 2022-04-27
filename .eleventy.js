// https://jkc.codes/blog/using-sass-with-eleventy/
module.exports = function (eleventyConfig) {
    eleventyConfig.setBrowserSyncConfig({
        files: './_site/css/**/*.css'
    });
};