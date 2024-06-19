

// export const get = (o, p, d = null) =>
//     p.split(".").reduce((xs, x) => (xs && xs[x] ? xs[x] : d), o);
  
// export function set(obj, path, value){ 
//     let k, a = path.split('.');
//     while( (k = a.shift()) && ( obj = obj[k] = a.length ? ((obj!=void 0 && (typeof obj=="object" || typeof obj=="function") && k in obj) ? obj[k] : {}) : value ) ){}
// }

// 去除右侧方括号]
const trimRightBracket = (k:any)=>k.replace(/\]$/g,'');



// 路径设对象值
export const set:any = function (data:any, path:any, value:any) {
    let p = Array.isArray(path) ? path : path.split(/\.|\[/);
    if (path && p.length > 1) {
        let k = trimRightBracket(p.shift());
        data = data[k] || (data[k] = p[0] !== trimRightBracket(p[0]) ? [] : {});
        return set(data, p, value);
    } else {
        data[trimRightBracket(p[0])] = value;
        return data;
    }
};
// 路径取对象值
export const get:any = function (data:any, path:any) {
  let p = Array.isArray(path) ? path : path.split(/\.|\[/);
  if (path && p.length) {
      let k = trimRightBracket(p.shift());
      if (typeof data != "object" || !data || !(k in data)) {
          return;
      }
      return get(data[k], p);
  } else {
      return data;
  }
};


export const str2Fn = (str: string)=>{
    return (new Function('return ' + str))();
};