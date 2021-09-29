import express from "express";
import morgan from "morgan";
import globalRouter from "./src/router/globalRouter";
import videoRouter from "./src/router/videoRouter";
import userRouter from "./src/router/userRouter";

const PORT = 4000;
const app = express();

const logger = morgan("dev")

app.use(logger)
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);
app.use(morgan)

const handleListening = () =>
    console.log(`server listenting on port http://localhost:${PORT}`);

app.listen(PORT,  handleListening);
