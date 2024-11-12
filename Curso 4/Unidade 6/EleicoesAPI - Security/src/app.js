import express from "express";
import router from "./router/index.js";
import LogMiddleware from "./middlewares/LogMiddleware.js";
import ErrorHandler from "./handlers/ErrorHandler.js";
import helmet from "helmet";
import cors from "cors";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use(LogMiddleware);
app.use("/api", router);
app.use(ErrorHandler);

app.listen(3000, () => {
    console.log("Server started...");
});

