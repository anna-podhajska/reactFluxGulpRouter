"use strict";
//using gulp with tasks for buoilds, file watches and auto reloads
//downgraded vinyl-source-stream to 2.0.0 has fixed the issue with Error: Received a non-Vinyl object in `dest()`

var gulp = require("gulp");
var connect = require("gulp-connect"); //Runs a local dev server
var open = require("gulp-open"); //Open a URL in a web browser
var source = require("vinyl-source-stream"); //Use conventionsl text streams with gulp
var browserify = require("browserify"); //bundle js
var reactify = require("reactify"); //Transforms React JSX to JS
var concat = require("gulp-concat"); //Concatenates files
var lint = require("gulp-eslint"); //Lint JS files incl JSX

//a: variables configuration

var config = {
    port: 9005,
    devBaseUrl: "http://localhost",
    paths: {
        html: "./src/*.html",
        js: "./src/**/*.js*",
        images: "./src/images/*",
        css : [
            "node_modules/bootstrap/dist/css/bootstrap.min.css",
            "node_modules/bootstrap/dist/css/bootstrap-grid.min.css"
        ],
        dist: "./dist",
        mainJs: "./src/main.js"
    }
};

//Start a local development server
gulp.task("connect", function(done) {
    connect.server({
        root: ["dist"],
        port: config.port,
        base: config.devBaseUrl,
        livereload: true
    });
    done();
});

//a: another task that will open another file - index
//when you run task open first run task connect
gulp.task("open", gulp.series("connect", function(done) {
    gulp.src("dist/index.html")
        .pipe(open({ uri: config.devBaseUrl + ":" + config.port + "/"}));

    done();     
}));

//a: modified to use a callback function passed by gulp
gulp.task("html", function(done) {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
    done();
});


//js task
gulp.task("js", function(done){
    browserify(config.paths.mainJs)
        .transform(reactify)
        .bundle()
        .on("error", console.log.bind(console))
        .pipe(source("bundle.js"))
        .pipe(gulp.dest(config.paths.dist + "/scripts"))
        .pipe(connect.reload());

    done();
});

gulp.task("css", function(done){
    gulp.src(config.paths.css)
        .pipe(concat("bundle.css"))
        .pipe(gulp.dest(config.paths.dist + "/css"));

    done();
});

//setup lint that throws JS JSX errors in the console based on config file
gulp.task("lint", function(){
    return gulp.src(config.paths.js)
        .pipe(lint({config: "eslint.config.json"}))
        .pipe(lint.format());
});

//task to migrate images over into dist
gulp.task("images", function(done){
    gulp.src(config.paths.images)
        .pipe(gulp.dest(config.paths.dist + "/images"))
        .pipe(connect.reload());

    //publish favicon
    gulp.src("./src/favicon.ico")
        .pipe(gulp.dest(config.paths.dist));

    done();

});

gulp.task("watch", function(done){
    gulp.watch(config.paths.html, gulp.series("html"));
    gulp.watch(config.paths.js, gulp.series("js", "lint"));

    done();
});

//a: default task that fiest runs html task and then open task:
gulp.task("default", gulp.series("html", "js", "css", "images", "lint", "open", "watch"));

