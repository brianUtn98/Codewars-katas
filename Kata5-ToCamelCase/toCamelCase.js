function capitalize(word){
    return word.charAt(0).toUpperCase() + word.slice(1)
}

function toCamelCase(string){
    const splited = string.split(/[-_]/)
    const firstWord = splited.shift(); 
    const normalized = firstWord + splited.map(word => {
        return capitalize(word)
    }).join("")
    return normalized;
}

module.exports = toCamelCase