// 使用 CommonJS 的模块化规范
const {add, mul} = require('./js/mathUtils.js')

console.log(add(20, 30));
console.log(mul(20, 30));

// 使用 ES6 的模块化规范
import {name, age, height} from "./js/info";

console.log(name);
console.log(age);
console.log(height);