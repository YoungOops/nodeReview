import { AuthService } from "../services/auth.service.js";
// {객체} 로 감싸서 보내는 이유 알아보기

//클래스 기계 만들기 -> 패턴은 위에서 아래로
export class AuthController {
    authService = new AuthService();
}

login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const users = await this.authService.login(email, password);
        res.cookie("accessToken", `Bearer ${users.accessToken}`);
        return res.status(200).json({ data: users });
    }catch (err) {
        next(err);
    }

logout = async (req, res, next) => {
    try {
        res.clearCookie("accessToken");
        return res.status(200).json({ message: "로그아웃성공" });
    } catch (err) {
        next(err);
    }
};


};