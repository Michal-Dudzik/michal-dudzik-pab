/**
 * Required External Modules
 */
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { execArgv } from "process";
import {itemsRouter} from "./items/items.router";
import {errorHandler} from "./middleware/error.middleware";
import {notFoundHandler} from "./middleware/not-found.middleware";
import strictTransportSecurity from "helmet/dist/types/middlewares/strict-transport-security";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT)
{
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/notes", itemsRouter);
// app.use("/tags", tagsRouter);

app.use(errorHandler);
app.use(notFoundHandler);

/**
 * Server Activation
 */

app.listen(PORT, ()=>
{
    console.log(`listening on port ${PORT}`);
});





