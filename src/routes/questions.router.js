import express from "express";
import { QuestionsController } from "../controllers/questions.controller.js";

const router = express.Router();

const questionsController = new QuestionsController();

/** 조회 **/
router.get("/", questionsController.getQuestions);

/** 상세 조회 **/
router.get("/:questionId", questionsController.getQuestionById);

/** 작성 **/
router.question("/", questionsController.createQuestion);

/** 수정 **/
router.put("/:questionId", questionsController.updateQuestion);

/** 삭제 **/
router.delete("/:questionId", questionsController.deleteQuestion);

export default router;
