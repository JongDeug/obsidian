# 창의 융합 프로젝트 2

https://scottspence.com/posts/how-to-implement-redirects-for-changed-post-routes-in-sveltekit

CICD,Test,AWS

⭐ 자기 포트폴리오에 올린 프로젝트 코드 분석, 개선점 물어볼때 대응할거 생각, 웹쪽 개론 한줄이라도 더 읽기, 면접 자주 다니기

1. 융프 → 도움 안됨
2. 창프1 → 개선
3. 고급웹프, 빅데이터 → JPA, ORM 등 DB 짜는거 개선해야함
4. 창프2 → 개선, DB 백엔드, 테스트 코드 등
5. Nodejs, Spring을 확실히하자.(알고리즘, 자료구조도 중요함)

**소켓에서 이벤트 트리거 받고**

**엑시오스 재요청하면 바**뀜

**창프2 ⇒ 코드 보완 및 타입스크립트로 백엔드, spring으로 백엔드 작성**

⭐ 진짜 제발제발 백엔드 작성할 때 테스트 코드 및 api 잘 가는지 안가는지 확인 좀 하자.

프론트가 에러 찾아주는 사람이 아니다 진짜 ㅆㅃ

// rexui memo

https://codepen.io/rexrainbow/pen/vPWzBa

https://codepen.io/rexrainbow/pen/yLxxWaY

https://codepen.io/rexrainbow/pen/qByGPpP

https://rexrainbow.github.io/phaser3-rex-notes/docs/site/ui-scrollablepanel/

✅ 캡스톤 규칙

개인카드 x, 현금 영수증 or 전자세금계산서 / 거래명세서

회의비 : 하루 한 번, 1인 1만원(5천원은 다과 사용가능), 회의록, **영수증과 사진 첨부**

재료비 : USB 메모리, **영수증과 거래명세서**

✅ 회의 할 것

- [ ]  재료비 회의, 커스텀 가능할지?
- [ ]  DB 변경사항

✅ 아이디어

- [ ]  localtunnel, 서버 배포

✅ 해야할 것

- [ ]  프사
- [ ]  회의록, 캘린더
- [x]  Team 비번 확인
- [ ]  다른 기기에서 접근하는거 test 하기
- [x]  팀 업데이트 시 진행상태도 업데이트 하기, 상태변경
- [x]  팀 Create시 State를 “진행 중”으로 표시하기
- [x]  메타버스 미팅방, 접속 시 로그인 유무확인 And 이미접속해있으면 접속 차단.
- [x]  팀 리더를 받는 공간이 없음. create
- [x]  팀 멤버 찾을 때 아이디로 찾기 username X
- [x]  팀 멤버 찾을 때 내 이름 먼저 채워 넣기 ⭐

- [ ]  라우팅
- [ ]  에러페이지
- [ ]  Alert
- [ ]  반응형
- [ ]  UI 코드 정리
- 게임
    - [x]  코드정리
    - [ ]  맵 만들기
    - [ ]  채팅 구현
    - [ ]  새로운 씬 변환
    - [ ]  기본 UI (1) 환경설정(음성, 화상) (2) 회의록 (3) 캘린더
![[Untitled (7).png]]

- [ ]  메타버스 UI 넣어야 함.

✔️ 기술 스택

프론트엔드 : Svelte, svelte-phaser

백엔드 : Spring boot, coloycious?

데이터베이스 : JPA

✔️ 주제 

팀프로젝트 구인 사이트

✔️ 포지션

백엔드 : 김종환, 김현수, 김혜림

프론트엔드 : 김종환, 김현수

✔️ 기능 

**웹 (PWA사용)**

**메타버스** 

*기능 리스트 참조 

✔️ API 라우팅 정리 

/ : 게시판 

/signup : 회원가입 

/signup/noAccount : 직접 가입

✔️ 디자인 참고 사이트

[DEV Community 👩‍💻👨‍💻](https://dev.to/)

[NFT Marketplace | JPG Store](https://www.jpg.store/ko)

✔️ Component 

[Tailwind CSS Modal - Flowbite](https://flowbite.com/docs/components/modal/)

tailwind css의 완성형 components 

✔️ Calendar

[[Javascript] Full calendar(스케줄 달력)의 사용법](https://nowonbun.tistory.com/368)

✔️ Webrtc, HTML5 game engine

[HTML5 Game Engines](https://html5gameengine.com/)

---

✅ 공부, 알게된 점

- postcss : plugin, 일부 기능들을 쉽게 설치하여 사용 가능, 최신 css로도 바꿔준다함
- vendor prefix : 새로운 css기능을  이전 버전에게 알려줌으로써 이전 버전의 웹 브라우저에서도 그 기능을 사용할 수 있게 됨.
- MVC 모델 돌아가는 구조

컨트롤러는 사용자에게 요청을 받고, 해당 요청을 처리하기 위해 서비스를 호출
서비스는 컨트롤러가 준 데이터 or 데이터베이스에서 가져온 데이터를 알맞게 가공하여 다시 컨트롤러에게 넘김.
다시 컨트롤러는 서비스의 결과물을 클라이언트에게 전달해줌.

repository는 DB에 접근하는 메서드들을 사용하기 위한 인터페이스?

**repository와 dao가 같은 기능을하는데 뭐가 다를까??** 

**답변!**

repository := dao (비슷함)

이 둘은 거의 같다고 생각하셔도 무방합니다. 좀 더 깊이있게 차이를 설명하면, repotiroy는 엔티티 객체를 보관하고 관리하는 저장소이고, dao는 데이터에 접근하도록 DB접근 관련 로직을 모아둔 객체입니다. 둘다 개념의 차이일뿐 실제로 개발할 때는 비슷하게 사용됩니다.
![[Untitled (8).png]]
- Phaser을 통해 멀티 플레이어 게임을 만들 수 있는 방법은 두 가지임.
하나는 express [socket.io](http://socket.io) 
또 하나는 colyseus

[Click outside div (as directive) • REPL • Svelte](https://svelte.dev/repl/0ace7a508bd843b798ae599940a91783?version=3.16.7)

svelte 해당 영역 바깥 쪽 클릭시, 원하는 함수 트리거하기

[height의 %값 비율로 적용하기](https://susu91.tistory.com/17)

height 퍼센트 작동

[Top 4 BEST Ngrok Alternatives In 2023: Review And Comparison](https://www.google.com/amp/s/www.softwaretestinghelp.com/ngrok-alternatives/amp/)

로컬호스트 진입

[Top free game assets](https://itch.io/game-assets/free)

무료 도트 이미지

[ESM과 CommonJS의 차이](https://velog.io/@kakasoo/ESM과-CommonJS의-차이)

ESM과 CommonJS 차이??

https://learn.colyseus.io/phaser/1-basic-player-movement.htmlhttps://github.com/colyseus/tutorial-phaser/blob/master/client/src/scenes/Part1Scene.ts

https://www.youtube.com/watch?v=s4lcuCTO2K8

https://geckos.io/

✅ 공부해야할 것, 정리해야할 것

- 웹소켓과 [socket.io](http://socket.io) 차이
- parcel이 뭔데?
- https://www.youdad.kr/js-module-system/  esm, commonjs 가 뭔뎅?
- 서버 확장에 대해서 생각하게 됐음.

✅ 오류, 오류 해결 방법, 어려웠던 점

- svelte-fullcalendar API 사용시 → @fullcalendar/* 를 사용할 때 버전 6을 사용하면 오류가 났음.해결 : 버전 5로 다운그레이드 해야함.

---

- colyseus 오류가 났음 : colyseus client-server version을 맞춰야 실행가능함.

---

- phaser 이미지 업로드 어려움을 겪었음. chrome devops에 들어가서 해당 이미지 요청을 자세히 보니 assets폴더가 서버에 있지 않았음. → assets을 dist 안으로 옮기면 해결 완료

---

- phaser tilemap을 사용하는데 어려움을 겪음 : key와 layerId를 잘 맞춰야함. tilemap은 position, layer에 대한 모든 정보를 포함한 json 파일임. 그래서 tilemap editor에서 map을 만들고 로드함. 게임안에서 로드한 타일셋 이미지(key)와 map(json)의 타일셋 이름을 맞추면 실제로 그릴 수 있게 됨.
- https://bravenamme.github.io/2020/02/17/phaser/ tilemap editor 사용
- https://phasergames.com/loading-tilemaps-in-phaser-3-and-json/  실제 로드 이해 돕기(동영상 꼭보기)

---

- 버전 업그레이드를 꼭 확인하자!……

---

- phaser 멀티 룸을 만드려고 하니까 힘들었음 .filterBy로 해결함.

---

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Getter_only  오류
- setter가 없다는 에러가나옴. strict모드에서 발생하는 것 같아.
- 해당 node_modules 를 Fork해서 파일을 고쳤는데 반영시간이 늦어서 npx patch-pakage를 사용해서 고쳤더니 해결됐음!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
- 처음 module을 edit해봤음. 오류를 고치니 매우 짜릿함.
- https://imkh.dev/nodejs-modify-modules/     모듈 Edit방법
- 기존 rexUI 작성자에게 오류를 찾아 contribute 해본 경험

---

- websocket과 socket.io는 다름. colyseus는 websocket을 사용하는데 시그널링 서버를 예제가 많은 socket.io로 잡았기 때문에 서버를 또 따로 2개로 놓아야함.

---

- ngrok http --host-header=rewrite 3000  ==⇒ ngrok가 안되서 localtunnel로 webrtc를 테스트해야함.
- **ngrok , localtunnel 을 모바일 환경에서 테스트하려면 해당 사이트를 들어가야됨**

---

- Spring 세션과 쿠키에 대해 이해가 되지않는 부분이 있었다. 원래는 세션 만들고 쿠키 생성해서 클라로 보내야하는데,

****서블릿에서는 세션매니저 역할(HttpSession)객체를 제공하고 있다.****

우리가 만들었던 SessionManager의 역할을 하는 객체를 서블릿에서는 HttpServlet 클래스를 통해 제공하고 있다. 즉, HttpSession을 이용하면 우리는 세션 생성, 조회, 삭제를 편하게 사용할 수 있고 추적 불가능한 키를 가진 쿠키를 생성할 수 있다. 이 때 쿠키 이름은 JSESSIONID이며 HttpOnly이기에 클라이언트에서 조작할 수 없다.

이므로, 따로 쿠키 관리를 하지않아도 된다.

https://catsbi.oopy.io/0c27061c-204c-4fbf-acfd-418bdc855fd8

- HttpSession은 클라이언트에게 JSESSIONID인 쿠키를 보내줌. 하지만 HttpOnly이기 때문에 클라이언트에서 조작할 수 없다.
- 따라서 동기화를 해줘야 하는데 localStorage, sessionStorage 방법이 있음. local은 영구적이거나 시간을 설정할 수 있고, session은 휘발성 메모리임. 쿠키와 같은 expire time을 설정하기 위해 이 프로젝트에는 local을 사용하기로 했음.

---

- WebGL에서 WebRTC를 사용하려면 socket.io말구 다른걸 사용해야할지도모르겠다.

---

[Spring Session과 Cookie SameSite 정책](https://shanepark.tistory.com/349)

- Cors 지옥에 들어갔다 나옴. 문제는 http: localhost로 돌릴 때 JSESSION 쿠키가 잘 들어왔는데 ngrok으로 돌릴 때 에러가 떴음.
- 한참을 찾아보니까 Spring Session에서의 Cookie SameSite 정책 변경 때문에 따로 application.yml 파일에 아래 코드를 설정해줘야 https에서 잘 작동함

```jsx
server:
  servlet:
    session:
      cookie:
        same-site: none
        secure: true
```

- Cors 방식과 Proxy 방식이 있는데 Proxy는 따로 설정해주지 않아도 쿠키 세션이 잘들어왔음.
- 찾아보니까 뭔가 다른 방식이던데 따로 공부하면 좋을 것 같음.

✅ 느낀 점

- 왜 기존 시스템의 문제점, 기존 시스템이 가지고 있지 않는 것을 구현하고 개발하는 것을 강조하는지 다시 곰곰하게 생각해보게됨. 좀 더 나은 개발자가 되려면 꼭 생각해봐야될 주제임.