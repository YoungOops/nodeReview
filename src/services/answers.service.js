// src/services/answers.service.js

import { AnswersRepository } from "../repositories/answers.repository.js";

export class AnswersService {
  answersRepository = new AnswersRepository();

  //답변 조회
  findAllAnswers = async () => {
    // 저장소(Repository)에게 데이터를 요청합니다.
    const answers = await this.answersRepository.findAllAnswers();

    // answers.sort((a, b) => {
    //   return a.createdAt - b.createdAt;
    // }); // 레포지토리에서 orderBy로 변경

    // 레포지토리에서 처리
    // return answers.map((answers) => {
    //   return {
    //     answerId: answers.answerId,
    //     nick: answers.nick,
    //     title: answers.title,
    //     content: answers.content,
    //     createdAt: answers.createdAt,
    //     updatedAt: answers.updatedAt
    //   };
    // });
    return answers;
  };

  /** 답변 상세 X 상세 답변 자체가 순차적으로 달려야 한다. */
  // findanswerById = async (answerId) => {
  //   // 저장소(Repository)에게 특정 게시글 하나를 요청합니다.
  //   const answer = await this.answersRepository.findanswerById(answerId);

  //   return {
  //     answerId: answer.answerId,
  //     nick: answer.nick,
  //     title: answer.title,
  //     content: answer.content,
  //     createdAt: answer.createdAt,
  //     updatedAt: answer.updatedAt
  //   };
  // };

  /**답변 생성*/
  createAnswer = async (userId, questionId, nick, title, content) => {
    // 저장소(Repository)에게 데이터를 요청합니다. (기본키 제외 보여지는 값 + 외래키 인 것 같음)
    //이상한 패스워드 넣어놨는데, 패스워드를 왜 넣어놔 외래키 받아가지고 그냥 답변다는 거임
    console.log(questionId);
    const createdAnswer = await this.answersRepository.createAnswer(userId, questionId, nick, title, content);

    // 비즈니스 로직을 수행한 후 사용자에게 보여줄 데이터를 가공합니다.
    // userId 빼먹었었음..... 로그인 상태에서 질문글에 대한 답변을 달 수 있기 때문에 포함 시켜야 한다.
    return {
      userId: createdAnswer.userId,
      questionId: createdAnswer.questionId,
      answerId: createdAnswer.answerId,
      nick: createdAnswer.nick,
      title: createdAnswer.title,
      content: createdAnswer.content,
      createdAt: createdAnswer.createdAt,
      updatedAt: createdAnswer.updatedAt
    };
  };

  //답변 수정
  updateAnswer = async (answerId, password, title, content) => {
    // 저장소(Repository)에게 특정 게시글 하나를 요청합니다.
    const answer = await this.answersRepository.findAnswerById(answerId);
    if (!answer) throw new Error("존재하지 않는 게시글입니다.");

    // 저장소(Repository)에게 데이터 수정을 요청합니다.
    await this.answersRepository.updateAnswer(answerId, password, title, content);

    // 변경된 데이터를 조회합니다.
    const updatedAnswer = await this.answersRepository.findAnswerById(answerId);

    return {
      answerId: updatedAnswer.answerId,
      nick: updatedAnswer.nick,
      title: updatedAnswer.title,
      content: updatedAnswer.content,
      createdAt: updatedAnswer.createdAt,
      updatedAt: updatedAnswer.updatedAt
    };
  };

  //답변 삭제
  deleteAnswer = async (answerId, password) => {
    // 저장소(Repository)에게 특정 게시글 하나를 요청합니다.
    const answer = await this.answersRepository.findAnswerById(answerId);
    if (!answer) throw new Error("존재하지 않는 게시글입니다.");

    // 저장소(Repository)에게 데이터 삭제를 요청합니다.
    await this.answersRepository.deleteAnswer(answerId, password);

    return {
      answerId: answer.answerId,
      nick: answer.nick,
      title: answer.title,
      content: answer.content,
      createdAt: answer.createdAt,
      updatedAt: answer.updatedAt
    };
  };
}
