import express from "express";
import { CommentsController } from "../controllers/questions.controller.js";

const router = express.Router();

const questionsController = new CommentsController();

/** 조회 **/
router.get("/", questionsController.getComments);

/** 상세 조회 **/
router.get("/:questionId", questionsController.getCommentsById);

/** 작성 **/
router.question("/", questionsController.createComment);

/** 코멘트는 수정 불가 말 바꾸기 없음 **/

/** 삭제 **/
router.delete("/:questionId", questionsController.deleteComments);

export default router;