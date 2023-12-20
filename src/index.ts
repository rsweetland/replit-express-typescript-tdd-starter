import express, { Request, Response } from "express";
import { exampleLibFunction } from "./lib.js"; // note ".js" extension required here

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("ok");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
