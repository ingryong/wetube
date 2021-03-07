import routes from "../routes";

// 회원가입
export const getJoin = (req, res) => {
    res.render("join", {pageTitle: "회원가입"});
};
export const postJoin = (req, res) => {
    const{
        body: {name, email, password, password2}
    } = req;
    if(password !== password2){
        res.status(400);
        res.render("join", {pageTitle: "회원가입"});
    } else {
        // 할 일 : 사용자 등록
        // 할 일 : 사용자 로그인
        res.redirect(routes.home)
    }
}

// 로그인
export const getLogin = (req, res) => res.render("login", {pageTitle: "로그인"});
export const postLogin = (req, res) => {
    res.redirect(routes.home);
}

// 로그아웃
export const Logout = (req, res) => {
    // 할 일 : 로그아웃 프로세스
    res.redirect(routes.home);
};


export const userDetail = (req, res) => res.render("userDetail", {pageTitle: "회원 상세정보"});
export const editProfile = (req, res) => res.render("editProfile", {pageTitle: "프로필 수정"});
export const changePassword = (req, res) => res.render("ChangePassword" , {pageTitle: "비밀번호 변경"});