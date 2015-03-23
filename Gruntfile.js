module.exports = function(grunt) {

	grunt.initConfig({
		jshint: {
			dist: ['js/jquery.messagebox.js']
		},
		watch: {
			js: {
				files: ['js/jquery.messagebox.js'],
				tasks: ['jshint', 'uglify'],
				options: {
					spawn: false,
				}
			}
		},
		uglify: {
			js: {
				files: {
					'js/jquery.messagebox.min.js': ['js/jquery.messagebox.js']
				}
			}
		},
		cssmin: {
        	site: {
            	src: ['css/messageBox.css'],
            	dest: 'css/messageBox.min.css'
        	}
    	}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('default', ['jshint','uglify','cssmin','watch']);
};