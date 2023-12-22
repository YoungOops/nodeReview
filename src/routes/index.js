import express from "express";

import authRouter from "./auth.router.js";
import usersRouter from "./users.router.js";
import questionsRouter from "./questions.router.js";
import answersRouter from "./answers.router.js";
import commentsRouter from "./comments.router.js";

const router = express.Router();

router.use("/reservation", reservationsRouter);

router.use("/users/", usersRouter);//yw 2번

router.use("/auth", authRouter);//yw 2번

router.use("/reviews", reviewsRouter);

router.use("/petSitter", petSitterRouter);


//