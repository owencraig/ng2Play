var gulp = require('gulp'),
  browserSync = require('browser-sync').create();


gulp.task('connect', function(){
  browserSync.init({
        server: {
            baseDir: "./"
        }
    });

  gulp.watch(['index.html', 'app/**/*.js']).on('change', browserSync.reload);
});

// Start the tasks
gulp.task('default', ['connect']);