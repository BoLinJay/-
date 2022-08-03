# 变量声明

## 函数式声名

```js
var function say() {
    console.log('hello, world')
}
```



# 函数方法

- `.toFixed(n)`保留n位小数，支持四舍五入,会转换成字符串
- `Math.ceil()`执行向上舍入，即它总是将数值向上舍入为最接近的整数；
- `Math.floor()`执行向下舍入，即它总是将数值向下舍入为最接近的整数； 
- `Math.round()`执行标准舍入，即它总是将数值四舍五入为最接近的整数(这也是我们在数学课上学到的舍入规则)

 

## 对象方法

### 字符串对象 `字符串才行`

- `length`字符串长度
- `indexof()`检索字符串 结果等于-1代表没有
- `includes()`查看字符串中是否包含指定的字符串
- `stringObj.replace(old, new)`替换字符串
- `slice(start,end)`：以作用于字符串的切割
- `split(string)` 将字符串转换为数组
- `charAt(number)` 方法返回字符串中指定下标（位置）的字符串
- `trim()` 方法删除字符串两端的空白符
- `toLowerCase()` 把字符串转换为小写
- `toUpperCase()` 把字符串转换为大写
- `charAt(index)`返回字符串中指定的下标字符串

### 数组对象

- `slice(start,end)`：方法可从已有数组中返回选定的元素，返回一个新数组，包含从start到end（不包含该元素）的数组元素,该方法不会改变原数组

- `splice(index,num,insertValue)`第一个参数（起始位置），第二个参数（删除的项数），第三个参数（插入任意数量的项）

- `join()` 方法也可将所有数组元素结合为一个字符串。

- `push()` 方法（在数组结尾处）向数组添加一个新的元素，返回新数组的长度

- `unshift()` 方法（在开头）向数组添加新元素，返回新数组的长度

- `shift()` 方法会删除首个数组元素，返回被“位移出”的字符串

- `pop()` 方法从数组中删除最后一个元素，返回“被弹出”的值：

- `reverse()`反转数组元素，会改变原数组，不会返回新数组

  

## 鼠标事件

- `mouseenter`：当鼠标移入某元素时触发。
- `mouseleave`：当鼠标移出某元素时触发。
- `mouseover`：当鼠标移入某元素时触发，移入和移出其子元素时也会触发。
- `mouseout`：当鼠标移出某元素时触发，移入和移出其子元素时也会触发。
- `mousemove`：鼠标在某元素上移动时触发，即使在其子元素上也会触发。
- `mouseout、mouseover和mouseleave、mouseenter`最大的区别，在于子元素连带触发。

## 阻止浏览器默认行为

### 阻止默认事件：

- `e.preventDefault()`

- `e.returnValue = false (IE)`

### 阻止冒泡：

- `e.stopPropagation()`

- `e.cancelBubble = true (IE)`

# 牛客题

## 1、

![image-20220728225017953](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220728225017953.png)

![image-20220728225027468](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220728225027468.png)