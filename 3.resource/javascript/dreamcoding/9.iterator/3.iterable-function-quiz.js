function makeIterator(startNum, endNum, callback){
    return {
        [Symbol.iterator](){
            return {
                next(){
                    return {value: callback(startNum++), done: startNum > endNum}
                }
            }
        }
    }
}

const multiple = makeIterator(0, 10, (n) => n*2);
for(const item of multiple){
    console.log(item);
}