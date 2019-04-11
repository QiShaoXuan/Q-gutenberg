const wp = window.wp;

// 如需更改 edit ，save 等方法返回的虚拟dom还需改进
export const overrideCoreBlock = function(name, key, value) {
  const block = wp.blocks.getBlockType(name);
  const typeOf = typeof block[key];
  if (typeOf === 'function') {
    let fn = block[key]
    block[key] = function () {
      value(...arguments)
      return fn(...arguments)
    }
  }else{
    block[key] = value
  }
};


export const debounce = (func, delay) =>{
  var timeout  = null

  return (function(e) {
    clearTimeout(timeout)
    var context = this, args = arguments

    timeout = setTimeout(function(){
      func.apply(context, args)
    },delay)
  })()
}
