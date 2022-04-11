
function myPromise(executor){
  this.value = null
  this.reason = null
  this.status = "pending"
  this.onResolvedQueue = []
  this.onRejectedQueue = []
  let _this = this

  

  function resolve(value){
    _this.value = value
    console.log("myPromise resolve _this")
   
    setTimeout(() => {
      _this.onResolvedQueue.forEach(resolve => resolve(value))
    })
  }

  function reject(reason){
    _this.reason = reason
    _this.status = 'rejected'
    setTimeout(() => {
      _this.onRejectedQueue.forEach(reject => reject(reason))
    })
  }

  executor(resolve, reject)
  
}

myPromise.prototype.then = function (onResolved, onRejected){
  if( typeof onResolved !== 'function'){
    onResolved = function(x){ return x}
  }
  if( typeof onRejected !== 'function'){
    onRejected = function(x){ return x}
  }
  var _this = this

  if(_this.status == 'resolved'){
    onResolved(_this.value)
  }else if(_this.status == 'rejected'){
    onRejected(_this.reason)
  }else if(_this.status == 'pending'){
    _this.onResolvedQueue.push(onResolved)
    _this.onRejectedQueue.push(onRejected)
    console.log(_this.onResolvedQueue)
  }

  return this
}

let promise =  new myPromise((resolve, reject) => {
  resolve("success")
}).then(res => console.log(res), err => console.log(err))
  .then(res => console.log(res, "2then"))
  .then(res => console.log(res, "2then"))

console.log(promise)