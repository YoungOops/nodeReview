import { CommentsService } from "../services/comments.service.js";

// 컨트롤러(Controller)역할을 하는 클래스
export class CommentsController {
  commentsService = new CommentsService();
  // comment 서비스를 클래스를 컨트롤러 클래스의 멤버 변수로 할당합니다. ????? 알아보기 ***********

  //댓글 조회
  getComments = async (req, res, next) => {
    try {
      // 서비스 계층에 구현된 것 사용하기
      const comments = await this.commentsService.findAllComments();

      return res.status(200).json({ data: comments });
    } catch (err) {
      next(err);
    }
  };

// 댓글 찾는 기능 일단 보류
//   getCommentById = async (req, res, next) => {
//     try {
//       const { commentId } = req.params;

//       // 서비스 계층에 구현된 findcommentById 사용
//       const comment = await this.commentsService.findCommentById(commentId);

//       return res.status(200).json({ data: comment });
//     } catch (err) {
//       next(err);
//     }
//   };

  createComment = async (req, res, next) => {
    try {
      const { nick, content } = req.body;

      // 서비스 계층에 구현된 createcomment 사용
      const createdComment = await this.commentsService.createComment(nick, content);

      return res.status(201).json({ data: createdComment });
    } catch (err) {
      next(err);
    }
  };

//   updatecomment = async (req, res, next) => {
//     try {
//       const { commentId } = req.params;
//       const { nick, content } = req.body;

//       // 서비스 계층에 구현된 updatecomment 사용
//       const updatedComment = await this.commentsService.updateComment(commentId, password, content);

//       return res.status(200).json({ data: updatedcomment });
//     } catch (err) {
//       next(err);
//     }
//   };

  deleteComment = async (req, res, next) => {
    try {
      const { commentId } = req.params;
      const { password } = req.body;

      // 서비스 계층에 구현된 deletecomment 사용
      const deletedComment = await this.commentsService.deleteComment(commentId, password);

      return res.status(200).json({ data: deletedComment });
    } catch (err) {
      next(err);
    }
  };
}
