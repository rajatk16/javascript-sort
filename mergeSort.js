divide = (array) => {
  if (array.length < 2) {
    return array
  }
  const mid = Math.floor(array.length/2)
  const smallOne = array.slice(0, mid)
  const smallTwo = array.slice(mid)
  return sort(divide(smallOne), divide(smallTwo))
}

sort = (smallOne, smallTwo) => {
  const sorted = []
  while(smallOne.length && smallTwo.length) {
    if (smallOne[0] <= smallTwo[0]) {
      sorted.push(smallOne.shift())
    } else {
      sorted.push(smallTwo.shift())
    }
  }
  const output = [...sorted, ...smallOne, ...smallTwo]
  console.log(output)
  return output
}

const numbers = [8, 5, 6, 9, 3, 1, 4, 2, 7, 10]
console.log(divide(numbers))