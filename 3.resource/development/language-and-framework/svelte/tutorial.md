
# Part 1: Basic Svelte

## *Introduction*
### Adding data
```html
<script>
	let name = 'Svelte';
</script>

<h1>Hello {name.toUpperCase()}!</h1>
```

### Dynamic attributes
```html
<script>
	let src = '/image.gif';
	let name = 'Rick Astley';
</script>

<img {src} alt="{name} dances." />
```

### Styling
Component 범위 안에서의 태그만 스타일링 가능함.

### Import Component
```html
<script>
	import Nested from './Nested.svelte';
</script>

<p>This is a paragraph.</p>
<Nested />

<style>
	p {
		color: goldenrod;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
	}
</style>
```
Component names are always capitalised.

### HTML tags
```html
<script>
	let string = `this string contains some <strong>HTML!!!</strong>`;
</script>

<p>{@html string}</p>
```

---

## *Reactivity*

### Assignments,  Reactive declarations
```html
<script>
	let count = 0;
	$: doubled = count * 2;

	function increment() {
		count += 1;
	}
</script>

<button on:click={increment}>
	Clicked {count}
	{count === 1 ? 'time' : 'times'}
</button>

<p>{count} doubled is {doubled}</p>
```

$ : ~ (Reactive declarations)
- re-run this code whenever any of the referenced values change.
- will run after other script code and before component markup is rendered.

Reactive declarations 에서 blockㄴ {} 으로 묶을 수 있으며, if blocks 도 넣을 수 있음.

### Updating arrays and objects
```html
<script>
	let numbers = [1, 2, 3, 4];

	function addNumber() {
		numbers = [...numbers, numbers.length + 1]; // 올바른 방법
		numbers.push(numbers.length + 1); // 틀린 방법
	}

	$: sum = numbers.reduce((total, currentNumber) => total + currentNumber, 0);
</script>

<p>{numbers.join(' + ')} = {sum}</p>

<button on:click={addNumber}>
	Add a number
</button>
```

반응형은 할당에 의해서 트리거 된다. 따라서 using array methods like `push` and `splice` won't automatically cause update.

---
## *Props(Properties)*

### Declaring props
```html
<script> export let answer; </script>
```
That's not how `export` normally works in Javascript modules.

### Defaults values
App.svelte
```html
<script>
	import Nested from './Nested.svelte';
</script>

<Nested answer={42} />
<Nested />
```
Nested.svelte
```html
<script>
	export let answer = 'a mystery';
</script>

<p>The answer is {answer}</p>
```

Nested.svelte 에 값을 할당 시키면 default 값으로 사용할 수 있음.

### Spread props
```html
<PackageInfo {...pkg} />
```
만약 넘겨주려는 props가 PackageInfo에서 받는 props랑 같다면 spread 문법을 사용하면됨.
반대로 Childcomponents 에서 받은 전체 데이터를 확인하고 싶으면 `$$props`를 사용하면 되나 일반적으로 추천하지 않음.

---

## *Logic*

### If blocks & Else blocks & Else-if blocks
```html
{#if count > 10} 
	<p>{count} is greater than 10</p>
{:else if count < 5} 
	<p>{count} is less than 5 </p>
{:else} 
	<p>{count} is between 0 and 10</p>
{/if}
```

`#`  : a block opening tag
`/` : a block closing tag
`:` : a block continuation tag 

### Each blocks
```html
// You can get the current index as a second argument!!
{#each colors as color, i}
	<button
		aria-current={selected === color}
		aria-label= color
		style="background: {color}"
		on:click={() => selected = color}
	>{i+1}</button>
{/each}
```
The expression can be any array or array-like object (it has a `length` property)

### Keyed each blocks
```html
{#each things as thing (thing.id)} 
	<Thing name={thing.name}/> 
{/each}
```

(thing.id) 는 업데이트 될 때 변경할 DOM node를 파악하는 방법을 Svelte에게 알려주는 key 이다.
그렇지 않으면 마지막 DOM node 변경하는 원치 않은 오류를 발생시킨다. 

++ Svelte는 내부적으로 Map(Hash 알고리즘 사용)를 사용하므로 (thing.id) 대신 (thing)을 key로 사용해도 된다.

### Await blocks
```html
{#await promise} 
	<p>...waiting</p> 
{:then number} 
	<p>The number is {number}</p> 
{:catch error} 
	<p style="color: red">{error.message}</p> 
{/await}

or 

{#await promise then number}
	<p>The number is {number}</p>
{/await}
```


## *Events*

### DOM events
`on:` pointermove, click ... etc

### Event modifiers
```html
<button on:click|once|capture={() => alert('clicked')}> 
	Click me 
</button>
```
chain 형식으로도 가능.
[7 Event modifiers](https://dev.to/tanhauhau/7-event-modifiers-in-svelte-you-must-know-27oc)

### Components events
Components can also dispatch* 보내다, 발송하다 events. 
To do so!
`Inner.svelte`
```html
<script>
	import { createEventDispatcher } from 'svelte'; 
	const dispatch = createEventDispatcher();
	function sayHello() { dispatch('message', { text: 'Hello!' }); }
</script>
```
`App.svelte`
```html
<script>
	import Inner from './Inner.svelte';

	function handleMessage(event) {
		alert(event.detail.text);
	}
</script>
<Inner on:message={handleMessage} />
```

### Event forwarding
![[Drawing 2023-09-26 19.06.38.excalidraw.png]]
Inner에서 App으로 event를 보내주려면 forwarding 필요.
Outer에서 Inner와 같이 똑같이 작성해줘야 하지만,
Svelte는 `<Inner on:message/>`와 같이 shorthand를 제공해줌.

### DOM Event forwarding
Event forwarding works for DOM events too.

## *Binding*

### Text Inputs
We can use the `bind:value`
This means that not only will changes to the value of name / (that?) update the input value, but changes to the input value will update name.

input을 바꾸면 name도 바꿔지고,
name을 바꾸면 input도 바꿔진다.

### Numeric inputs
```html
<input type="number" bind:value={a} min="0" max="10" />
```

### Checkbox inputs
```html
<input type="checkbox" bind:checked={yes}>
```

### Select bindings
```html
<select 
	bind:value={selected} 
	on:change={() => answer = ''} 
>
```

### Group inputs
input 태그에서 같은 name으로 그룹을 형성하면 
type이 radio인 경우 bind:group에 해당 value가 저장되고,
type이 checkbox인 경우 bind:group에 체크한 value가 배열에 저장된다.

### Select mutiple
select 태그에 mutilple 이라는 속성이 있음. 
`control`키를 누르면 여러개를 선택할 수 있음. 
```html
<select multiple bind:value={flavours}> 
		{#each ['cookies and cream', 'mint choc chip', 'raspberry ripple'] as flavour}
		<option>{flavour}</option> 
	{/each} 
</select>
```
여러 개 선택 시 value에 배열이 주르륵 들어감.
단일 선택 시 한 개만 들어감.

### Textarea inputs
```html
<textarea bind:value></textarea>
```
The `<textarea>`  element behaves similarly to a text input in Svelte

## **Lifecycle**

### onMount
모든 컴포넌트에는 lifecycle이 존재한다.
가장 많이 사용할 onMount는 컴포넌트가 DOM에 처음 렌더링된 후 작동된다.
```html
<script>
	import {onMount} from 'svelte';
	import { paint } from './gradient.js';

	onMount(() => {
		const canvas = document.querySelector('canvas');
		const context = canvas.getContext('2d');

		requestAnimationFrame(function loop(t) {
			requestAnimationFrame(loop);
			paint(context, t);
		});
	})
</script>
```

### beforeUpdate and afterUpdate

일단 처음 Component가 마운트가 되기 전 beforeUpdate 시작
그리고 DOM이 업데이트 되기 전 시작.
DOM이 업데이트 된 후 afterUpdate 시작.


렌더링과 마운트 차이?
스벨트에서 표현하는 것을 정리해보면 만들어진 DOM에 컴포넌트가 rendering(시멘트칠, 주다, 제공하다)되면 마운트가 작동함. ㅇㅋ? 

즉 *초기 실행순서는*
1. component를 DOM에 rendering
2. beforeUpdate
3. onMount
4. afterUpdate

### tick
불필요한 작업을 피하고, 브라우저가 일괄 처리를 효율적으로 하기 위해서 스벨트는 컴포넌트 상태를 업데이트 할 때 바로 DOM을 업데이트 시키지 않는다.

하지만 tick을 사용하면 그 시점에서 바로 컴포넌트 상태를 DOM에 업데이트 해준다(사용 시 Promise를 반환). 
tick은 언제든 사용 가능하다. 



## Stores

### Writable stores

store is simply an object.

writable store 은 
- `subscribe` 
```javascript
count.subscribe((value) => {
	count_value = value;
});
```
- `set`
```javascript
count.set(0);
```
- `update`
```javascript
count.update((n) => n - 1);
```

### Auto-subscriptions

> Calling a `subscribe` method returns an `unsubscribe` function

반환 값을 받고 `onDestroy(unsubscribe)`로 memory leak을 방지할 수 있지만 여러 stores를 구독하면 반복적인 코드가 생성됨.

Svelte는 다 지우고 `$` 를 붙이면 자동 구독(+ 구독 취소)이 된다고 알려줌.
> 기본적으로 변수 앞에 `$`를 붙이면 store로 추정함. 이외에는 Svelte에서 prevent해줌.

`$`: 를 가진 store value는 마크업 뿐만 아니라 `<script>` 에서도 사용 가능함.

### Readable stores

```javascript
export const time = readable(null, function start(set) {
	// setup code goes here
	set();
	
	return function stop() {
		// teardown code goes here
	};
});
```

1번째 인자는 initial value
2번째 인자는 start function, 반환 값은 stop function

start function은 처음 구독자가 읽을 때 호출.
stop function은 마지막 구독자가 unsubscribe 했을 때 호출.

### Derived stores

다른 store를 가지고 파생 stores를 만들 수 있음.

함수에 대한 타입과 정보는 Docs를 참고.

```javascript
export const elapsed = derived(
	time, 
	($time) => Math.round(($time - start) / 1000) 
);
```

### Custom stores

객체가 `subscribe` method만 제대로 구현한다면 그건 store이다.

store.js
```javascript
import { writable } from 'svelte/store';

function createCount() {
	const { subscribe, set, update } = writable(0);

	return {
		subscribe,
		increment: () => {update((n) => n + 1)},
		decrement: () => {update((n) => n - 1)},
		reset: () => {set(0)}
	};
}
```

### Store bindings

store를 바인딩 시켜줄 수 있음.
set, update 없이 바로 가능하네 좋다!
```html
<input bind:value={$name}>
```

# Part 2: Advanced Svelte

## *Motion*

시각 효과를 주기 위해서 `writeable` 대신 사용함.
- Tweens 
- Springs
	often works better for values that frequently changing than Tweens.


## *Transitions*

### The transition directive

- fade
- fly
- In and out(fade와 fly 등을 컨트롤 할 수 있음)

### Custom CSS transitions, Custom JS transitions

fade, fly 와 같은 transition 들을 만들 수 도 있음.

CSS 만으로 안되는 것들도 `tick()` 안에 JS를 통해서 만들 수 있는듯.

### Transition events

`on:introstart`
`on:introend`
`on:outrostart`
`on:outroend`
와 같은 Event를 통해서 can know when transitions are beginning and ending

### Global transitions

`global` 태그를 붙여주면 개별 블록에만 transition이 적용되지 않고 광범위하게 적용된다.

Svelte 3에서는 `global`이 default 값이라 로컬로 바꿔주고 싶으면 `local` 키워드를 붙여주면 된다.

### Key blocks

보통 사용자가 action을 취하면 transition이 일어난다. (+ when the element enters or leaves the DOM.)
하지만 사용자가 action을 취하지 않은 경우에도 transition이 일어나는 것을 본 적이 있다.

값이 바뀔 때마다 transition 작동 ?! )
	value가 (여기선 `i`) 바뀌었을 때마다 블록 안에 있는 transition을 작동하게 만들 수 있는데,
	`{#key i}{/key}` 를 사용하면 된다.


### Deferred transitions

보내고, 받고 같이 transition을 연기하여 여러 요소 간에 조정을 할 수 있는 기능이다.
이건 tutorial 예제 코드를 참고하길. 

어려웡!


## *Animations*

### The animate directive

이전 튜토리얼에서 todo 리스트를 왔다 갔다 이동 시켰는데 그 외 리스트들이 좀 딱딱하게 움직였다.(나머지 리스트들이 올라오고 내려가고)

근데 `animate` directive를 사용해서  `animate:flip={{duration:1000}}` 을 했더니 !!
나머지 리스트들이 이쁘게 올라오고 내려갔다.

## *Actions*

### The use directive

Actions 은 element-level lifecycle functions 이다

- interfacing with third-party libraries
- lazy-loaded images
- tooltips
- adding custom event handlers

이 4가지에 유용하게 사용된다.

튜토리얼에서는 아마도 custom event handlers에 해당하는 것 같다.

`<div class="menu" use:trapFocus>`


### Adding parameters

transitions 와 animations 와 같이 action 도 argument를 가질 수 있다. 
tutorial 에서는 tooltip 예제를 다룬다.




## *Advanced bindings*

### Contenteditable

`contenteditable` attribute support `textContent` and `innerHTML` bindings.

```html
let hmlt = '<p>Hello</p>'
<div bind:textContent={html} contenteditable/>
<div bind:innerHTML={html} contenteditable/>
```

## *Each block bindings*

`each` block 안에도 `bind` 를 사용할 수 있음.

> [!note] Note!
>  하지만 array를 mutate 시키기 때문에 immutable data를 사용하고 싶으면 event handlers를 쓰도록 해.

### Media elements

Media elements 에도 `bind`를 해서 편하게 다룰 수 있음.
필요하면 예제 참고하기!

### Demensions

Every block-level element has `clientWidth` `clientHeight` `offsetWidth` `offsetHeight` bindings!!!(+ These bindings are readonly)

### This

`document.querySelector('canvas')` 우리가 이 구문을 썼을 때,
It might not be the one belonging to our component 

대신에 
```html
<canvas bind:this={canvas} width={32} height={32}>
</canvas>
```

`bind:this={canvas}` 를 쓰면 된다.

### Component bindings

다른 Component에 바인딩을 할 수 있음.

```html
<Keypad bind:value={pin} on:submit={handleSubmit} />
```

> [!note] 주의!
> 너무 많이 사용하면 데이터 흐름을 추적하기 어렵기 때문에 조금만 사용하세요.

### Binding to component instances

Canvas Component instance에
`<Canvas bind:this={canvas} color={selected} size={size} />` 를 사용했다면 canvas의 메소드를 쓸 수 있다.

메소드는 export function으로 정의하면 된다.

%% 잘 몰랐을 때 dispatch 를 사용해서 다룰려고 했었는데 그냥 이거 사용해야했네! %%

## *Classes and styles*

### The class directive

```html
<button class="card {flipped ? 'flipped' : ''}" 
		on:click={() => flipped = !flipped} >
```

class에 이걸 많이 써서 Svelte에서는 special directive 를 제공해줌

```html
<button class="card" 
		class:flipped={flipped} 
		on:click={() => flipped = !flipped} >
```

`{flipped}` 가 참이면 `:flipped` 라는 class를 추가해줌.

### Shorthand class directive

`class:flipped={flipped}` 처럼 이름이 같은 경우가 많기 때문에 Svelte에서는 shorthand를 제공해줌.

`class:flipped`

### The style directive

`class` 와 마찬가지로 `style` attribute에도 삼항 연산자를 적용할 수 있음.

```html
<button class="card" 
		style="transform: {flipped ? 'rotateY(0)' : ''}; --bg-1: palegoldenrod; --bg-2: black; --bg-3: goldenrod" 
		on:click={() => flipped = !flipped} >
```
It looks a bit weird!

so,
```html
<button 
		class="card" 
		style:transform={flipped ? 'rotateY(0)' : ''} 
		style:--bg-1="palegoldenrod" 
		style:--bg-2="black" 
		style:--bg-3="goldenrod" 
		on:click={() => flipped = !flipped} >
```

### Component style

개별적으로 component에 style을 지정할 수 있음.

예제 참고하기!!

유용할 듯

CSS custom property를 사용하는 것임.


```html
<style> 
	.box { 
		width: 5em;
		height: 5em; 
		border-radius: 0.5em; 
		margin: 0 0 1em 0;
		background-color: var(--color, #ddd); } 
</style>
```

```html
<div class="boxes"> 
	<Box --color="red" /> 
	<Box --color="green" /> 
	<Box --color="blue" /> 
</div>
```


## *Component composition(구성 요소들)*

### Slots

Component에 `<slot />` 넣으면 외부에서 Component 내부 내용을 채울 수 있음.

### Named slots

`<slot />`은 그냥 default 이지만 우리는 control이 필요할 때가 있음.

따라서 
```html
<div class="card"> 
	<header> 
		<slot name="telephone" /> 
		<slot name="company" /> 
	</header>
</div>
```

```html
<Card>
		<span slot="telephone">212 555 6342</span>

		<span slot="company">
			Pierce &amp; Pierce
			<small>Mergers and Aquisitions</small>
		</span>
</Card>
```

이런 식으로 slot에 name을 붙이면 원하는 곳에 element를 넣을 수 있다.

### Slot fallback
fallback : 대안, 대비책

만약 slot에 아무것도 들어와 있지 않다면 
```html
<slot name="telephone"> 
	<i>(telephone)</i> 
</slot>
```
fallback 을 `(contents)` 지정해줄 수 있음.

### Slot props

slot 에도 props 를 넣을 수 있음. `<slot item={item} />`

그럼 slot에 내용물을 넣는 쪽에서 `let:` directive를 사용해서 `let:items={rows}` rows를 활용하면 됨.

예제 보는게 더 빠를듯.

#게시판나열  #검색

### Checking for slot content

만약 부모가 slot에 element들을 넣었는지 넣지 않았는지 확인 하고 싶다면 자식 컴포넌트에서 `$$slots` 변수를 사용하면 된다.
```html
{#if $$slots.header} 
	<div class="header"> 
		<slot name="header"/> 
	</div> 
{/if}
```
부모가  `<div slot="header" />` 를 전달해줬다면 `true` 아니면 `false` 가 됨.

## *Context API*

### setContext and getContext

Advanced bindings 에서 [[#Binding to component instances]] 는 부모 자식 간에 데이터를 다뤘는데 이건 더 넓은 범위에서 다룸.

> [!note] 주의!!!
> setContext와 getContext는 반드시 parent child 관계를 가져야 한다. 그냥하면 에러가 뜸.
> 
> keep in mind that `getContext` is only gonna work for children of the `setContext` component




## *Special elements*

### <svelte:self>

a module can't import itself. 
하지만 `<svelte:self>` 를 사용한다면 재귀적으로 사용가능하다.

### <svelte:component>

`select` 태그에서 value를 바인딩해서  `<svelte:component this={selected.component}/>` 로
해당 색깔을 선택했을 때 원하는 Component를 갈아 끼울 수 있게끔 만들어 줌.

예제를 보면 이해가 깔끔함. 

### <svelte:element>

어떤 태그들이 랜더될지 다 알 수 없는 경우가 있다.
`<svelte:element>` comes in handy here. (유용하다.)
`<svelte:component>` 와 같이 `if` blocks 를 대체할 수 있음.

예제 보기!

### <svelte:window>

`window` 객체에 `<svelte:window>` 를 사용해서 event listeners 를 추가할 수 있다.

예제 참고!

### <svelte:window> bindings

바인딩 또한 할 수 있다!

```html
<svelte:window bind:scrollY={y}/>
```

binding 할 수 있는 속성들이 있는데 
예제를 참고하면 되겠다.
`scrollY` 와 `scrollX` 를 제외하고 모두 readonly임.

### <svelte:body>

similar to `<svelte:window>` 

event listeners 를 추가할 수 있고 `document.body` 에서 발생하는 이벤트를 수신할 수 있다.

useful with the `mouseenter` and `mouseleave` events, which don't fire on `window`

> [!note] Note
> document 객체와 window 객체에는 수용 가능한 eventList가 다르다!!

### <svelte:document>

`document` 에서 발생하는 events를 수신할 수 있다!

useful with events like `selectionchange`, which doesn't fire on `window`

> [!note] Note
> `mouseleave` and `mosueenter` 은 `document` 에서 발생하지 않는다. 따라서 `<svelte:body>`를 대신쓰자.

### <svelte:head>

head 부분에 elements를 삽입할 수 있음.

useful for things like `<title>` and `<meta>` tags, which are critical for good SEO(검색엔진 최적화)

```html
<svelte:head> 
	<link rel="stylesheet" href="/stylesheets/{selected}.css" /> 
</svelte:head>
```

### <svelte:options>

예제를 보면 DOM을 변경하지 않더라도 업데이트된 `todos` array가 생성되면서 `done` 상태를 바꾸기 때문에 모두 flash 가 적용된다.

이는 우리가 `todo` property를 절대로 변경하지 않겠다고 약속(대신 상황이 바뀔 때마다 새로운 객체를 생성할 것을 의미함)하면 해결할 수 있다.

`<svelte:options immutable={true} />`
or
`<svelte:options immutable/>`

여러 옵션들이 있는데 예제를 참고하길 바람.

### <svelte:fragment>

컨테이너 DOM 요소에 cotents를 래핑하지 않고 named slot에 콘텐츠를 배치할 수 있다.

예제를 보면 Board.svelte의 `<div class="board" style="--size: {size}">` 에 직계 자손이여야 하는데 App.svelte의 `<div slot="game">`에 직계 자손이므로 `<svelte:fragment>` 를 사용하면 해결됨.


## *Module context*

### Sharing code

```html
<script context="module"> 
	let current; 
</script>
```

Code will run once, when the module first evaluates, rather than when a component is instantiated.

예제를 보면 AudioPlayer가 여러 개이다. 때문에 현재 상태를 저장하려면 static 같이 공통된 변수가 있어야 한다. `<script context="module">` 을 사용하면 해결 할 수 있다.

### Exports

바로 위 Sharing code `context="module"` 에서 변수나 함수를 export 를 할 수 있음.

예제 참고

> [!note] NOTE
> default export는 사용할 수 없다. component가 default export 이기 때문.

## *Miscellaneous(여러 가지 종류의)*

### The @debug tag

말 그대로 디버그 태그
It's useful to inspect a piece of data as it flows through your app.


# Part 3: Basic Sveltekit

## *Introduction*

Svelte가 component framework 라면 
SvelteKit은 app framework 이다.

- Routing
- Server-side rendering
- Data fetching
- Service workers
- Typescript Integration
- Prerendering
- Single-page apps
- Library packaging
- Optimised production builds
- Deploying to different hosting providers

등등 여러 가지 기능을 가지고 있다.

## *Routing*

### Pages

`+page.svelte` : /
about 폴더의 `+page.svelte` : /about

### Layouts

`+layout.svelte` 
`<slot />` 사용해서 배치하면 됨.

### Route parameters

`src/routes/blog/[slug]/+page.svelte` 의 `[slug]` 와 같이 dynamic parameter를 사용할 수 있음.

/blog/one, /blog/two 같은 게 가능함.

Mutiple oute parameters도 된다는데 잘 모르겠음.

## *Loading data*

### Page data

`+page.server.js` 에서 `load` function을 사용하면 해당 route에 필요한 data를 loading 할 수 있음.

예제에서는 튜토리얼이라 `data.js` 를 import 했지만 database에서 가져와서 `load` 해도 됨!

throw error! 에러 던지기
```javascript
import { error } from '@sveltejs/kit'; 
import { posts } from '../data.js'; 

export function load({ params }) {
	const post = posts.find((post) => post.slug === params.slug); 
	
	if (!post) throw error(404); 
	
	return { post }; 
}
```

### Layout data

`+layout.server.js` 에 `load` function을 사용하면 자식 route 까지 데이터를 loading 할 수 있음.

기존 `+page.server.js` 는 해당 `+page.svetle` 에서 밖에 사용하지 못했음.
`+layout.server.js` 를 사용하면 `+page.svelte` 뿐만 아니라 자식 route 의 `+page.svelte` 에서도 데이터를 사용할 수 있다.

## *Headers and cookies*

### Setting headers

`load` function 안에서  응답에 대한 헤더를 설정할 수 있는 `setHeaders` 함수에 접근 할 수 있다. 

예제 참고!

아직 어디다가 쓰는지 잘 모르겠음.

### Reading and writing cookies

`setHeaders` function 은 `Set-Cookie` header 와 같이 사용하지 못한다. 대신 `cookies` API를 사용해야 한다.

`cookies.get()` `cookies.set(name, value, options)` 를 통해서 읽고 쓸 수 있다.

`options` 의 `path`는 명확하게 설정할 것을 강력하게 추천한다고 하네요.

## *Shared modules*

### The $lib alias

`src/lib` 에 나만의 모듈을 만들었으면 
`src` 안에 존재만 한다면 `$lib` alias로 간편하게 접근할 수 있다.

즉, `import { message } from '../../../../../../lib/message.js';` 이 코드를 
`import { message } from '$lib/message.js';` 이렇게 간편하게 만들 수 있다는 것!

전에 이것 때문에 고생 좀 했는데 ㅠㅠ.
## *Forms*

### The `<form>` element

`<form>` 태그를 사용해서 Todo list를 업데이트하는 예제이다.

`+page.server.js` 에 `actions` 함수를 만들어서 POST 되면 리스트가 생성된다. 코드를 자세히 참고하면 되겠다.

`<form>` 태그를 사용했기 때문에 `fetch` 같은 걸 사용할 필요도 없고 Javascript가 작동되지 않거나 사용하지 않아도 작동이 가능하다.
<<<<<<< HEADF

### Named form actions

`actions` function 에 `default` 말고도 원하는 이름을 지을 수 있다. 
구현은 예제 참고!

`<form method="POST" action="?/delete">` 
`form` 태그의 `action` 속성에 경로와 원하는 이름을 설정하고 `+page.server.js`안에 `action` 객체 안에 `delete` function을 구현하면 된다.

`action` function이 다른 페이지에 정의됐다면  `/todos?/delete` 와 같이 `?` 앞에 경로를 맞추면 된다.

### Validation

사용자는 말썽꾸러기들이라 요청한 값이 쓸모없거나 위험한 값일 수도 있다.

막는 방법은

1. 프론트 단에서 막기
2. 서버에서 막기
3. DB에서 막기

정도가 되겠는데 

프론트 단에서 막기는 쉬우니까 제외하고 

서버에서 value checking 을 통해 해결하고 오류가 발생할 경우 `throw new Error`를 사용하면 된다.

`+page.server.js` 에서는 

```javascript
import { fail } from '@sveltejs/kit';
import * as db from '$lib/server/database.js'; 

export function load({ cookies }) {...} 
export const actions = { 
	create: async ({ cookies, request }) => {
	 const data = await request.formData(); 
	 try { 
		 db.createTodo(cookies.get('userid'), 
		 data.get('description')); 
	} catch (error) {
		 return fail(422, { 
			 description: data.get('description'), 
			 error: error.message }); 
		} 
	}
```

와 같이 `fail` 을 사용하여 에러를 던져주면 된다.

하지만 이 에러를 유저가 어떻게 확인해야 할까?

바로 `+page.svelte` 에서 `export let form` 선언하고 `form` 객체를 사용해서 페이지에 나타내면 된다!!
(+굳이 `fail` 로 묶지 않아도 됨.)

### Progressively Enhance

`form` 태그는 사용자가 Javascript를 가지고 있지 않아도 기능이 실행됨.

근데 대부분의 사용자가 Javascript를 가지고 있기 때문에 
`import { enhance } from '$app/forms';`
`<form method="POST" action="?/create" use:enhance>`

이렇게 `form` 태그에 `use:enhance`를 사용하면 full-page reload 기능 빼고 브라우저의 기본 행동을 에뮬레이트 할 것임.

즉, `form` 태그의 기능이 강화됨. 
기존에는 적용되지 않던 Transition 같은 기능을 사용할 수 있고, 여러 가지 기능들이 업그레이드 된다는 데 읽어봐도 잘 모르겠음. (튜토리얼 참고하면 나옴)


### Customizing use:enhance

예제에서 slow networking을 시뮬레이트 함.
`await new Promise((fulfil) => setTimeout(fulfil, 1000));`

`use:enhance`를 통해서 느린 네트워크에서 create, delete 할 때의 동작을 컨트롤함.

create 중일 때는 `input` 태그의 disabled 속성을 컨트롤하고 로딩 동작을 추가.

delete 중일 때는 네트워크가 느려도 DB에서와는 다르게 유저에게 바로 삭제되는 모습을 보여주기 위해 `deleting` 배열을 만들어서 컨트롤함. 
코드에서 `await` 가 있는데 어떻게 `todos`를 바로 컨트롤 하여 보여주지? 라는 의문점을 가졌는데 `deleting` 배열이 변경 됨에 따라 `{#each data.todos.filter((todo) => !deleting.includes(todo.id)) as todo (todo.id)}` 이 코드도 같이 실행되게 때문에 컨트롤이 가능하다는 결론을 내렸음.

===`use:enhance={function}` 의 function을 통해서 submit 할 때의 동작을 결정할 수 있는 것 같음.===

> [!note] NOTE
> It's a little confusing that the `enhance` action and `<form action>` are both called 'action'. 
> 기존 html submit 버튼? 이 없어서 헷갈렸는데 둘 다 똑같이 action function을 호출하기 때문에 저기서 백엔드 API를 호출하면 될 것 같음.
> 
> + submit 할 때 프론트 단에서의 변경을 컨트롤 하려면 highlight와 같이 function에 뭔가를 넣으면 되고, 백엔드 API를 호출 시 컨트롤 동작은 `+page.server.js` 의 action function에서 구현하면 될 것 같음. 그러면 코드도 분리되고 깔끔하게 개발할 수 있을 것 같음.

`use:enhance` 에는 다양한 이벤트들이 있으므로 Docs를 참고할 것.

