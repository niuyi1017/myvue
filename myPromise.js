
function myPromise(executor){
  this.value = null
  this.reason = null
  this.status = "pending"

  let _this = this

  function resolve(value){
    _this.value = value
    console.log("myPromise resolve _this")
    console.log(_this)
    _this.status = 'resolved'
  }

  function reject(reason){
    _this.reason = reason
    _this.status = 'rejected'
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
  console.log("then  _this")
  console.log(_this)

  if(_this.status == 'resolved'){
    onResolved(_this.value)
  }else if(_this.status == 'rejected'){
    onRejected(_this.reason)
  }
}

new myPromise((resolve, reject) => {
  resolve("success")
}).then(res => console.log(res), err => console.log(err))

// new myPromise((resolve, reject) => {
//   reject("failed")
// }).then(res => console.log(res), err => console.log(err))