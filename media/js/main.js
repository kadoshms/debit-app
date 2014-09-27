// There usage will become more apparent further along in the tutorial.
require.config({
  paths: {
	jquery:  'libs/jquery.min',
    underscore: 'libs/underscore',
    parse: 'libs/parse.min',
  },
  shim: {
	     parse: {
	        exports: 'Parse',
	        deps: ["jquery"]
	     }
	}

});

require([

  // Load our app module and pass it to our definition function
  'app',
], function(App){
  // The "app" dependency is passed in as "App"
  App.initialize();
});