const sum = (a,b) => a + b;
const sub = (a,b) => a-b;
class something {
    constructor(){
        console.log('Object');
    }
}

module.exports.sum = sum;
module.exports.sub = sub;
module.exports.something = something;