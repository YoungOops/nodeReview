import express from "express";
import { UsersController } from "../controllers/users.controller.js";

const router = express.Router();

// 클래스
const usersController = new UsersController();

/** 유저 생성 API */
router.post("/users", usersController.createUser); // 아 이거 위에 클래스 가져다가 만든 메소드 쓰는거임

// /** 게시글 조회 API **/
// router.get('/', postsController.getPosts);

export default router;
//디폴트로 하면 하나의 클래스,함수 객체 내보내는 거임
//하고 받을 때 import router from "./경로/router.js"; 이러케 받으면 됨무
