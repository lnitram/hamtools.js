module.exports = function(grunt) {
  grunt.initConfig({
    pkg : grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: "/* hamtools.js */\n"
      },
      build: {
        src: 'hamtools.js',
        dest: 'build/hamtools.min.js'
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default',['uglify']);
}
