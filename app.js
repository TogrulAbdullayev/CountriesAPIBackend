import { readFile } from "fs/promises";

import express from "express";

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://countriesapi-b02e8.web.app/"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  next();
});

app.get("/", async (req, res, next) => {
  const data = await readFile("./data/data.json");
  res.status(200).json({
    countries: JSON.parse(data),
    message: "Fetched data successfully!",
  });
});

app.listen(3000);
