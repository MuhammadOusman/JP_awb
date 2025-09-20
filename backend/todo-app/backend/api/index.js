const serverless = require('serverless-http');
const serverModule = require('../server');

// `server.js` may export either the express app directly or an object { app, connectToMongo }
const app = serverModule.app || serverModule;
const connectToMongo = serverModule.connectToMongo || (async () => {});

const serverlessHandler = serverless(app);

module.exports = async (req, res) => {
	try {
		// ensure DB connection is attempted before handling request (helps cold starts)
		await connectToMongo();
	} catch (err) {
		console.error('Error connecting to Mongo in serverless wrapper:', err && (err.stack || err.message || err));
		// proceed anyway; the route handlers will handle missing DB gracefully where possible
	}

	try {
		return serverlessHandler(req, res);
	} catch (err) {
		console.error('Unhandled error in serverless handler:', err && (err.stack || err.message || err));
		throw err;
	}
};