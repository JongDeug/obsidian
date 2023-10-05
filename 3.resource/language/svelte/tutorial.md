
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