/**
 * Created by jmccommas on 4/7/15.
 */
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            dist: {
                options: {
                    banner: '/* This is my minified app, built by jmccommas on \n <%= grunt.template.today() %>*/\n\n'
                },
                src: ['<banner>','js/app.js'],
                dest: 'src/app.min.js'
            }
        },
        cssmin: {
            localCss: {
                src: 'css/main.css',
                dest: 'src/main.min.css'
            }
        },
        watch: {
            html: {
                files: [
                    'index.html'
                ],
               // tasks: ['html2js'],
                options: {
                    livereload: true
                }
            },
            css : {
                files: 'css/*.css',
                tasks: ['cssmin'],
                options: {
                    livereload: true
                }
            },
            js: {
                files: [
                    'js/*.js'
                    // 'css/*.css'
                ],
                task: ['ugilfy:dist'],
                options: {
                    livereload: true
                }
            }
        }

    });
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-banner');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-livereload');


    // Default task(s).
    grunt.registerTask('default', ['uglify','cssmin']);
};

