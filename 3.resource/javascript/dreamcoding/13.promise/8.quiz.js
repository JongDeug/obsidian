function fetchEgg(chicken) {

  return Promise.resolve(`${chicken} => 🥚`);

}

function fryEgg(egg) {

  return Promise.resolve(`${egg} => 🍳`);

}

function getChicken() {

  return Promise.reject(new Error('can not find 🐓'));

}

async function friedEgg(){
    let chicken;
    try{
        chicken = await getChicken();
    }catch(error){
        console.log(error.message);
        chicken = '닭';
        // return; 종료하고 싶으면 return 쓰면 끝.
    }
    const egg = await fetchEgg(chicken);
    const fried = await fryEgg(egg);
    return fried;
}
friedEgg().then(console.log);