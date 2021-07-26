function specialChar(char){
    const regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/g;

    return regex.test(char)
}

function ocurrencies(letter,word){
    if(specialChar(letter)){
        return word.match(new RegExp(`\\${letter}`,"g")).length //?
    }
    return word.match(new RegExp(letter,"g")).length
}

function duplicateEncode(word){
    return word.toLowerCase().split("").map(letter => {
        return ocurrencies(letter,word.toLowerCase()) > 1 ? ")" : "("
    }).join("");
}

module.exports = duplicateEncode;