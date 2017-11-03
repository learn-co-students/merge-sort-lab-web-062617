function findMinAndRemoveSorted(array) {
  return array.shift();
}

function merge(array1, array2) {
  let mergedSortedArray = [];
  while (array1.length > 0 && array2.length > 0) {
    mergedSortedArray.push(findMinOfTwoSortedArrays(array1, array2))
  }
  return mergedSortedArray.concat(array1).concat(array2)
}

function findMinOfTwoSortedArrays(array1, array2) {
  return array1[0] < array2[0] ? array1.shift() : array2.shift()
}

function minAndRemove(array) {
  let min = array[0]
  let minIndex = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i]
      minIndex = i
    }
  }
  array.splice(minIndex, 1)
  return min
}

function mergeSort(array) {
  let sortedArray = [];
  while (array.length > 0) {
    sortedArray.push(minAndRemove(array))
  }
  return sortedArray;
}
