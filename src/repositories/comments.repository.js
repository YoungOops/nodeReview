import { prisma } from "../utils/prisma/index.js";

export class CommentsRepository {

  // findAllComments = async () => {
  //   // ORM인 Prisma에서 comments 모델의 findMany 메서드를 사용해 데이터를 요청합니다.
  //   const comments = await prisma.comments.findMany();

  //   return comments;
  // };

  // findCommentById = async (commentId) => {
  //   // ORM인 Prisma에서 comments 모델의 findUnique 메서드를 사용해 데이터를 요청합니다.
  //   const comment = await prisma.comments.findUnique({
  //     where: { commentId: +commentId }
  //   });

  //   return comment;
  // };

  createComments = async (nick, password, title, content) => {
    // Prisma에서 comments 모델의 create 메서드를 사용해 데이터를 요청합니다.
    const createdComment = await prisma.comments.create({
      data: {
        nick,
        password,
        // title,
        content
      }
    });

    return createdComment;
  };

  // updateComment = async (commentId, password, title, content) => {
  //   // ORM인 Prisma에서 comments 모델의 update 메서드를 사용해 데이터를 수정합니다.
  //   const updatedComment = await prisma.comments.update({
  //     where: {
  //       commentId: +commentId,
  //       password: password
  //     },
  //     data: {
  //       title,
  //       content
  //     }
  //   });

  //   return updatedComment;
  // };

  deleteComment = async (commentId, password) => {
    // Prisma에서 comments 모델의 delete 메서드를 사용해 데이터를 삭제합니다.
    const deletedComment = await prisma.comments.delete({
      where: {
        commentId: +commentId,
        password: password
      }
    });

    return deletedComment;
  };
}
