import { QuestionsService } from "../services/questions.service.js";

// 컨트롤러(Controller)역할을 하는 클래스
export class QuestionsController {
  questionsService = new QuestionsService();
  // question 서비스를 클래스를 컨트롤러 클래스의 멤버 변수로 할당합니다. ????? 알아보기 ***********

  getQuestions = async (req, res, next) => {
    try {
      // 서비스 계층에 구현된 것 사용하기
      const questions = await this.questionsService.findAllQuestions();

      return res.status(200).json({ data: questions });
    } catch (err) {
      next(err);
    }
  };

  getQuestionById = async (req, res, next) => {
    try {
      const { questionId } = req.params;

      // 서비스 계층에 구현된 findQuestionById 사용
      const question = await this.questionsService.findQuestionById(questionId);

      return res.status(200).json({ data: question });
    } catch (err) {
      next(err);
    }
  };

  createQuestion = async (req, res, next) => {
    try {
      const { nick, password, title, content } = req.body;

      // 서비스 계층에 구현된 createQuestion 사용
      const createdQuestion = await this.questionsService.createQuestion(nick, password, title, content);

      return res.status(201).json({ data: createdQuestion });
    } catch (err) {
      next(err);
    }
  };

  updateQuestion = async (req, res, next) => {
    try {
      const { questionId } = req.params;
      const { password, title, content } = req.body;

      // 서비스 계층에 구현된 updateQuestion 사용
      const updatedQuestion = await this.questionsService.updateQuestion(questionId, password, title, content);

      return res.status(200).json({ data: updatedQuestion });
    } catch (err) {
      next(err);
    }
  };

  deleteQuestion = async (req, res, next) => {
    try {
      const { questionId } = req.params;
      const { password } = req.body;

      // 서비스 계층에 구현된 deleteQuestion 사용
      const deletedQuestion = await this.questionsService.deleteQuestion(questionId, password);

      return res.status(200).json({ data: deletedQuestion });
    } catch (err) {
      next(err);
    }
  };
}
