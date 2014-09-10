module.exports = function (grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        jscs: {
            options: {
                config: '.jscsrc'
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

    grunt.registerTask('test', ['jscs', 'mochacli:all']);

    grunt.registerTask('default', ['test']);
};