
### 문제 발생

모듈을 만들어서 import 했는데 에러가 발생함. 

### 문제 해결

Typescript는 기본적으로 파일을 불러 올 때 `.ts` 확장자를 사용하지 않고 불러옴.
`.ts` 확장자를 사용해서 import 하고 싶다면 `tsconfig.json`에 `allowImportingTsExtensions`를 설정하면 됨.
