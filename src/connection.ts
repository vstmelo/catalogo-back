import { DataSource } from "typeorm";
import "reflect-metadata";
import "dotenv/config";
import "mysql2";
   
export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_LOCAL_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [__dirname + "/infra/typeorm/model/*.{js,ts}"],  
    migrations:[__dirname + "/infra/typeorm/migrations/*.{js,ts}"]
}); 
AppDataSource.initialize()
    .then(() => { 
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    }) 