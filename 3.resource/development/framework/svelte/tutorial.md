
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
- blur
- slide
- scale
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

`src/routes/blog/[slug]/+page.svelte` 의 `[slug]` 와 같이 dynamic parameter를 사용할 수 있음. ^16e604

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

기존 `+page.server.js` 는 해당 `+page.svelte` 에서 밖에 사용하지 못했음.
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

> [!note] NOTE
> 쿠키의 path란?
> - exampleCookie.setPath("/") 처럼 설정하면 모든 경로에서 쿠키를 쓸 수 있다는 뜻(어떤 요청이 오던 cookie 값을 전달해주겠다.)
> - 특정 디렉토리, 특정 경로에서만 쿠키를 쓰고 싶다면 setPath안에 다른 경로를 적어주면 됨.

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

## *API routes*

### GET handlers

/roll/+server.js
```javascript
import { json } from '@sveltejs/kit';

export function GET() {
	const number = Math.floor(Math.random() * 6) + 1;

	return json(number);
}
```

+page.svelte
```javascript
async function roll() {
	const response = await fetch('/roll');
	number = await response.json();
}
```

fetch 를 사용하는 방법도 있다.
export function을 HTTP methods(GET, PUT, POST, DELETE, PATCH) 와 동일하게 작성하면 된다.

### POST handlers

> [!note] NOTE
> form actions를 사용하는 것이 여러 측면에서 낫다

/todo/+server.js
```javascript
import { json } from '@sveltejs/kit';
import * as database from '$lib/server/database.js';

export async function POST({ request, cookies }) {
	const { description } = await request.json();

	const userid = cookies.get('userid');
	const { id } = await database.createTodo({ userid, description });

	return json({ id }, { status: 201 });
}
```

+page.svelte
```javascript
const response = await fetch('/todo', {
	method: 'POST',
	body: JSON.stringify({ description }),
	headers: {
		'Content-Type': 'application/json'
	}
});
```

> [!note] NOTE
> 내가 볼 땐 fetch, axios 사용해서 2중으로 코드 정리할 빠엔 form이 더 깔끔할 것 같긴해.

### Other handlers

코드 참고. (PUT, DELETE)

## *Stores*

### page

```javascript
<script>
	import { page } from '$app/stores';
</script>

$page.url.pathname
```

이렇게 쓸 수 있음. `url` 외에 여러 가지 변수로 접근할 수 있는데 참고.

### navigating

### updated

둘 다 쓰임새는 알겠는데 잘 쓰이지 않을 것 같음.

## *Errors and redirects*

### Basic

에러에는 expected error 와 unexpected error 가 존재함.
expected error 는 사용자에게 에러가 보여지며,
unexpected error 는 사용자에게 500(Internal error)를 주며 개발자에게 에러가 보여짐.

### Error pages

예상되는 에러는 해당 라우팅 폴더 안에 +error.svelte 작성.
예상되지 않는 에러는 routes 폴더 상위에 +error.svelte 작성.

### Fallback errors

fallback : 대비책

만약 일이 정말 잘못됐을 때,
예를 들어 root layout data가 오류가 났거나, 오류 페이지 랜더링에서 오류가 났을 경우
Sveltekit은 static error page를 대비책으로 띄울 것임.

`/src/error.html` 이처럼 src 경로에 error.html을 만들어 줌.
```html
<h1>Game over</h1> <p>Code %sveltekit.status%</p> <p>%sveltekit.error.message%</p>
```

### Redirects

```javascript
import { redirect } from '@sveltejs/kit'; 
export function load() { 
	throw redirect(307, '/b'); 
}
```

throw redirect()는 load functions, form actions, API routes, handle hook에 사용할 수 있음.

> [!note] NOTE 
> redirect를 하는 방법은 다양하다! form 이라면 use:enhance에서 {result} 에 뭔가를 담아서 goto를 사용하면되고 다른건 아직 모르겠음. 보강합시다.
> 
> 보강 1. 
> form actions 에서 처리하고 `throw redirect(? , '/')`를 던져주면 알아서 redirect 됨.
> 추가적으로 redirect 주소를 서버에서 굳이 작성해주지 않아도 됨!

==꼭 Tutorial / Part 4 / Advanced routing / Route groups 의 예제를 찾아볼 것==



## *Hooks*

### handle

+hook.server.js에 `handle` function 작성

요청을 뺏어가서 뭔가를 처리함

### The RequestEvent object

`handle`의 `event`는 
API routes in `+server.js`
form actions in `+page.server.js`
load function in `+page.server.js` and `+layout.server.js`
에 전달되는 동일한 `event`이다.

`event` 에는 여러가지 속성들이 있음. docs 참고

### handleFetch

`event`에 여러가지 속성들이 있다고 했는데 그 중 `fetch` 도 들어있음.

`fetch` 를 load function에서 하면 `+hooks.server.js` 에서 뺐어서 처리함

### handleError

The `handleError` hook lets you intercept unexpected errors and trigger some behaviour
`handleError`는 예상치 못한 에러를 가로채고 어떤 행동을 트리거함.

[[#Basic]]에서 unexpected error 가 떴을 때 에러를 던졌는데 이걸 hook이 가로채서 에러를 커스텀할 수 있음.


## *Page options*

### Basics

페이지 옵션에는 `ssr`, `csr`, `prerender` `trailingSlash` 가 있음.

`+page.server.js`, `+layout.server.js`에 설정할 수 있고 `+layout.server.js`에 설정하면 Child layouts 까지 적용이 됨. (`+page.js, +layout.js`도 마찬가지)

> [!note] `+page.js` 와 `+page.server.js` 차이??
> `+page.js` : 페이지와 관련된 로드 기능 수행, SSR, CSR 둘다 작동.
> `+page.server.js` : `+page.js`에서 수행하기 적합하지 않은 작업(민감한 작업?), 함수가 서버에서만 실행됨, SSR에서만 작동
> 
> 그럼 둘 중 뭘 써야할까?
> Server `load` functions(`+page.server.js`) are convenient when you need to access data directly from a database or filesystem, or need to use private environment variables.
> 
> Universal `load` functions(`+page.js`) are useful when you need to `fetch` data from an external API and don't need private credentials, since SvelteKit can get the data directly from the API rather than going via your server. They are also useful when you need to return something that can't be serialized, such as a Svelte component constructor.
> 


### ssr

대학교 프로젝트 때 ssr을 모르고 그냥 개발했을 때 애를 좀 먹었었는데 이제 알겠음.
ssr은 서버에서 요리를 다해서 페이지를 주는거기 때문에 당연히 `browser` 관련 오브젝트에 접근하지 못함.(서버 -> browser인데 서버에서 바로 browser을 쓴다? 말이 안됨)

+page.server.js에
`export const ssr = false;`
default는 true

root `+laout.server.js` 에 설정하면 전체 앱을 SPA로 만들 수 있음.

### csr

+page.server.js에
`export const csr = false;`
default는 true

false로 하면 javascript 가 client에 제공되지 않음.
interactive 가 불가능해짐.

### prerender

[[Prerender]] 란 무엇이냐! 링크를 클릭.

+page.server.js에
`export const prerender = true;`

+layout.server.js에
하면 static site generator(SSG)가 됨.

근데!! 
Not all pages can be prerendered.
제약 조건이 있음. (자세한건 필요할 때 찾아봐라.)

### trailingSlash

후행 슬래쉬 

SvelteKit에서는 후행 슬래쉬 다 떼버림.

/foo/bar/ -> directory
/foo/bar -> file

처음 URL로 홈페이지(index.html)에 진입하는거 아니면 딱히 쓸모없지 않나?
그래서 다 떼버리는 듯.

`export const trailingSlash = 'always';`

default는 `never`

## *Link options*

### Preloading

`<a>`에 `data-sveltekit-preload-data` 속성을 사용하면 좀 더 빠르게 링킹이 된다고 한다.

너무 미세한 차이라 나중에 필요하면 사용하자.

### Reloading the page

Sveltekit 은 페이지를 옮겨다닐 때 without refreshing page.

근데 `<nav data-sveltekit-reload>` 를 사용하면 refreshing page를 없앨 수 있음.

## *Advanced routing*

### Optional parameter

[[#^16e604]] 와 같이 SvelteKit은 dynamic parameter 을 사용할 수 있는데 

`[[route]]` double brakets를 사용하면 parameter을 선택사항으로 만들 수 있음.
경로로 예를 들면 `/Code/...` 임

예제를 참고하면 바로 이해될 거고, 아직 어떻게 활용할지는 잘 모르겠음. 필요하면 쓰기.

### Rest parameter

Javascript rest parameter와 같이 route에 `[...rest]` 를 사용하면 중첩적으로 파라미터를 사용할 수 있게됨.

라우트 폴더를 중첩적으로 만들지 않아도 될듯함.

++

```
src/routes/ 
├ categories/ 
│ ├ animal/ 
│ ├ mineral/ 
│ ├ vegetable/ 
│ ├ [...catchall]/ 
│ │ ├ +error.svelte 
│ │ └ +page.server.js
```

custom 404 page가 필요하면 rest parameter을 사용해서 `/categories/...`  아래에 만들어줄 수 있음. `+page.server.js` 에서 `throw error(404)`를 던져주면됨.

### Param matchers 

안되는데 ? 컷

### Routes groups 

==이건 매우 유용할 듯==

괄호를 사용해서 Routes의 group을 설정할 수 있음. `(auted)` 로 routes 를 묶음! 그냥 명시적인 묶음이지 실제 url에는 포함되지 않음.

예제 참고
```
src/routes/ 
├ (authed)/ 
│ ├ account/ 
│ ├ app/ 
│ ├ +layout.server.js/ 
│ ├ +layout.svelte/ 
├ about/ 
...
```

`+layout.server.js`에서 사용자가 인가됐는지 확인하는 코드를 작성하면 됨.


### Breaking out of layouts
레이아웃에서 벗어나기

현재 경로의 `+page.svelte`를 현재 경로에 있는 `+layout.svelte`가 아니라 다른 상위 `+layout.svelte`로 적용하고 싶을 때가 있을 수 있다.(아직은 없었지만)

그럴 때 `@` sign을 이용하면 된다.

`+page@b.svelte` 이렇게. (예제 참고)

But! root layout은 모든 페이지에 적용되는 놈이라 you cannot break out of it. (벗어날 수 없다.)



## *Advanced loading*

### Universal load functions

`+page.server.js` 의 `load`는 Server `load` function.
`+page.js`의 `load`는 Universal `load` function.

이때까지 `+page.server.js` 만 사용하면 될 줄 알았는데 그게 아니었다.
상황에 따라 적합한 것을 사용하면 된다.

Server `load` function(`+page.server.js`) 은 데이터베이스나 파일 시스템에서 데이터를 바로 가져올 수 있을 때, private 환경 변수를 사용할 때 활용하면 된다.

Universal `load` function(`+page.js` 은 외부 API를 fetch로 가져올 때(서버를 통해 가져오는 것이 아님), private credentials이 필요하지 않을 때, Svelte component constructor와 같이 직렬화를 할 수 없는 것을 반환해야 할 때 사용하면 된다.

드물지만 때에 따라서 둘 다 사용해야 할 때도 있다.

[Universal vs Server](https://kit.svelte.dev/docs/load#universal-vs-server)

### Using both load functions

둘 다 사용해야 할 때도 있음.
data 방향 : `+page.server.js` => `+page.js`, 그 역은 안됨.

+page.js에서 +page.server.js 의 return 값을 data로 받아들임.
```javascript
export async function load({ data }) {}
```

예제를 보면 쉽게 이해할 수 있음.

### Using parent data

예제를 보면 이해가 빠를 거임.

주의해야 할 게 Universal `load` function은 parent server `load` function의 data를 얻을 수 있지만 그 반대는 안됨.
즉, Server `load` function은 오직 다른 server `load` function의 parent data만 얻을 수 있음.

### Invalidation

Invalidate : to officially stop a document, contract ,,,

예제에서 [...timezone]/+page.js 만 re-run 되고 +layout.js 의 `load` function은 re-run 되지 않음.

==`invalidate` function을 사용하면 해당 URL에 의존하는 `load` functions 들을 re-run 하게 만듦.==

이 `invalidate` function을 예제처럼 +page.svelte에서 사용하면 시간이 계속 바뀌게 됨.
`onMount` 대신 `afterUpdate`, `beforeUpdate` 안에서 사용해도 작동됨. 왜냐하면 re-run 하면 data가 바뀌기 때문에 `afterUpdate`, `beforeUpdate`가 작동됨.

### Custom dependencies

`fetch`를 사용하기 적절하지 않을 때가 있다. 그럴 땐 invalidate할 url가 없는데 어떻게 `invalidate` 하냐?

`depends(url)`를 통해 수동으로 지정할 수 있음.

예제에서 invalidation key는 `data:now` 임.

### invalidateAll

there's the nuclear option - `invalidateAll()`

현재 페이지에 대해 모든 `load` functions 들을 무차별적으로 재작동 시킬 수 있다.

## *Environment variables*

### $env/static/private

전 프로젝트를 할 때 `.env` 파일을 만들어서 중요 내용들을 저장했음.

`$env/static/private`을 통해서 활용 가능함.

.env
`PASSPHRASE="open sesame"`

+page.server.js
`import { PASSPHRASE } from '$env/static/private';`

**Keeping secrets**
`+page.svelte.js` 에서 `$env/static/private`를 import 하면 Sveltekit이 알아서 알아서 경고 해줌.

It can only be imported into server modules:
- `+page.server.js`
- `+layout.server.js`
- `+server.js`
- any modules ending with `.server.js`
- any modules inside `src/lib/server`

### $env/dynamic/private

접근 방식에 static과 dynamic이 존재함.

static
`import { FEATURE_FLAG_X } from '$env/static/private';`
앱이 빌드될 때

dynamic
`import { env } from '$env/dynamic/private';`
`const dynamic = evn.FEATURE_FLAG_X;`
반대로 앱이 실행될 때

### $env/static/public

public이라 클라이언트 코드에 import 해도 에러를 주지 않는다.

