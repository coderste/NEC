var gulp = require( 'gulp' );
// Require the gulp-autoprefixer plugin
var autoprefixer = require( 'gulp-autoprefixer' );
// Require the gulp-livereload
var livereload = require( 'gulp-livereload' );
// Requires the gulp-sass plugin
var sass = require( 'gulp-sass' );
// Require the gulp-minify-css plugin
var minifycss = require('gulp-minify-css');
// Require the gulp-uglify plugin
var uglify = require('gulp-uglify');
var pump = require('pump');

/**
 * Task that compresses our .scss to .css
 */
gulp.task( 'scss', function( cb ) {
    pump( [
        gulp.src( 'assets/scss/*.scss' ),
        sass(),
        autoprefixer( 'last 10 version' ),
        minifycss(),
        gulp.dest( 'assets/css' )
    ],
    cb
    );
} );

/**
 * Task that compresses our .js to .min.js
 */
gulp.task( 'scripts', function( cb ) {
    pump( [
        gulp.src( 'assets/js/core/*.js' ),
        uglify(),
        gulp.dest( 'assets/js' )
    ],
    cb
    );
} )

/**
 * Watch for changes on all
 * our files
 */
gulp.task( 'watch', function() {
    gulp.watch( 'assets/scss/*.scss', ['scss'] ); // Watch files for changes
    gulp.watch( 'assets/js/core/*.js', ['scripts'] ); // Watch files for changes
    livereload.listen(); // Listen for the reload
    gulp.watch( ['assets/css/*.css'] ).on( 'change', livereload.changed ); // Live reload
    gulp.watch( ['assets/js/*.js'] ).on( 'change', livereload.changed ); // Live reload
} )

// Default Tasks
gulp.task( 'default', ['scss', 'scripts', 'watch'] );
