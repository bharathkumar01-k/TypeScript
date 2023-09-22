import express from "express";

const app = express();

import todoRoutes from "./Router/todo";

app.use("/", todoRoutes);

app.listen(3019, () => console.log("The app is listening on the port 3019"));
