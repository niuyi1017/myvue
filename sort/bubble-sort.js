let arr = [1,5,9,5,3,1,5,7,9,2,5]
let arr2 = [] 
for(let i = 0; i<100000; i++){
  arr2.push(Math.ceil( Math.random()*100))
}

// 冒泡
function bubbleSort(arr){
  for(let i = 0; i <= arr.length; i++ ){
    for(let j = 0; j <= arr.length-1; j++){
      let temp 
      if(arr[j+1] < arr[j]){
          temp = arr[j]
          arr[j] = arr[j+1]
          arr[j+1] = temp
      }
    }
  }
  console.log(arr)
  return arr
}

// 选择排序（选出最小）
function selectSort(arr){
  for(let i = 0; i< arr.length; i++){
    let minIndex = i
    let temp 
    for(let j = i+1; j < arr.length-1; j++){
      if(arr[j] < arr[minIndex]){
        minIndex = j
      }
    }
    temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
  console.log(arr)
} 

// 插入排序 （扑克牌插牌）
function insertSort(arr){
  let temp 
  for(let i = 1; i<arr.length; i++ ){
    temp = arr[i]
    let j = i
    while(j>0 && arr[j-1]> temp){
      arr[j] = arr[j-1]
      j--
    }
    arr[j] = temp

  }
  console.log(arr)

}






let start = new Date().getTime()

// bubbleSort(arr2)
// selectSort(arr2)
insertSort(arr2)
let end = new Date().getTime()

console.log(end - start)
// selectSort(arr)