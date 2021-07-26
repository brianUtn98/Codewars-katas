
function turnArray(string){
    const turned = string.split("");

    return turned.reverse().join("");
}

function spinWords(string){
   const toArray = string.split(" ");
   const reversed = toArray.map(word => {
       return word.length >= 5 ? turnArray(word) : word;
   })
   return reversed.join(" ");
}



module.exports = spinWords;