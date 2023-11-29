<div class="box1">
    첫번째 박스입니다. <br>
    float: left가 적용되어 있습니다.
</div>
<div class="box2">
    두번째 박스입니다. <br>
    float: right가 적용되어 있습니다.
</div>

<!--clear 하고 싶은 곳에 추가하면 됨-->
<div class="clearfix"></div>

<div class="box3">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque doloremque non repellat suscipit totam ullam vero!
    Animi aperiam consequuntur, eaque expedita explicabo illo ipsam nobis recusandae vitae. Accusamus neque, veniam!
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur deserunt ea eaque error est illo iste
    magni molestiae mollitia nemo, non odit pariatur qui, quos similique tenetur voluptate voluptatum.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad autem consectetur debitis earum enim, eum facere libero
    nulla possimus quas quidem quod, sed totam! A eaque eum natus similique ullam.
</div>

<style lang="scss">
  @mixin box {
    width: 300px;
    padding: 20px;
    box-sizing: border-box;
  }

  .box1 {
    @include box;
    height: 400px;
    background-color: red;
    float: left;
  }

  .box2 {
    @include box;
    height: 200px;
    background-color: blue;
    float: right;
  }

  .clearfix {
    clear: both;
  }
  //.box3 {
  //  clear: both;
  //}
</style>