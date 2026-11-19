import Redis from "ioredis";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "..", ".env") });

const redisUrl = process.env.UPSTASH_REDIS_URL?.trim().replace(/^"|"$/g, "").replace(/^redis:\/\//, "rediss://");

if (!redisUrl) {
	throw new Error("UPSTASH_REDIS_URL is not set");
}

export const redis = new Redis(redisUrl, {
	maxRetriesPerRequest: 10,
	connectTimeout: 10000,
});

redis.on("error", (error) => {
	console.error("Redis connection error:", error.message);
});
