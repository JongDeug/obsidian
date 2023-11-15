JoinUs 프로젝트를 할 때 store로 고생을 많이 했는데 docs를 보고 공부를 하고 나니
어떤 점이 잘못 됐는지 파악됐다.

일단 내가 알고 있는 store는 전역적으로 사용할 수 있는 저장소다.
![[Pasted image 20231115145419.png]]

100번 맞는 말이다. 
Svelte 최상위 루트인 App.svelte에서 시작해서 그 아래 자식들은 store를 활용해 전역적으로 데이터를 다룰 수 있다.

### 문제 해결

하지만 Sveltekit은 다르다. SvelteKit은 각 route 마다 +page.svelte가 있다. 즉, +page.svelte안에서의 component끼리는 데이터를 공유할 수 있지만 ==다른 route끼리는 store를 전역적인 저장소로 활용할 수 없다.==

여러가지 방법으로 해결할 수 있는데(store와 local, session storage 연결 등) 가장 적합한 방법은
`setContext`와 `getContext`를 활용하는 방법이다.

[The Correct way to use stores in sveltekit](https://dev.to/jdgamble555/the-correct-way-to-use-stores-in-sveltekit-3h6i)

