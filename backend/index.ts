import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import axios from "axios";
import admin from "firebase-admin";
import { authentication as auth } from "./src/authentication";

const PORT = process.env.PORT || 3000;

const app = express();

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: "https://sproj-8083a.firebaseio.com",
});

const corsOptions = {
	origin: process.env.WHITE_LISTED_ORIGIN,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
	res.send("Hello world!");
});

const sendValueAfterTime = (res: Response) => {
	res.write("Hello world!");

	setTimeout(() => {
		sendValueAfterTime(res);
	}, 5000);
};

app.get("/getTemperature", (req: Request, res: Response) => {
	res.setHeader("Content-Type", "text/event-stream");
	sendValueAfterTime(res);
});

app.listen(PORT, () => {
	console.log(`Server has been started at http://localhost:${PORT}`);
});
