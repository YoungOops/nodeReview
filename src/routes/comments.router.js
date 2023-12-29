import express from "express";
import { CommentsController } from "../controllers/comments.controller.js";

const router = express.Router();

const commentsController = new CommentsController();

/** 조회 **/
router.get("/", commentsController.getComments);

/** 상세 조회 기능 없음. **/

/** 작성 **/
router.post("/", commentsController.createComment);

/** 코멘트는 수정 불가 **/

/** 삭제 **/
router.delete("/:commentId", commentsController.deleteComment);

export default router;