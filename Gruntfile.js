/*!
 * Justyn Clark Grunt Build Gruntfile
 * http://justynclark.com
 * @author Justyn Clark
 */

'use strict';

/**
* Grunt module
*/
module.exports = function (grunt) {

 /**
  * Dynamically load npm tasks
  */
 require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

 /**
  * Justyn Clark Grunt config
  */
 grunt.initConfig({

   pkg: grunt.file.readJSON('package.json'),


    /**
     * Set project info
     */
    project: {
      src: 'src',
      app: 'app',
      assets: '<%= project.app %>/assets',
      css: [
        '<%= project.src %>/scss/*.scss',
        '<%= project.src %>/scss/**/*.scss',
      ],
      js: [
        // '<%= project.src %>/bower_components/jquery/dist/jquery.js',
        // '<%= project.src %>/bower_components/react/react.js',
        // '<%= project.src %>/bower_components/react-dom/dist/react-dom.js',
        // '<%= project.src %>/bower_components/angular/angular.js',
        // '<%= project.src %>/bower_components/angular/angular-route.js',
        // '<%= project.src %>/bower_components/velocity/velocity.js',
        // '<%= project.src %>/bower_components/what-input/what-input.js',
        '<%= project.src %>/js/*.js',
        '<%= project.src %>/js/**/*.js'
      ]
    },

    /**
     * Project banner
     * Dynamically appended to CSS/JS files
     * Inherits text from package.json
     */
    tag: {
      banner: '/*!\n' +
              ' * <%= pkg.name %>\n' +
              ' * <%= pkg.title %>\n' +
              ' * <%= pkg.url %>\n' +
              ' * @author <%= pkg.author %>\n' +
              ' * @version <%= pkg.version %>\n' +
              ' * Copyright <%= pkg.copyright %>. <%= pkg.license %> licensed.\n' +
              ' */\n'
    },

    /**
     * Clean files and folders
     * https://github.com/gruntjs/grunt-contrib-clean
     * Remove generated files for clean deploy
     */
    clean: {
      dist: [
        'css/style.unprefixed.css',
        'css/style.prefixed.css'
      ]
    },

    /**
     * JSHint
     * https://github.com/gruntjs/grunt-contrib-jshint
     * Manage the options inside .jshintrc file
     */
    jshint: {
      files: [
        'src/js/*.js',
        'Gruntfile.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    /**
     * Concatenate JavaScript files
     * https://github.com/gruntjs/grunt-contrib-concat
     * Imports all .js files and appends project banner
     */
    concat: {
      dev: {
        files: {
          'js/app.js': '<%= project.js %>'
        }
      },
      options: {
        stripBanners: true,
        nonull: true,
        banner: '<%= tag.banner %>'
      }
    },

    /**
     * Uglify (minify) JavaScript files
     * https://github.com/gruntjs/grunt-contrib-uglify
     * Compresses and minifies all JavaScript files into one
     */
    uglify: {
      options: {
        banner: '<%= tag.banner %>'
      },
      dist: {
        files: {
          'js/scripts.min.js': '<%= project.js %>'
        }
      }
    },

    /**
     * Compile Sass/SCSS files
     * https://github.com/gruntjs/grunt-contrib-sass
     * Compiles all Sass/SCSS files and appends project banner
     */

    sass: {
      dev: {
        options: {
          style: 'expanded',
          banner: '<%= tag.banner %>'
        },
        files: {
          'css/style.css': '<%= project.css %>'
        }
      }
    },

    /**
     * CSSMin
     * CSS minification
     * https://github.com/gruntjs/grunt-contrib-cssmin
     */
    cssmin: {
      dev: {
        options: {
          banner: '<%= tag.banner %>'
        },
        files: {
          'css/style.min.css': '<%= project.src %>/components/normalize-css/normalize.css'
        }
      },
      dist: {
        options: {
          banner: '<%= tag.banner %>'
        },
        files: {
          'css/style.min.css': '<%= project.src %>/components/normalize-css/normalize.css'
        }
      }
    },

    /**
     * Build bower components
     * https://github.com/yatskevich/grunt-bower-task
     */
    bower: {
      dev: {
        dest: 'bower_components/'
      },
      dist: {
        dest: 'bower_components/'
      }
    },

    /**
     * Opens the web server in the browser
     * https://github.com/jsoverson/grunt-open
     */
    open: {
      server: {
        path: 'http://justynclark80'
      }
    },

    /**
     * Runs tasks against changed watched files
     * https://github.com/gruntjs/grunt-contrib-watch
     * Watching development files and run concat/compile tasks
     * Livereload the browser once complete
     */
    watch: {
      concat: {
        files: '<%= project.src %>/js/{,*/}*.js',
        tasks: ['concat:dev', 'jshint']
      },
      sass: {
        files: '<%= project.src %>/scss/{,*/}*.{scss,sass}',
        tasks: ['sass:dev', 'cssmin:dev']
      },
      livereload: {
        options: {
          livereload: LIVERELOAD_PORT
        },
        files: [
          '<%= project.app %>/{,*/}*.html',
          'css/*.css',
          'js/{,*/}*.js',
          '{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    }
  });

  /**
   * Default task
   * Run `grunt` on the command line
   */
  grunt.registerTask('default', [
    'sass:dev',
    'bower:dev',
    'cssmin:dev',
    'jshint',
    'concat:dev',
    'connect:livereload',
    'open',
    'watch'
  ]);

  /**
   * Build task
   * Run `grunt build` on the command line
   * Then compress all JS/CSS files
   */
  grunt.registerTask('build', [
    'sass:dist',
    'bower:dist',
    'cssmin:dist',
    'clean:dist',
    'jshint',
    'uglify'
  ]);

};
