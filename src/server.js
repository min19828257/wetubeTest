
import express from "express";
import morgan from "morgan";
import session from "express-session";
import MongoStore from "connect-mongo"
import globalRouter from "./router/globalRouter";
import videoRouter from "./router/videoRouter";
import userRouter from "./router/userRouter";
import { localsMiddleware } from "./middlewares";

const app = express();
const logger = morgan("dev")

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.set("view engine", "pug")
app.set("views", process.cwd() + "/src/views");
app.use(logger)

app.use(
    session({
       secret: process.env.COOKIE_SECRET,
       resave: false,
       saveUninitialized: false,
       cookie: {
        maxAge: 20000,
        },
       store: MongoStore.create({ mongoUrl: process.env.DB_URL}),
    })
);

// app.use((req, res, next) => {
//     res.locals.sexy = "boom"
//     req.sessionStore.all((error, sessions) => {
//         console.log(sessions);
//         next();
//     });
// });

app.use(localsMiddleware)
app.use(express.urlencoded({ extended: true}));
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);
app.use(morgan)

export default app

