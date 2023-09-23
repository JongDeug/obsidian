Hypertext Transfer Protocol

지금은 거의 모든 것을 HTTP를 활용해 데이터를 주고받음.

지금은 HTTP의 세계! (HTTP/1.1을 많이 사용함)

✔️ HTTP 특징

- 클라이언트 서버 구조
- Stateless 지향, 비연결성
- HTTP 메시지 사용
- 스펙 자체는 매우 단순함, 그래서 확장 가능한 기술

비지니스 로직 - 서버

UI, 요청 - 클라이언트

✔️ Stateful, Stateless

상태 유지 : 중간에 다른 점원(서버)로 바뀌면 안된다. 계속 연결 중임.

무상태 : 중간에 다른 점원(서버)로 바뀌어도 된다. 하지만 내 정보를 계속해서 보내줘야한다.

즉, 무상태는 응답 서버를 쉽게 바꿀 수 있으므로 무한한 서버 증설이 가능하다.

핵심은 Stateless로 최대한 구현을 하고, 필요한 경우에만 Stateful로 구현한다.

Stateless를 기억하자.

why? 선착순 이벤트, 명절 KTX 예약 … 같은 대용량 트랙픽이 올 때 서버를 확 늘려서 대응을 할 수 있게 됨.

✔️ Connectionless(비연결성)

서버 자원을 매우 효율적으로 사용할 수 있다.

단점)

TCP/IP 연결을 새로 맺어야 함. 3 way handshake 시간 추가.

→ Persistent Connections(지속 연결)로 문제 해결

✔️ API URI를 잘 짜야한다.

리소스와 행위를 분리해야함! (미네랄과 미네랄을 캐는 행위를 구분)

실무에서는 대부분 리소스 URI로 설계하되 안되는 부분은 컨트롤 URI로 설계함.

**회원** 목록 조회 /members → GET

**회원** 등록 /members → POST

**회원** 조회 /members/{id} → GET

**회원** 수정 /members/{id} → PATCH(회원정보수정), PUT(게시판 수정), POST

**회원** 삭제 /members/{id} → DELETE

Get은 캐싱을 해준다?

✔️ PUT, PATCH

PUT)

리소스가 있으면 완전히 대체(덮어버리기)

리소스가 없으면 생성

PATCH)

리소스를 부분적으로 변경함(PUT의 보완)

✔️ PUT과 POST의 차이점?

PUT은 클라이언트가 리소스 위치를 알고 URI를 지정함.

POST는 리소스 위치를 모름.

✔️ HTTP 메소드의 속성

- 안전 Safe
    - 호출해도 리소스를 변경하지 않는다.
- 멱등 Idempotent
    - 한 번 호출하든 두 번 호출하든 100번 호출하든 결과가 똑같다.
    - GET, PUT, DELETE는 멱등임
    - PUT은 덮어버리기 때문에 최종 결과물이 똑같음. 멱등
    - POST는 멱등이 아니다. 두 번 호출하면 같은 결제가 중복해서 발생할 수 있다.
- 캐시 가능 Cacheable
    - 실제 GET, HEAD 정도만 캐시로 사용

✔️ Data Transfer / Client to Server

정적 데이터 조회

동적 데이터 조회

HTML Form 데이터 전송

- application/x-www-form-urlencoded : key-value, 쿼리 파라미터 형식
- multipart/form-data : 주로 binary 데이터를 전송할 때
- GET과 POST만 사용 가능.

HTTP API 데이터 전송

- AJAX, AXIOS …
- application/json : 요즘은 이 Content-type을 많이 사용함.

✔️ HTTP API 설계 예시

- HTTP API - Collection
    
    - POST 기반 등록(회원 관리 시스템)
    - 서버가 리소스 URI 결정
    - Location을 서버가 지정해줌.
- HTTP API - Store
    
    - PUT 기반 등록(파일 관리 시스템)
    - 클라이언트가 리소스 URI 결정
    - 클라이언트가 리소스 URI를 알아야함.
- HTML FORM 사용
    
    - 순수 HTML FORM
    - GET, POST만 사용하기 때문에 컨트롤 URI를 사용해야함.

✔️ 참고하면 좋은 URI 설계 개념

- 문서(document)
    - 단일 개념
    - 예) /members/100, /files/star.jpg
- 컬렉션(collection)
    - 서버가 관리하는 리소스 디렉터리
    - 예) /member
- 스토어(store)
    - 클라이언트가 관리하는 리소스 저장소
    - 예) /files
- 컨트롤러(controller), 컨트롤 URI
    - 문서, 컬렉션, 스토어로 해결하기 어려운 추가 프로세스 실행
    - 동사를 직접 사용
    - 예) /members/{id}/delete

[REST API - URL 네이밍 추천](https://restfulapi.net/resource-naming/)

✔️ HTTP 상태코드

2xx : 요청 정상 처리

3xx : 요청을 완료하려면 추가 행동이 필요

4xx : 클라이언트 오류, 잘못된 문법 등으로 서버가 요청을 수행할 수 없음.

5xx : 서버 오류, 서버가 정상 요청을 처리하지 못함.

✔️ 2xx

200 OK

201 Created : 요청 성공해서 새로운 리소스가 생성됨.

202 Accepted : 요청이 접수되었으나 처리가 완료되지 않았음.

204 No Content : 서버가 요청을 성공적으로 수행했지만, 응답 페이로드 본문에 보낼 데이터가 없음.

#보통 200, 201만 사용함. 개발자들이 합의해서 사용함.

✔️ 3xx

리다이렉션 이해 : Location 헤더가 있으면, Location 위치로 자동으로 이동

- 영구 리다이렉션 : 특정 리로스의 URI가 영구적으로 변경
- 일시 리다이렉션 : 일시적인 변경
- 특수 리다이렉션 : 결과 대신 캐시를 사용

영구 리다이렉션

- 301 Moved Permanently : 리다이렉트시 요청 메소드가 GET으로 변할 수 있고, Body가 제거될 수 있음.
- 308 Permanent Redirect : 301과 기능은 같지만 리다이렉트시 요청 메소드와 본문 유지(과거 스펙을 유지시키는 경우가 별로 없어서 잘 안씀)

일시 리다이렉션

- 302 Found : 리다이렉트시 요청 메소드가 Get으로 변하고, 본문이 제거될 수 있음(MAY).
- 307 Temporary Redirect : 302와 기능은 같음, 리다이렉틔 요청 메서드와 본문 유지(요청 메소드를 변경하면 안된다. Must Not)
- 303 See Other : 302와 기능은 같음, 리다이렉트시 요청 메서드가 GET으로 변경(명확하게 GET으로 바꿈)

모호한 302를 대신하는 명확한 307과 303이 등장!

특수 리다이렉션

- 304 Not Modified : 클라이언트에게 리소스가 수정되지 않았음을 알려준다. 따라서 클라이언트는 로컬 PC에 저장된 캐시를 재사용한다.

일시 리다이렉션 ex)

PRG : Post/Redirect/Get 을 사용하지 않으면 중복 주문이 됨.

원래는 서버에서 중복 주문을 방지하는게 원칙임

클라이언트에서 방지하는 것이 PRG 방식

✔️ 4xx (Client Error)

400 Bad Reqeust : 클라이언트가 잘못된 요청을 해서 서버가 요청을 처리할 수 없음.

401 Unauthorized : 클라이언트가 해당 리소스에 대한 인증이 필요함.

- Authentication : 본인이 누구인지 확인 (로그인)
- Authorization : 권한 부여 (admin, manager …)

403 Forbidden : 서버가 요청을 이해했지만 승인을 거부함.

404 Not Found : 요청 리소스를 찾을 수 없음.

✔️ 5xx (Server Error)

500 Internal Server Error : 서버 문제로 오류 발생, 애매하면 500으로

503 Service Unavailable : 서버가 일시적인 과부하, 예정된 작업으로 잠시 요청을 처리할 수 없음. Retry-After 헤더 필드로 얼마뒤에 복구되는지 보낼 수도 있음.

웬만하면 5xx를 만들면 안됨. 진짜 서버에 문제가 있을 때 내야함.

---

## HTTP 헤더

✔️ 헤더 분류

- General : 메시지 전체에 적용되는 정보
- Request : 요청 정보
- Response : 응답 정보
- Represantaion : 표현 바디 정보
    - 표현? 표현 = 표현 메타데이터 + 표현 데이터
    - 메시지 본문을 Payload라고도 함.
![[http1.png]]
✔️ 표현

- Content-Type : 표현 데이터의 형식
- Content-Encoding : 표현 데이터의 압축 방식
- Content-Language : 표현 데이터의 자연 언어(ko, en, en-US …)
- Content-Length : 표현 데이터의 길이(byte 단위)

✔️ 협상

클라이언트가 선호하는 표현 요청

- Accept : 클라이언트가 선호하는 미디어 타입 전달
- Accept-Charset : 클라이언트가 선호하는 문자 인코딩
- Accept-Encoding : 클라이언트가 선호하는 압축 인코딩
- Accept-Language : 클라이언트가 선호하는 자연언어

협상 헤더는 요청시에만 사용!

- 협상과 우선순위
    - 0~1, 클수록 높은 우선순위

✔️ 전송 방식

- 단순 전송 : 길이 값을 알고 있을 때, 한 번에 싹다
- 압축 전송 : 압축 gzip, 어떤 방식으로 압축되었는지 알려줘야함
- 분할 전송 : 분할해서, Content-Length를 보내면 안됨.
- 범위 전송 : 범위를 지정해서 보냄
✔️ 일반 정보

- Form : 유저 이메일 정보
- Referer : 이전 웹 페이지 주소(뒤로가기, 유입 경로 분석)
- User-Agent : 내 웹 브라우저 정보
- Server : 요청을 처리하는 Origin 서버의 소프트웨어 정보, 진짜 나의 요청을 처리해주는 서버
- Date : 메시지가 발생한 날짜와 시간

✔️ 특별한 정보

- Host : 요청한 호스트 정보(도메인), 많이씀!, IP로만 알 수 없으니 사용
- Location : 페이지 리다이렉션
- Allow : 허용 가능한 HTTP 메서드
- Retry-After : 503 때 서비스가 언제까지 불능한지 알려줄 수 있음.

✔️ 인증

- Authorization : 클라이언트 인증 정보를 서버에 전달
- WWW-Authenticate : 리소스 접근 시 필요한 인증 방법 정의

✔️ 쿠키

사용처

- 사용자 로그인 세션 관리
- 광고 정보 트래킹

쿠키 정보는 항상 서버에 전송됨

- 네트워크 트래픽 추가 유발
- 최소한의 정보만 사용(세션id, 인증 토큰)
- 서버에 전송하지 않고 웹 브라우저 내부에 데이터를 저장하고 싶으면 웹 스토리지
- 보안에 민감한 데이터는 저장하면 안됨(주민번호, 신용카드 번호)

구성 요소

- 생명주기 Expires, max-age
    - 세션 쿠키 : 브라우저가 껴졌을 때
    - 영속 쿠키 : 생명주기를 적었을 때
- 도메인 Domain : 지정한 도메인에서 생성, 접근
- 경로 Path : 도메인과 마찬가지로 경로도 지정가능
- 보안 Secure, HttpOnly, SameSite

---

## 캐시

브라우저 캐시 공간에 저장해서 빠르게 처리 가능

캐시 유효 시간을 정할 수 있음.

만약 캐시 유효 시간이 초과하면 두 가지 상황이 나옴.

1. 서버에서 기존 데이터를 변경함
2. 서버에서 기존 데이터를 변경하지 않음

→ 검증 헤더 추가(Last-modified 응답, if-modified-since 요청)

✔️ 검증 헤더와 조건부 요청 1

- 캐시 유효 시간이 초과해도, 서버의 데이터가 갱신되지 않으면
- 304 Not Modified + 헤더 메타 정보만 응답 (body x)
- 클라이언트는 서버가 보낸 응답 헤더 정보로 캐시의 메타 정보 갱신
- 클라이언트는 캐시에 저장되어 있는 데이터 재활용!
- 결과적으로 네트워크 다운로드가 실행되지만 매우 적은 용량만 다운됨
- 매우 실용적!

✔️ 검증 헤더와 조건부 요청 2

검증 헤더

- 캐시 데이터와 서버 데이터가 같은지 검증하는 데이터
- Last-Modified, ETag

조건부 요청 헤더

- 검증 헤더로 조건에 따른 분기
- If-Modified-Since : Last-Modified 사용
- If-None-Match: ETag 사용
- 조건이 만족하면 200 OK
- 조건이 만족하지 않으면 304 Not Modified

✔️ Last-Modified, If-Modified-Since 단점

- 1초 미만 단위로 캐시 조정이 불가능
- 날짜 기반의 로직 사용
- 데이터를 수정해서 날짜가 다르지만, 같은 데이터를 수정해서 데이터 결과가 똑같은 경우
- 서버에서 별도의 캐시 로직을 관리하고 싶은 경우
    - ex) 스페이스, 주석처럼 크게 영향이 없는 변경에서 유지하고 싶은.

✔️ ETag, If-None-Match란?

- ETag(Entity Tag)
- 캐시용 데이터에 임의의 고유한 버전 이름을 달아둠.
    - ETag: “v1.0”, ETag: “asdlkfdsf”
- 데이터가 변경되면 이 이름을 바꾸어서 변경함(Hash를 다시 생성)
    - ETag: “aaaa” → ETag: “bbbb”
- 단순하게 ETag만 보내서 같으면 유지, 다르면 다시 받기!!
- 캐시 제어 로직을 서버에서 완전히 관리

### 캐시 헤더 정리

Cache-Control

- max-age : 캐시 유효 시간, 초 단위
- no-cache : 데이터는 캐시해도 되지만, 항상 진짜 서버에 검증하고 사용
- no-store : 데이터에 민감한 정보가 있으므로 저장하면 안됨.

Expires

캐시 만료일 지정(하위 호환)

지금은 더 유연한 Cache-Control: max-age 권장

ETag, Last-Modified : 검증 헤더(응답)

If-Match, If-None-Match : 조건부 헤더(요청), ETag

If-Modified-Since, If-Unmodified-Since : Last-Modified

### 프록시 캐시

![[http2.png]]

Cache-Control

- public : 응답이 public 캐시에 저장되어도 됨
- private : 응답이 해당 사용자만을 위한 것, private 캐시에 저장되어야 함
- s-maxage : 프록시 캐시에만 적용되는 max-age
- Age : 오리진 서버에서 응답 후 프록시 캐시 내에 머문 시간(초), 별로 안중요

확실한 캐시 무효화 응답

- Cache-Control : no-cache
    - 데이터는 캐시해도 되지만, 항상 원 서버에 검증하고 사용
- Cache-Control : no-store
    - 데이터에 민감한 정보가 있으므로 저장하면 안됨
- Cache-Control : must-revalidate
    - 캐시 만료 후 최초 조회시 원 서버에 검증해야함
    - 원 서버 접근 실패시 반드시 오류가 발생해야함
    - must-revalidate는 캐시 유효 시간이라면 캐시를 사용해야함
- Pragma : no-cache (HTTP 1.0 하위 호환)

✔️ no-cache vs must-revalidate

no-cache는 일단 서버장애가 나도 보여주긴함
![[http3.png]]
must-revalidate는 통장 잔고 같은거에 사용함
![[http4.png]]