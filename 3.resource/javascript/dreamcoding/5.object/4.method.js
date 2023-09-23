const apple = {
    name : "apple",
    // 방법1
    display : function(){
        console.log(`${this.name}: 사과`);
    },
    // 방법2
    print : () => console.log('hi'),
    // 방법3
    experssion() {
        console.log('이렇게 되는구만');
    }
};

apple.display();
apple.print();
apple.experssion();