var gulp          = require('gulp');
var templateCache = require('gulp-angular-templatecache');

var Elixir = require('laravel-elixir');

var Task = Elixir.Task;

Elixir.extend('ngTemplates', function(source, output, options) {

  var config = Elixir.config;

  source = source || config.assetsPath + '/templates/**/*.html';
  output = output || config.assetsPath + '/js';

  new Task('ng-templates', function() {
    gulp.src(source)
        .pipe(templateCache(options))
        .pipe(gulp.dest(output));
  })
  .watch(source);

});