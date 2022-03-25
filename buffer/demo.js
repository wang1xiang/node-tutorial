var sequentialDigits = function(low, high) {
  if (low > high) {
    return
  } else {
    let result = []
    const lwoLength = Math.pow(10, (low + '').length - 1)
    const highLength = Math.pow(10, (high + '').length - 1)
    console.log(lwoLength, highLength);
    const lowFlag = parseInt(low / lwoLength)
    const highFlag = parseInt(high / lwoLength)
    console.log(lowFlag, highFlag);
    // for (let i = lowFlag; i < highFlag; i++) {
    //   const sum = i * length + (i + 1) * (length / 10) + (i + 2) * (length / 100)
    //   if (sum >= low && sum < high) {
    //     result.push(sum)
    //   }
    // }
    // console.log(result)
  }
};

sequentialDigits(10, 500)
