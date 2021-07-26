function getDigits(number){
    const toString = number.toString().split("");
    const numberArray = toString.map(number => Number(number));
    return numberArray;
}

function digPow(n, p){
    const digits = getDigits(n);

    let result = 0;
    for(let i = p;i<digits.length+p;i++){
        result+= Math.pow(digits[i-p],i)
    }

    const k = result/n;
    
    return Number.isInteger(k) ? k : -1;
}   


module.exports = {digPow,getDigits}