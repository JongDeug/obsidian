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

// then 을 남발하면 hell이 됨,, 그래서 나온것!
// async 키워드만 사용하면 비동기 코드를 동기적으로 사용할 수 있다? ==> 왜 그럼 비동기를 다시 동기적으로 코드를 짜야함? 비동기를 왜씀?
// ==> 비동기를 사용하는 함수들이 있기 때문에 내가 원하는 코드를 짜려면 컨트롤할 수 있어야함. ==> 세상만사 동기적으로 살 수 없음. 엄청난 에러가 발생할거야 ㅎㅎ
async function fetchFruits() {
    const banana = await getBanana(); // 기다렸다가 promise의 resolve 반환
    const apple = await getApple(); // 그 다음 실행해서 총 4초가 걸림
    return [banana, apple];
}
fetchFruits()
    .then(console.log);