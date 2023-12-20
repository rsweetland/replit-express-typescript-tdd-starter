import express from "express";
import { exampleLibFunction } from "./lib.js";
const app = express();
const port = 3000;
app.get("/", (req, res) => {
    res.send("ok");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
//# sourceMappingURL=index.js.map