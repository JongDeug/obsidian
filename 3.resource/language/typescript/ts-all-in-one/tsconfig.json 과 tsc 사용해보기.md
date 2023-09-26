
## 초기 설정

1. npm init -y
2. npm i typescript
3. npx tsc --init
4. npx tsc --Emit (타입 검사), npx tsc (convert ts to js)

## tscconfig.json

```json
{
	"target" : "es2016", //Internet Explorer에서 돌아갈 수 있게끔 설정할 수 있음 => "ES5"
	"module" : "ES2015",
	"forceConsistentCasingInFileNames": true, //대소문자 구분
	"strict" : true,
	"skipLibCheck" : true, //실제로 쓰는 타입만 검사하도록
}
```


