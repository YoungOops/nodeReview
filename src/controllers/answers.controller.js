import { AnswersService } from "../services/answers.service.js";

// 컨트롤러(Controller)역할을 하는 클래스
export class AnswersController {
  answersService = new AnswersService();
  // answer 서비스를 클래스를 컨트롤러 클래스의 멤버 변수로 할당합니다. ????? 알아보기 ***********
  // 암튼 클래스 기계로 뽑아낸 애는 파스칼 케이스로 구분 짓는다.

  getAnswers = async (req, res, next) => {
    try {
      // 서비스 계층에 구현된 것 사용하기
      const answers = await this.answersService.findAllAnswers();

      return res.status(200).json({ data: answers });
    } catch (err) {
      next(err);
    }
  };

  getAnswerById = async (req, res, next) => {
    try {
      const { answerId } = req.params;

      // 서비스 계층에 구현된 findanswerById 사용
      const answer = await this.answersService.findAnswerById(answerId);

      return res.status(200).json({ data: answer });
    } catch (err) {
      next(err);
    }
  };

  createAnswer = async (req, res, next) => {
    try {
      const { userId, questionId, nick, title, content } = req.body;

      // 서비스 계층에 구현된 createanswer 사용
      const createdAnswer = await this.answersService.createAnswer(userId, questionId, nick, title, content);

      //유효성 체크를 여기서 해주는 것이 좋다. *****
      //직접 체크 or 라이브러리 모듈 사용 익스프레스 벨리데이션, Joi

      return res.status(201).json({ data: createdAnswer });
    } catch (err) {
      next(err);
    }
  };

  updateAnswer = async (req, res, next) => {
    try {
      const { answerId } = req.params;
      const { password, title, content } = req.body;

      // 서비스 계층에 구현된 updateanswer 사용
      const updatedAnswer = await this.answersService.updateAnswer(answerId, password, title, content);

      return res.status(200).json({ data: updatedAnswer });
    } catch (err) {
      next(err);
    }
  };

  deleteAnswer = async (req, res, next) => {
    try {
      const { answerId } = req.params;
      const { password } = req.body;

      // 서비스 계층에 구현된 deleteanswer 사용
      const deletedAnswer = await this.answersService.deleteAnswer(answerId, password);

      return res.status(200).json({ data: deletedAnswer });
    } catch (err) {
      next(err);
    }
  };
}
