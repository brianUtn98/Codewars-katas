const even = (num) => num % 2 === 0;

const odd = (num) => !even(num);

function validParentheses(parens){
    if(odd(parens.length)){
        return false;
    }
    
    return true;
}

module.exports = validParentheses;