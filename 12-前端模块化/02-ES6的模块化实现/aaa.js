var name = 'xiaoming'
var age = 18
var flag = true

function sum(num1, num2) {
  return num1 + num2
}

if (flag) {
  console.log(sum(20, 30));
}

// 1. 导出方式一
export {
  flag, sum
}

// 2. 导出方式二
export var num1 = 1000;
export var height = 1.88;

// 3. 导出方式函数/类
export function mul(num1, num2) {
  return num1 * num2;
}

export class Person {
  run() {
    console.log('running');
  }
}

// 5. export default 同一个模块，只能存在一个 export default,
// const  address = 'Beijing'
// export default address;

export default function (argument) {
  console.log(argument);
}