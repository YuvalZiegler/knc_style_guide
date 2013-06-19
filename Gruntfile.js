/*global module:false*/
module.exports = function(grunt) {
  
  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    compass: { 
      dist:   { },
      dev:    { }
    },
    haml: { 
      dev: { 
        files: { 'index.html': 'index.haml' }, 
        options: {                       
          style: 'expanded'
        }
      }
    },  
    watch: {
      compass: {
        files: 'sass/*',
        tasks: ['compass:dev']
        
      },

      haml: {
        files: 'index.haml',
        tasks: ['haml:dev']
        
      },
      options: { livereload: 1337}
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-haml');
  // Default task.
  grunt.registerTask('build', ['compass:dist']);
  grunt.registerTask('default', ['watch']);

};




