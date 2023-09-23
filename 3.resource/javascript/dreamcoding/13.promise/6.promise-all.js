function getBanana() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('버네나'); //인자로 줘야되서 이렇게 작성한듯.
        }, 1000);
    });
}

function getApple() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('사과');
        }, 3000);
    });
}

function getOrange() {
    return Promise.reject(new Error('no oragne'));
}

// 바나나와 사과를 같이 가지고 오기
// getBanana().then(console.log);
// getApple().then(console.log)
// 비동기적인 코드를 살짝 동기적인 코드로 만든 느낌이지? then을 연달아 사용해서 ㅇㅇ
getBanana()
    .then((banana) =>
        getApple()
            .then((apple) => [banana, apple])
    )
    .then(console.log);
// 총 4초 걸림! 


// Promise.all 병렬적으로 한 번에 모든 Promise들을 실행!
Promise.all([getBanana(), getApple()])
    .then((fruits) => console.log('all :', fruits));
// 총 3초 걸림 ㄷㄷ!


// Promise.race 주어진 Promise 중에 제일 빨리 수행된 것이 이김!
Promise.race([getBanana(), getApple()])
    .then(fruits => console.log('race :', fruits));


Promise.all([getBanana(), getApple(), getOrange()])
    .then((fruits) => console.log('all-error :', fruits))
    .catch(console.log);

// 모든 결과에 대한 상태를 알 수 있음
Promise.allSettled([getBanana(), getApple(), getOrange()])
    .then((fruits) => console.log('all-settle :', fruits))
    .catch(console.log);


