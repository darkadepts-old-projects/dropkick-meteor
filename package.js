Package.describe({
	summary: "Use DropKick.js",
	version: "0.1.0"
});

Package.on_use(function (api) {
	//api.add_files(['files'], ['client']);
	//api.use(['meteor','packages'], ['client']);
	//api.export('VarName');

	api.add_files('lib/dropkick/dropkick.js', 'client');
	api.add_files('lib/dropkick/css/dropkick.css', 'client');

});

/*
Npm.depends({
	moment: "2.8.3"
});
*/
