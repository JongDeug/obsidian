# Initial Setting(초기 세팅)

### 명령어
1. `npm init -y

2. `npm install -D ts-node nodemon`
	`ts-node`와 `nodemon` 세팅 방법(여러 방법 존재)

3. `npx tsc --init`
	`tscconfig.json` 파일 생성

---
### 파일 세팅
`package.json`
```json
  "scripts": {
    "start": "npm run build:live",
    "build": "tsc -p .",
    "build:live": "nodemon --watch 'src/**/*.ts' --exec 'ts-node' src/index.ts"
  }
```

`tscconfig.json`
```json
{
	"target" : "es2016", //Browser 호환, Internet Explorer => ES5
	"module" : "ES2015",
	"forceConsistentCasingInFileNames": true, //대소문자 구분
	"strict" : true,
	"skipLibCheck" : true, //실제로 쓰는 타입만 검사하도록
}
```