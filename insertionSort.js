insertionSort = (array) => {
  for (outer = 1; outer < array.length; outer++) {
    for (inner = 0; inner < outer; inner++) {
      console.log(array.join(' '))
      if (array[outer] < array[inner]) {
        const [element] = array.splice(outer, 1)
        array.splice(inner, 0, element)
      }
    }
  }
  console.log(array.join(' '))
  return array
}
const numbers = [8, 5, 6, 9, 3, 1, 4, 2, 7, 10]
insertionSort(numbers)