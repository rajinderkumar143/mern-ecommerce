import app from "../backend/server.js";
import { connectDB } from "../backend/lib/db.js";
import { seedProducts } from "../backend/lib/seed.js";

let databaseReady;

const ensureDatabase = async () => {
	if (!databaseReady) {
		databaseReady = connectDB().then(() => seedProducts());
	}

	await databaseReady;
};

export default async function handler(req, res) {
	await ensureDatabase();
	return app(req, res);
}
