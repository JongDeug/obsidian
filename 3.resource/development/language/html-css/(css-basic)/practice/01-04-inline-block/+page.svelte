<div class="block-container">
    <div>div1</div>
    <div>div2</div>
    <div>div3</div>
    <div>div4</div>
</div>

<div class="inline-container">
    <span>span1</span>
    <span>span2</span>
    <span>span3</span>
    <span>span4</span>
</div>

<style lang="scss">
    .block-container {
        border: 3px solid blue;
      div {
        border: 3px solid green;
        width: 400px;
        display: inline;
      }
    }

    .inline-container {
        border: 3px solid red;
      span {
        background-color: red;
        width: 400px;
        display: block;
      }
    }
</style>