function toHex(number){
    if(number<0){
        return "00";
    }

    if(number >255){
        return "FF";
    }

    if(number < 10){
        return "0" + number.toString(16).toUpperCase();
    }
    return number.toString(16).toUpperCase();
}

function rgb(r, g, b){
    return toHex(r) + toHex(g) + toHex(b);
}


module.exports = rgb