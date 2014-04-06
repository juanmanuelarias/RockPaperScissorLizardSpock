module.exports = function (grunt) {

	grunt.initConfig({
		typescript: {
	      base: {
	        src: ['./**/*.ts'],
	        dest: './',
	        options: {
	          module: 'commonjs', //or amd
	          target: 'es5', //or es3
	          sourceMap: false,
	          declaration: false
	        }
	      }
	    },
		jasmine_node: {
			options: {
				forceExit: true,
				match: '.',
				matchall: false,
				extensions: 'js',
				specNameMatcher: 'spec',
				jUnit: {
					report: true,
					savePath : "./build/reports/jasmine/",
					useDotNotation: true,
					consolidate: true
				}
			},
			all: ['spec/']
		}
	});

	grunt.loadNpmTasks('grunt-jasmine-node');
	grunt.loadNpmTasks('grunt-typescript');

	grunt.registerTask('test', ['jasmine_node']);
	grunt.registerTask('ts', ['typescript']);
	grunt.registerTask('default', ['typescript', 'jasmine_node']);
}