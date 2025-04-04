function deepClone(obj) {
  // 如果 obj 不是对象或者是 null，直接返回该值
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // 如果是日期对象，返回新创建的日期对象
  if (obj instanceof Date) {
    return new Date(obj);
  }

  // 如果是正则表达式，返回新创建的正则对象
  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }

  // 创建一个空对象来存储拷贝的结果
  let clone = Array.isArray(obj) ? [] : {};

  // 遍历对象的所有属性
  for (let key in obj) {
    // 避免拷贝继承自原型链的属性
    if (obj.hasOwnProperty(key)) {
      // 递归调用 deepClone 对象的属性
      clone[key] = deepClone(obj[key]);
    }
  }

  return clone;
}

const obj = { a: 1, b: 2 };
const newObj = deepClone(obj);
console.log("输出", obj, newObj, obj == newObj);
