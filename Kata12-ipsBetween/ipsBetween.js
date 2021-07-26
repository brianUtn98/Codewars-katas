function ipsBetween(start,end){
    const startArray = start.split(".").map(octet => Number(octet));
    console.log(startArray)
    const endArray = end.split(".").map(octet => Number(octet));
    console.log(endArray)
    
    const differenceArray = [];

   
    differenceArray.push((endArray[0] - startArray[0])*256*256*256)
    differenceArray.push((endArray[1] - startArray[1])*256*256)
    differenceArray.push((endArray[2] - startArray[2])*256)
    differenceArray.push((endArray[3]-startArray[3]))
    console.log(differenceArray)
    return differenceArray.reduce((a,b) => a + b,0);


}

ipsBetween("10.0.0.1", "10.0.0.1")
ipsBetween("10.0.0.0", "10.0.0.50")
ipsBetween("20.0.0.10","20.0.1.0")

module.exports = ipsBetween;