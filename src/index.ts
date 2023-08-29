import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import AppConfig from "./config/app_config.js";

// https://pvictorsys.medium.com/dependency-injection-in-typescript-with-inversify-e956fa28b668

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const app = new AppConfig().express;

app.listen(process.env.port, () => {
  console.log(`Server is running on port ${process.env.port}`);
});
