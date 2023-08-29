import express from "express";

export default class AppConfig {
  public express = express();

  constructor() {
    this.express = express();
  }
}
