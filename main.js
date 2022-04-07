function myPromise(executor){
  this.status = "pending"
  this.value = ""
  this.reason = ""

  let _this = this
  function resolve(value){
    _this.status = "resolved"
    _this.value = value
  }
  function reject(reason){
    _this.status = "rejecked"
    _this.reason = reason
  }
  executor(resolve, reject)
}

myPromise.prototype.then = function (onResolved,onRejected ) {
  if(this.status == "resolved"){
    onResolved(this.value)
  }else if(this.status == "rejecked"){
    onRejected(this.reason)
  }
  return this
}

new myPromise((resolve, reject) => {
  resolve("success")
}).then(res => console.log(res), err => console.log(err))
new myPromise((resolve, reject) => {
  reject("failed")
}).then(res => console.log(res), err => console.log(err))

