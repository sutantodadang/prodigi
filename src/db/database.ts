import { createConnection, Connection } from "typeorm";
import { Movie } from "../entities/Movie";
import { User } from "../entities/User";

const ConnectDb = async () => {
  try {
    const db: Connection = await createConnection({
      type: "mysql",
      host: "databasemysql",
      username: "prodigi",
      password: "prodigi",
      port: 3306,
      database: "prodigi",
      entities: [User, Movie],
      synchronize: true,
    });
    console.log("Connect To DB");

    return db;
  } catch (err) {
    console.error(err);
    throw new Error("Failed connect to DB");
  }
};

export default ConnectDb;
