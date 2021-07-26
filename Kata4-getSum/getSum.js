function getSumOld(a,b){
    if(a===b){
        return a;
    }

    const array = [a,b];
    const orderedArray = array.sort((a,b) => a-b);
    let result = 0;
    for(let i=orderedArray[0]; i<=orderedArray[1];i++){
        result += i;
    }

    return result;
}

function getSum(a,b){
    const max = Math.max(a,b);
    const min = Math.min(a,b);
    let result = 0;
    for(let i=min;i<=max;i++){
        result += i;
    }
    return result;
}
module.exports = getSum