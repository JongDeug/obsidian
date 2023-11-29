<div class="flex-container">
    <div>Item1</div>
    <div>Item2 <br> 테스트 문구 <br> 박스 사이즈를 키워봅시다.</div>
    <div>Item3</div>
    <div>Item4 <br> 중간 사이즈 박스</div>
    <div>Item5</div>
</div>

<style lang="scss">
   * {
     box-sizing: border-box;
   } 
   
   .flex-container {
     height: 300px;
     background: gray;
     padding: 10px;
     display: flex;
     flex-direction: row;
     justify-content: end;
     //align-items: center;

     div {
       background: white;
       border: 1px solid red;
     }
   }
</style>