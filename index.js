var gulp          = require('gulp');
var templateCache = require('gulp-angular-templatecache');

var elixir        = require('laravel-elixir');

elixir.extend('ngTemplates', function(source, output, options) {

  var config = this;

  source = source || config.assetsDir + 'templates/**/*.html';
  output = output || config.assetsDir + 'js';

  new elixir.Task('ng-templates', function() {
    gulp.src(source)
        .pipe(templateCache(options))
        .pipe(gulp.dest(output));
  })
  .watch(source);

});