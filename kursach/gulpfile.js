const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('dev', function(){
  browserSync.init({
    server: "public",
    port: 8082
  });
  browserSync.watch('application/**/*.*').on('change', browserSync.reload );
});
