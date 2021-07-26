function longestConsec(strarr, k) {
    if(k<=0 || k>strarr.length){
        return "";
    }
    console.log(`Inicio con el array ${strarr}`)
    let concatArray = [];
    let concated;
    for(let i = 0; i < strarr.length;i++){
        concated = [];
        for(let j = i;j<k+i;j++){
            if(j<strarr.length){
                concated = concated+strarr[j]
            }
        }
        console.log(concated)
        concatArray.push(concated);
    }

    
    const sizes = concatArray.map(array => array.length)
    const max = Math.max.apply(null,sizes)
    const index = sizes.findIndex(elem => elem === max)
    console.log(concatArray)
    return concatArray[index];
}

function longestConsecBetter(strarr,k){
    if(k<=0 || k>strarr.length){
        return "";
    }

    let longest = "";

    for(let i =0;i<=strarr.length-k;i++){
        var aux = strarr.slice(i,i+k).join("");
        if(aux.length > longest.length){
            longest = aux;
        }
    }
    return longest;
}

module.exports = longestConsec