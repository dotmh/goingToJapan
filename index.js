var Metalsmith = require('metalsmith');
var Layouts = require('metalsmith-layouts');
var Sass = require('metalsmith-sass');
var Copy = require("metalsmith-copy");
var Watch = require("metalsmith-watch");
var DiscoverPartials = require('metalsmith-discover-partials');

var SRC = "./src";
var VIEWS = SRC+'/_views';
var OUT = "build";

Metalsmith(__dirname)
    .source(SRC)
    .destination(OUT)
    .ignore(['_scss', '_views'])
    .clean(true)
    .use(DiscoverPartials({
        directory : './partials',
        pattern: '/\.hbs$/'
    }))
    .use(Layouts({
        pattern: "**/*.html",
        directory : VIEWS+'/layouts'
    }))
    .use(Sass({
        outputDir: 'assets/css'
    }))
    .use(Copy({
        pattern: 'assets/*',
        directory: 'assets'
    })).
    use(Watch({
        paths : {"${source}/**/*": true}
    }))
    .build(function(err, files){
        if(err) {
            throw err;
        }
    })