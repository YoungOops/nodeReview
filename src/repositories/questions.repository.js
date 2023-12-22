import { prisma } from "../utils/prisma/index.js";

export class QuestionsRepository {
  findAllQuestions = async () => {
    // ORM인 Prisma에서 questions 모델의 findMany 메서드를 사용해 데이터를 요청합니다.
    const questions = await prisma.questions.findMany();

    return questions;
  };

  findQuestionById = async (questionId) => {
    // ORM인 Prisma에서 questions 모델의 findUnique 메서드를 사용해 데이터를 요청합니다.
    const question = await prisma.questions.findUnique({
      where: { questionId: +questionId }
    });

    return question;
  };

  createQuestions = async (nick, password, title, content) => {
    // ORM인 Prisma에서 questions 모델의 create 메서드를 사용해 데이터를 요청합니다.
    const createdQuestion = await prisma.questions.create({
      data: {
        nick,
        password,
        title,
        content
      }
    });

    return createdQuestion;
  };

  updateQuestion = async (questionId, password, title, content) => {
    // ORM인 Prisma에서 questions 모델의 update 메서드를 사용해 데이터를 수정합니다.
    const updatedQuestion = await prisma.questions.update({
      where: {
        questionId: +questionId,
        password: password
      },
      data: {
        title,
        content
      }
    });

    return updatedQuestion;
  };

  deleteQuestion = async (questionId, password) => {
    // ORM인 Prisma에서 questions 모델의 delete 메서드를 사용해 데이터를 삭제합니다.
    const deletedQuestion = await prisma.questions.delete({
      where: {
        questionId: +questionId,
        password: password
      }
    });

    return deletedQuestion;
  };
}
