// fetch 네트워크에서 뭔가를 가져올 때 사용되는 단어
function fetchEgg(chicken) {
    return Promise.resolve(`${chicken} => 치킨`);
}

// fetchEgg('닭')
//     .then((egg) => console.log(egg));

function fryEgg(egg) {
    return Promise.resolve(`${egg} => 달걀`);
}

function getChicken() {
    return Promise.reject(new Error('치킨을 가지고 올 수 없음'));
    return Promise.resolve(`화분 => 닭`);
}

getChicken()
    .catch(error => {
        console.log(error.name)
        return 'ㅋ';
    })
    .then((chicken) => fetchEgg(chicken))
    .then((egg) => fryEgg(egg))
    .then((friedEgg) => console.log(friedEgg));