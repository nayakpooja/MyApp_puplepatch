/**
 * Created by pooja on 27/7/17.
 */
"use strict";


var gulp = require('gulp') ;
var connect = require('gulp-connect');
var open = require('gulp-open');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');

let config = {
    devUrl: 'http://localhost' ,
    port:9002,
    paths:{
        dist: './dist',
        html:'./src/*.html',
        js:'./src/**/*.js',
        css:['node_modules/bootstrap/dist/css/bootstrap.css',
            'node_modules/bootstrap/dist/css/bootstrap-theme.css',
            './src//**/*css'],
        images: './src/images/**/*.*',
        mainJs:'./src/main.js'
    }
}

gulp.task('connect',function(){
    connect.server({
          root:['dist'],
          base:config.devUrl,
          port:config.port,
          livereload:true
        });
});

gulp.task('open',['connect'],function () {
    gulp.src('./dist/index.html')
        .pipe(open({uri:config.devUrl + ':'+ config.port+'/'}));
});

gulp.task('js',function () {
   browserify(config.paths.mainJs,{debug : false})
       .transform(reactify)
           .bundle()
           .on('error', console.error.bind(console))
           .pipe(source('bundle.js'))
           .pipe(gulp.dest(config.paths.dist + '/scripts'))
       .pipe(connect.reload());
});

gulp.task('css', function () {
    gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist + '/css'))
        .pipe(connect.reload());
});

gulp.task('html',function(){
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload())
});

gulp.task('images', function () {
    gulp.src(config.paths.images)
        .pipe(gulp.dest(config.paths.dist + '/images'))
        .pipe(connect.reload());
});

gulp.task('watch',function () {
   gulp.watch(config.paths.html,['html'])
   gulp.watch(config.paths.js,['js'])
   gulp.watch(config.paths.css,['css']),
       gulp.watch(config.paths.images, ['images']);
})

gulp.task('default', ['html', 'js', 'css', 'images', 'open', 'watch']);


