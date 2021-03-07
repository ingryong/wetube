## Wetube

Cloning Youtube

## Pages 계획

- [ ] Home
- [x] Join
- [x] Login
- [x] Search
- [ ] User Detail
- [ ] Edit Profile
- [ ] Change Password
- [ ] Upload
- [ ] Video Detail
- [ ] Edit Video

# babel 설치

최신 자바 스크립트 코드를 사용하더라도 구버전의 브라우저에서 충분히 호환될 수 있도록 구버전 자바스크립트로 바꿔줌
바벨을 설치한 후 바벨의 env설치를 함

```{.javascript}
    npm install @babel/node

    npm install @babel/preset-env
```

.babelrc 파일을 생성한 뒤 preset-env 넣어준다.

`package.json`에서 `"scripts"` 부분을 수정한다.

```
"scripts": {
    "start": "babel-node index.js"
  }
```

그 후 `npm start`를 하면 수많으 에러가 뜨는데, `@babel/core`가 없어서 뜨는 에러이다.

```
npm install @babel/core
```

설치해주고 다시 `npm start`를 시작하면 정상적으로 서버가 시동되는것을 볼 수 있다.

# ES6문법 - arrow function

아래 코드와 같은 구버전에서 사용되던 function을

```
function HandleProfile(req, res){
    res.send("You are on My Profile");
}
```

ES6에서는 아래와같이 한 줄 짜리의 function에 arrow function을 사용할 수 있다.

```
const HandleProfile = (req, res) => res.send("You are on My Profile");
```

# nodemon 설치

nodemon은 파일의 수정이 감지될때마다 자동으로 서버를 재시작해주는 기능을 가지고 있어서 매우 유용하다.
그리고 `package.json`파일의 start 부분에 nodemon을 추가해준다.

```
"scripts": {
    "start": "nodemon babel-node index.js"
  }
```

## middleware 설치

node.js 개발에 도움이 되는 4개의 미들웨어

# morgan 설치

morgan은 로깅(loging)에 도움이 되는 라이브러리이다.

# helmet 설치

helmet은 node.js의 보안에 도움이 되는 라이브러리이다.

# cookie parser

kookie 관리를 편하게 해준다.

# body parser

누군가 form을 채워서 전송한다면 이 form은 서버에 의해 받아져야 한다.
만약 이름과 비밀번호를 입력해서 전송한다면 서버로 전송받아져야 한다.
body로부터 정보를 얻을 수 있게 해준다.
