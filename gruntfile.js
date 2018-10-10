'use strict';

module.exports = function(grunt) {
	// Add configuration, tasks and plugins here
	grunt.initConfig({

		// imports the config data from the package.json
		pkg: grunt.file.readJSON('package.json'),

		sass: {
			dist: {
				files: {
					'css/style.css': 'sass/style.scss'
				}
			}
		},
		watch: {
			scripts: {
				files: ['sass/**'],
				tasks: ['sass','cssnano']
			}
		},
		cssnano: {
			dist: {
				files: {
					'css/style.min.css': 'css/style.css'
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-cssnano');
	grunt.registerTask('default', ['sass','cssnano'])
};