button 같은 경우는 form으로 처리하고

데이터 get 경우 load function안에서 fetch를 사용해서 데이터를 로드하는게 맞지 않을까.

### Fetch 방법

1. `+page.server.js`의 `load` function 안에 작성
2. `+page.server.js`의 `actions` function 안에 작성
3. `+page.svelte` 에서 바로 작성(client code)