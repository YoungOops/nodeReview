import { prisma } from "../utils/prisma/index.js";

export class AnswersRepository {
  findAllAnswers = async () => {
    // Prisma에서 answers 모델의 findMany 메서드를 사용해 데이터를 요청합니다.
    const answers = await prisma.answers.findMany();

    return answers;
  };

  findAnswerById = async (answerId) => {
    // ORM인 Prisma에서 answers 모델의 findUnique 메서드를 사용해 데이터를 요청합니다.
    const answer = await prisma.answers.findUnique({
      where: { answerId: +answerId }
    });

    return answer;
  };

  createAnswer = async (nick, password, title, content) => {
    // Prisma에서 answers 모델의 create 메서드를 사용해 데이터를 요청합니다.
    const createdAnswer = await prisma.answers.create({
      data: {
        nick,
        password,
        title,
        content
      }
    });

    return createdAnswer;
  };

  updateAnswer = async (answerId, password, title, content) => {
    // Prisma에서 answers 모델의 update 메서드를 사용해 데이터를 수정합니다.
    const updatedAnswer = await prisma.answers.update({
      where: {
        answerId: +answerId,
        password: password
      },
      data: {
        title,
        content
      }
    });

    return updatedAnswer;
  };

  deleteAnswer = async (answerId, password) => {
    // Prisma에서 answers 모델의 delete 메서드를 사용해 데이터를 삭제합니다.
    const deletedAnswer = await prisma.answers.delete({
      where: {
        answerId: +answerId,
        password: password
      }
    });

    return deletedAnswer;
  };
}
