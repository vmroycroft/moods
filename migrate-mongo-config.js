const config = {
	mongodb: {
		url: process.env.MONGODB_URI,
		options: {
			useNewUrlParser: true,
			useUnifiedTopology: true
		}
	},
	migrationsDir: 'migrations',
	changelogCollectionName: 'changelog',
	migrationFileExtension: '.js',
	useFileHash: false
};

module.exports = config;
