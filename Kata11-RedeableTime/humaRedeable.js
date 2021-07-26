function normalize(quantity){
    return quantity < 10 ? "0"+quantity : quantity;
  }
  function humanReadable(seconds) {
   
    const minutes = Math.floor(seconds/60); 
    const finalSeconds = seconds % 60; //?
    const hours = Math.floor(minutes/60); //?
    const finalMinutes = minutes % 60; //?

    return `${normalize(hours)}:${normalize(finalMinutes)}:${normalize(finalSeconds)}`
  }

  module.exports = humanReadable;