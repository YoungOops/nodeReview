import express from "express";

// import authRouter from "./auth.router.js";

import usersRouter from "./users.router.js";
import questionsRouter from "./questions.router.js";
import answersRouter from "./answers.router.js";
import commentsRouter from "./comments.router.js";

const router = express.Router();

router.use("/auth", authRouter);

router.use("/users", usersRouter);

router.use("/questions", questionsRouter);

router.use("/answers", answersRouter);

router.use("/comments", commentsRouter);

export default router;
