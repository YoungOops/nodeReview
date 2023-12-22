// src/app.js

import express from "express";
import cookieParser from "cookie-parser";
// cookie-parse 모듈은 요청된 쿠키를 쉽게 사용할 수 있도록 도와주는 모듈이당

const app = express();
const PORT = 2080;

app.use(express.json());
app.use(cookieParser());
app.use("/api", router);

app.listen(PORT, () => {
  console.log(PORT, "포트로 서버가 열렸어요!");
});