import express from "express";
import router from "./router/index.js";
import LogMiddleware from "./middlewares/LogMiddleware.js";

const app = express();

app.use(express.json());
app.use(LogMiddleware);
app.use("/api", router);

app.listen(3000, () => {
    console.log("Server started...");
});

