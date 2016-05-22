module.exports = function (config) {
	config.set({

		basePath: '../',

		frameworks: ['jasmine'],
		files: [
			'node_modules/jquery/dist/jquery.js',
			'node_modules/angular/angular.js',
			'node_modules/angular-mocks/angular-mocks.js',
			'node_modules/angular-route/angular-route.js',
			'node_modules/angular-resource/angular-resource.js',
			'node_modules/angular-animate/angular-animate.js',
			'app/js/**/*.js',
			'test/unit-ts/**/*.js'
		],

		autoWatch: true,
		browsers: ['PhantomJS'],
		plugins: [
			'karma-jasmine',
			'karma-phantomjs-launcher',
			'karma-typescript-preprocessor'
		],
		typescriptPreprocessor: {
			options: {
				target: 'es5',
				module: 'commonjs'
			},
			transformPath: function (path) {
				return path.replace(/\.ts$/, '.js');
			}
		},
		preprocessors: {
			'**/*.ts': ['typescript']
		}
	});
};
