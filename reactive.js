
let activeEffect = null
function effect(eff){
  activeEffect = eff
  activeEffect()
  activeEffect = null
}
const targetMap = new WeakMap()

function track(target, key){
  if(activeEffect){
    let depsMap = targetMap.get(target)
    if(!depsMap){
      targetMap.set(target, (depsMap = new Map()))
    }
    let dep = depsMap.get(key)
    if(!dep){
      depsMap.set(key, (dep = new Set()))
    }
    dep.add(activeEffect)
  }
}
function trigger(target, key){
  let depsMap = targetMap.get(target)
  if(!depsMap) return
  let dep = depsMap.get(key)
  if(dep){
    dep.forEach(effect => effect())
  }
}

function reactive(target){
  const handler = {
    get(target, key, recevier){
      let result =  Reflect.get(target, key, recevier)
      track(target, key)
      return result
    },
    set(target, key, recevier){
      let oldVal = target[key]
      let result = Reflect.set(target, key, recevier)
      if( oldVal != result){
        trigger(target, key)
      }
    }
  }
  return new Proxy(target, handler)
}
function ref(raw){
  const r = {
    get value(){
      track(r ,'value')
      return raw
    },
    set value(newVal){
      if(raw != newVal){
        raw = newVal
        trigger(r, 'value' )
      }
    }
  }
  return r
}


let product = reactive( { price: 5, quantity: 2 })
let salePrice = ref(0)


let total = 0


effect( () => { total = salePrice.value * product.quantity })
effect( () => { salePrice.value = product.price * 0.9 })

console.log(total)
console.log(salePrice)

