import express from "express";
import { AnswersController } from "../controllers/answers.controller.js";

const router = express.Router();

const answersController = new AnswersController();

/** 조회 **/
router.get("/", answersController.getAnswers);

/** 상세 조회 **/
router.get("/:answerId", answersController.getAnswerById);

/** 작성 **/
router.post("/", answersController.createAnswer);

/** 수정 **/
router.put("/:answerId", answersController.updateAnswer);

/** 삭제 **/
router.delete("/:answerId", answersController.deleteAnswer);

export default router;
