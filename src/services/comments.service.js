// src/services/comments.service.js

import { CommentsRepository } from "../repositories/comments.repository.js";

export class CommentsService {
  commentsRepository = new CommentsRepository();

  /**댓글 조회 */
  findAllComments = async () => {
    // 저장소(Repository)에게 데이터를 요청합니다.
    const comments = await this.commentsRepository.findAllComments();

    // 호출한 comment들을 오래된 순서 부터 정렬합니다.
    comments.sort((a, b) => {
      return a.createdAt - b.createdAt;
    });

    // 비즈니스 로직을 수행한 후 사용자에게 보여줄 데이터를 가공합니다.
    return comments.map((comment) => {
      return {
        commentId: comment.commentId,
        nick: comment.nick,
        content: comment.content,
        createdAt: comment.createdAt,
        updatedAt: comment.updatedAt
      };
    });
  };

  // 댓글 상세
  // findCommentById = async (commentId) => {
  //   // 저장소(Repository)에게 특정 게시글 하나를 요청합니다.
  //   const comment = await this.commentsRepository.findCommentById(commentId);

  //   return {
  //     commentId: comment.commentId,
  //     nick: comment.nick,
  //     // title: comment.title,
  //     content: comment.content,
  //     createdAt: comment.createdAt,
  //     updatedAt: comment.updatedAt
  //   };
  // };

  //댓글 생성
  createComment = async (nick, password, content) => {
    // 저장소(Repository)에게 데이터를 요청합니다.
    const createdComment = await this.commentsRepository.createComment(nick, password, content);

    // 비즈니스 로직을 수행한 후 사용자에게 보여줄 데이터를 가공합니다.
    return {
      commentId: createdComment.commentId,
      nick: createdComment.nick,
      // title: createdcomment.title,
      content: createdComment.content,
      createdAt: createdComment.createdAt,
      updatedAt: createdComment.updatedAt
    };
  };

  // //게시글 수정
  // updateComment = async (commentId, password, title, content) => {
  //   // 저장소(Repository)에게 특정 게시글 하나를 요청합니다.
  //   const comment = await this.commentsRepository.findCommentById(commentId);
  //   if (!comment) throw new Error("존재하지 않는 게시글입니다.");

  //   // 저장소(Repository)에게 데이터 수정을 요청합니다.
  //   await this.commentsRepository.updatecomment(commentId, password, title, content);

  //   // 변경된 데이터를 조회합니다.
  //   const updatedcomment = await this.commentsRepository.findcommentById(commentId);

  //   return {
  //     commentId: updatedcomment.commentId,
  //     nick: updatedcomment.nick,
  //     title: updatedcomment.title,
  //     content: updatedcomment.content,
  //     createdAt: updatedcomment.createdAt,
  //     updatedAt: updatedcomment.updatedAt
  //   };
  // };

  //댓글 삭제
  deleteComment = async (commentId, password) => {
    // 저장소(Repository)에게 특정 게시글 하나를 요청합니다.
    const comment = await this.commentsRepository.findCommentById(commentId);
    if (!comment) throw new Error("존재하지 않는 댓글입니다.");

    // 저장소(Repository)에게 데이터 삭제를 요청합니다.
    await this.commentsRepository.deleteComment(commentId, password);

    return {
      commentId: comment.commentId,
      nick: comment.nick,
      // title: comment.title,
      content: comment.content,
      createdAt: comment.createdAt,
      updatedAt: comment.updatedAt
    };
  };
}
