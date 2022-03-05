import "reflect-metadata";
import express, { Request, Response } from "express";
import ConnectDB from "./db/database";
import { getConnection } from "typeorm";
import userRoute from "./routes/user";

const app = express();

const db = ConnectDB();
const getDB = getConnection();

const PORT = 4040;

app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/user", userRoute);

app.get("/", (req: Request, res: Response) => res.send("hello world"));

db.finally(() => getDB.close);
app.listen(PORT, () => console.log("server running on port " + PORT));
