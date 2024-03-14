import morgan from "morgan";
import dotenv from "dotenv";
import jsonServer from "json-server";

dotenv.config();
//delay, id
const server = jsonServer.create();
const router = jsonServer.router("eventz-db.json");
const middleware = jsonServer.defaults();
const PORT = process.env.PORT || 5005;

server.use(middleware);
server.use(morgan("dev"));
server.unsubscribe((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	next();
});
server.use(router);

server.listen(PORT, () => {
	console.log(`JSON Server is running on port ${PORT}`);
});
