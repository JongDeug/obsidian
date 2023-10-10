# 기본 지식, Tip

### 기본 지식
- 메인 룰: typescript는 최종적으로 javascript로 변환된다. 
- typescript는 언어이자 컴파일러(`tsc`)이다. 컴파일러는 ts 코드를 js로 바꿔준다.
- `tsc`는 `tsconfig.json`에 따라 ts 코드를 js로 바꿔준다. 인풋인 ts와 아웃풋인 js 모두에 영향을 끼치므로 `tsconfig.json` 설정을 반드시 봐야 한다.
- 단순히 타입 검사만 하고 싶다면 `tsc --noEmit` 하면 된다.
- `tsconfig.json`에서 그냥 `esModuleInterop: true, strict: true` 두 개만 주로 킨다.

---
### Tip
-  타입 추론을 적극적으로 사용하자.
- `any`는 최대한 쓰지 않는 것을 목표.
- `:` 뒷부분, `as` 뒷부분, `<>` 부분, `interface`, `type`, `function` 일부를 제외하면 자바스크립트와 동일. 제외하고 생각하는 연습을 초반에 해야 함.
- ts가 추론해주는 타입이 있는데 이런 건 그냥 그대로 사용하면 됨. ts가 추론하지 못하는 경우에만 직접 타이핑할 것.