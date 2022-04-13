const {
  bubbleSort,
  selectSort,
  insertSort 
} = require("./sort")

let arr = [1, 5, 9, 5, 3, 1, 5, 7, 9, 2, 5]
let arr2 = []
let n = 100000
for (let i = 0; i < n; i++) {
  arr2.push(n - i)
}



let start = new Date().getTime()

// bubbleSort(arr2)
// selectSort(arr2)
insertSort(arr2)
let end = new Date().getTime()

console.log(end - start)
// selectSort(arr)
