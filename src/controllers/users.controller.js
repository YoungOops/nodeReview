import { UsersService } from "../services/users.service.js";

export class UsersController {
  
  getUsers = async (req, res, next) => {
    try {
      //this.~~Service.findAllUsers(); 그냥 이거 보면 해당하는 게시글들의 목록이 오겠구나 하면 되는거임 계층화 되어있는거 걍 ㄱ
      const users = await this.usersService.findAllUsers();

      //위에꺼 나오고 그 다음에 리스폰스 넘겨 주는 순서
      return res.status(200).json({ data: users });
    } catch (err) {
      next(err); // 에러 미들웨어로 던질 준비
    }
  };

  createPost = async (req, res, next) => {
    try {
      const { email, password } = req.body;

      // 서비스 계층에 구현된 createPost 로직을 실행합니다.
      const createdPost = await this.postsService.createPost(email, password);

      return res.status(201).json({ data: createdUser });
    } catch (err) {
      next(err);
    }
  };
}
