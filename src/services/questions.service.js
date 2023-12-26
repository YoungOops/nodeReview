// src/services/questions.service.js

import { QuestionsRepository } from "../repositories/questions.repository.js";

export class QuestionsService {
  questionsRepository = new QuestionsRepository();

  //게시글 조회
  findAllQuestions = async () => {
    // 저장소(Repository)에게 데이터를 요청합니다.
    const questions = await this.questionsRepository.findAllQuestions();

    // 호출한 question들을 가장 최신 게시글 부터 정렬합니다.
    questions.sort((a, b) => {
      return b.createdAt - a.createdAt;
    });

    // 비즈니스 로직을 수행한 후 사용자에게 보여줄 데이터를 가공합니다.
    return questions.map((questions) => {
      return {
        questionId: questions.questionId,
        nick: questions.nick,
        title: questions.title,
        content: questions.content,
        createdAt: questions.createdAt,
        updatedAt: questions.updatedAt
      };
    });
  };

  //게시글 상세
  findQuestionById = async (questionId) => {
    // 저장소(Repository)에게 특정 게시글 하나를 요청합니다.
    const question = await this.questionsRepository.findQuestionById(questionId);

    return {
      questionId: question.questionId,
      nick: question.nick,
      title: question.title,
      content: question.content,
      createdAt: question.createdAt,
      updatedAt: question.updatedAt
    };
  };

  //게시글 생성
  createQuestion = async (nick, password, title, content) => {
    // 저장소(Repository)에게 데이터를 요청합니다.
    const createdQuestion = await this.questionsRepository.createQuestion(nick, password, title, content);

    // 비즈니스 로직을 수행한 후 사용자에게 보여줄 데이터를 가공합니다.
    return {
      questionId: createdQuestion.questionId,
      nick: createdQuestion.nick,
      title: createdQuestion.title,
      content: createdQuestion.content,
      createdAt: createdQuestion.createdAt,
      updatedAt: createdQuestion.updatedAt
    };
  };

  //게시글 수정
  updateQuestion = async (questionId, password, title, content) => {
    // 저장소(Repository)에게 특정 게시글 하나를 요청합니다.
    const question = await this.questionsRepository.findQuestionById(questionId);
    if (!question) throw new Error("존재하지 않는 게시글입니다.");

    // 저장소(Repository)에게 데이터 수정을 요청합니다.
    await this.questionsRepository.updateQuestion(questionId, password, title, content);

    // 변경된 데이터를 조회합니다.
    const updatedQuestion = await this.questionsRepository.findQuestionById(questionId);

    return {
      questionId: updatedQuestion.questionId,
      nick: updatedQuestion.nick,
      title: updatedQuestion.title,
      content: updatedQuestion.content,
      createdAt: updatedQuestion.createdAt,
      updatedAt: updatedQuestion.updatedAt
    };
  };

  //게시글 삭제
  deleteQuestion = async (questionId, password) => {
    // 저장소(Repository)에게 특정 게시글 하나를 요청합니다.
    const question = await this.questionsRepository.findQuestionById(questionId);
    if (!question) throw new Error("존재하지 않는 게시글입니다.");

    // 저장소(Repository)에게 데이터 삭제를 요청합니다.
    await this.questionsRepository.deleteQuestion(questionId, password);

    return {
      questionId: question.questionId,
      nick: question.nick,
      title: question.title,
      content: question.content,
      createdAt: question.createdAt,
      updatedAt: question.updatedAt
    };
  };
}
