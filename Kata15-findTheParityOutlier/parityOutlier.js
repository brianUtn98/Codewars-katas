const even = (number) => number % 2 === 0;

const odd = (number) => !even(number)

function findOutlierOld(integers){
   const odds = integers.filter(number => odd(number))
   const evens = integers.filter(number => even(number))

    return odds.length === 1 ? odds[0] : evens[0];

}

const take = (amount) => (list) => list.slice(0, amount)

function findOutlier(integers){
    const significantly = take(3)(integers);
    return significantly.filter(even).length >=2 ? integers.find(odd) : integers.find(even)
}


  module.exports = findOutlier;