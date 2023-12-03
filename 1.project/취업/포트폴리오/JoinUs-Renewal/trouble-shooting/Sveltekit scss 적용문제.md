
### 문제 발생

Sveltekit에서 scss를 사용하는 방법은 알고 있었음.
근데 `@mixin` 을 글로벌하게 사용하려고 하니까 문제가 발생함

### 문제 해결

vite.config.ts
```javascript
import { sveltekit } from '@sveltejs/kit/vite';  
import { defineConfig } from 'vite';  
  
// scss global 옵션 생성  
const scssOptions = {  
    preprocessorOptions: {  
       scss: {  
          additionalData: `@import '$lib/scss/app.scss';`  
       }  
    }  
}  
export default defineConfig({  
    plugins: [sveltekit()],  
    // scss global 적용  
    css: scssOptions  
});
```

scss 폴더
	variable.scss
	mixin.scss
	app.scss

형식으로 만들어서 import 해주었음.

initial.css 파일은 콘솔에 자꾸 알림이 와서 root +layout.svelte 파일에 바로 import 시킴.
