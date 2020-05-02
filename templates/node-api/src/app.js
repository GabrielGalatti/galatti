import {config} from "dotenv";
import express from "express";
import logger from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

config();
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

export const start = () => {
    try {
      app.listen(3000, () => {
        console.log(`API na url ${process.env.API_URL}`);
      });
    } catch (e) {
      console.error(e);
    }
  };