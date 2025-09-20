const serverless = require('serverless-http');
const serverModule = require('../server');

// `server.js` may export either the express app directly or an object { app, connectToMongo }
const app = serverModule.app || serverModule;
const connectToMongo = serverModule.connectToMongo || (async () => {});

const serverlessHandler = serverless(app);

// small masked debug helper
function maskedEnv(key) {
	const v = process.env[key];
	if (!v) return '<<missing>>';
	const show = 6;
	return v.length > show ? `${v.slice(0,3)}...${v.slice(-3)}` : '<<set>>';
}

module.exports = async (req, res) => {
	console.log('[serverless] handler invoked, appType=', typeof app, 'MONGO_URI=', maskedEnv('MONGO_URI'));
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