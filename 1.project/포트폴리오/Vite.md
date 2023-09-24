# Vite

---

Category : vite

## 문제 직면

학교에서 팀 프로젝트를 하는 중이다. 리액트 파일을 받아서 build를 하게 됐는데, 노트북이 똥컴이라 그런 지 10분?이 지나도 build가 되지 않았다..

## 문제 해결

이 문제를 해결하려고 구글링을 하다가 유튜버 코딩애플님의 Vite 영상을 보게 되었다.

**웹 개발 방법**

과거 웹 개발을 할 때에는 서버에 HTML, CSS, JS 딱 3개만 올려서 실행을 하면 됐다. 하지만 지금은 JS에 npm이라는 것이 생기면서 큰 용량을 바로 서버에 올리는 것이 쉽지 않게 됐다.

npm이란 javascript library platform인데 이걸 사용하면 필요한 라이브러리들을 쉽게 다운 받을 수 있다. 다운 받은 라이브러리들은 node_modules 폴더에 다 저장되며, 리액트같은 경우에는 필요로 하는 라이브러리가 많기 때문에 node_modules 용량이 매우 크다. 큰 폴더를 서버에 그대로 올릴 수 없다. 그러면 어떻게 해결할 수 있을까?

**그래서 왜 느릴까?**

이를 해결하기 위해 bundling이란 것을 사용해야 한다.
![[vite.png]]

출처 : [https://www.youtube.com/watch?v=iX3Nu1FcZKA](https://www.youtube.com/watch?v=iX3Nu1FcZKA) 코딩애플

bundling은 필요한 코드만 집어서 하나의 파일로 합쳐준다.

bundling을 사용하기 위해서는 npm + bundling tool을 함께 실행을 해야 하는데 1세대 bundling tool에는 webpack있다.

여기서 문제가 webpack은 npm 라이브러리가 많아지면 bundling이 매우 느려진다는 단점을 가지고 있다.

**2세대 bundling tool**

더 빠른 bundling tool **Vite!**

Vite는 엄청나게 빠른 esbuild라는 라이브러리를 써서 bundling을 해준다.

또 여러 장점들이 있지만 내가 필요한 것은 bundling이 빠른 tool이기 때문에 자세히 알아보지 않았다.

아무튼 이제 Vite를 써야 할 때이다!