module.exports = function (grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
    	jshint: {
    		options: {
                // node environment
                node: true,
                // browser environment
                browser: false,
                // allow dangling underscores in var names
                nomen: true
            },
            files: {
                src: [
                    'lib/*.js',
                    'test/*.js'
                ]
            }
    	},
    	mochacli: {
            options: {
                ui: 'bdd',
                reporter: 'spec',
                timeout: '15000'
            },

            all: {
                src: ['test/**/*_spec.js']
            }
        }
    });

    grunt.registerTask('test', ['jshint', 'mochacli:all']);

    grunt.registerTask('default', ['test']);
};