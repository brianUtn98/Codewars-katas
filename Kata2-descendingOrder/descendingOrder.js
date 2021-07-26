
function descendingOrder(number){
    return Number(number.toString().split("").sort((a,b)=>b-a).join(""));
}

module.exports = descendingOrder;