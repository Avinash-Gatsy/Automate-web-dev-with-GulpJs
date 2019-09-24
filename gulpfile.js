var gulp = require('gulp');
var uglify = require('gulp-uglify');
var livereload = require('gulp-livereload');

//File Paths
var SCRIPTS_PATH = 'public/scripts/**/*.js';

//styles
//minifying css, concatenating multiple files into one, auto prefixing css
gulp.task('styles', function(){
    console.log('starting styles task');
});

//scripts
//minifying, concatenating js files, changing js version - similar to Babel converting ES6 -> ES5
gulp.task('scripts', ()=>{
    console.log('starting scripts task');
    
    return gulp.src(SCRIPTS_PATH)
    .pipe(uglify())
    .pipe(gulp.dest('public/dist'))
    .pipe(livereload());
});

//images
//compressing images without reducing quality of image
gulp.task('images', ()=>{
    console.log('starting images task');
});

//default task
gulp.task('default', ()=>{
    console.log('starting default task');
});

//watch task
//pass task to be executed as an arg to gulp.series()
gulp.task('watch', ()=>{
    require('./server'); //run the server
    livereload.listen(); //listening to livereload server
    gulp.watch(SCRIPTS_PATH, gulp.series('scripts'));
});