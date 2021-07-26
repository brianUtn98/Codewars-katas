function squaredIn(elem,array){
    return array.some(number => number === (elem*elem))
}

function powedIn(elem,array){
    return array.some(number => (number*number) === elem)
}

function compOld(array1, array2){
    if(!array1 || !array2){
        return false;
    }

    if(array1.length != array2.length){
        return false;
    }

    return array1.every(elem => squaredIn(elem,array2)) && array2.every(elem => powedIn(elem,array1))
}

function comp(array1,array2){
    const inOrderArray1 = array1.sort()
    const inOrderArray2 = array2.sort()

    for(let i = 0 ;i<inOrderArray1.length ; i++){
        if(inOrderArray1[i]*inOrderArray1[i] !== inOrderArray2[i]){
            return false;
        }
    }

    return true;
}

const a =  [5, 8, 2, 2, 9, 3, 0, 6, 0, 6, 7, 7].sort() //?
const b = [25, 49, 36, 49, 36, 4, 9, 4, 64, 0, 0, 81].sort((a,b)=> a-b) //?
module.exports = comp;