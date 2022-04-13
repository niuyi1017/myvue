function bubbleSort(arr) {
  for (let i = 0; i <= arr.length; i++) {
    for (let j = 0; j <= arr.length - 1; j++) {
      let temp
      if (arr[j + 1] < arr[j]) {
        temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  console.log(arr)
  return arr
}

// 选择排序（选出最小）
function selectSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i
    let temp
    let j
    for (j = i; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    if (minIndex != i) {
      temp = arr[i]
      arr[i] = arr[minIndex]
      arr[minIndex] = temp
    }
  }
  console.log(arr)
}

// 插入排序 （扑克牌插牌）
function insertSort(arr) {
  let temp
  for (let i = 1; i < arr.length; i++) {
    temp = arr[i]
    let j = i
    while (j > 0 && arr[j - 1] > temp) {
      arr[j] = arr[j - 1]
      j--
    }
    arr[j] = temp
  }
  console.log(arr)
}

function quickSort(arr){

}

module.exports = {
  bubbleSort,
  selectSort,
  insertSort
}