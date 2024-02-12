import { Elysia } from "elysia";
import { logger } from "@bogeychan/elysia-logger";

const app = new Elysia()
	.use(
		logger({
			autoLogging: true,
		}),
	)
	.get("/", () => "Hello Elysia")
	.listen(3000);

console.log(
	`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
