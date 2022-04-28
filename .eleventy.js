// SASS watcher
// https://jkc.codes/blog/using-sass-with-eleventy/
module.exports = function (eleventyConfig) {
    eleventyConfig.setBrowserSyncConfig({
        files: './_site/css/**/*.css'
    });
    return {
        dir: {
            input: "src",
            ouput: "_site"
        },
        templateFormats: ['md', 'njk', 'html'],
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dataTemplateEngine: 'njk'
    };
};