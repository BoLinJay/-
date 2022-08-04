# 变量声明

## 函数式声名

```js
var function say() {
    console.log('hello, world')
}
```

## 事件委托

> 事件委托也叫事件代理，“事件代理”即是把原本需要绑定在子元素的响应事件（click、keydown…）委托给父元素，让父元素担当事件[监听]的职务。事件代理的原理是DOM元素的事件冒泡。
>
> ### 优点:
>
> - **可以大量节省内存占用**
> - **可以实现当新增子对象时无需再次对其绑定**

# 函数方法

- `.toFixed(n)`保留n位小数，支持四舍五入,会转换成字符串
- `Math.ceil()`执行向上舍入，即它总是将数值向上舍入为最接近的整数；
- `Math.floor()`执行向下舍入，即它总是将数值向下舍入为最接近的整数； 
- `Math.round()`执行标准舍入，即它总是将数值四舍五入为最接近的整数(这也是我们在数学课上学到的舍入规则)

 

## 对象方法

- `instanceof()`判断数据的类型

### 对象

- `hasOwnProperty()`判断一个属性在原型上还是实例上

### 字符串 `字符串才行`

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
- `charAt(index)`返回字符串中指定下标的字符串

### 数组



- `slice(start,end)`：方法可从已有数组中返回选定的元素，返回一个新数组，包含从start到end（不包含该元素）的数组元素,该方法不会改变原数组

- `splice(index,num,insertValue)`第一个参数（起始位置），第二个参数（删除的项数），第三个参数（插入任意数量的项）

- `join(string)` 方法也可将所有数组元素结合为一个字符串。

- `push(参数)` 方法（在数组结尾处）向数组添加一个新的元素，返回新数组的长度

- `unshift(参数)` 方法（在开头）向数组添加新元素，返回新数组的长度

- `shift()` 方法会删除首个数组元素，返回被“位移出”的字符串

- `pop()` 方法从数组中删除最后一个元素，返回“被弹出”的值：

- `reverse()`反转数组元素，会改变原数组，不会返回新数组

- `concat(Array)`合并数组

- `find()`返回符合条件的第一个元素

- `sort()` 方法以字母顺序对数组进行排序：

- `form()`将类数组转换成数组

- `Array.isArray(数据)`判断是否是数组

- > `arr.reduce(callback(preValue, currentValue[, index[, array]])[, initialValue])`
  >
  > - `preValue`累计器累计回调的返回值; 它是上一次调用回调时返回的累积值，或`initialValue`
  > - `currentValue` 数组中正在处理的元素。
  > - `index` 可选数组中正在处理的当前元素的索引。 如果提供了`initialValue`，则起始索引号为0，否则从索引1起始。
  > - `array`可选调用`reduce()`的原数组
  > - `initialValue`初始值

- > ```jsx
  > var points = [40, 100, 1, 5, 25, 10];
  > points.sort(function(a, b){return a - b}); 
  > //对数字进行升序排序
  > var points = [40, 100, 1, 5, 25, 10];a
  > points.sort(function(a, b){return b - a});
  > //对数组进行降序排序
  > var points = [40, 100, 1, 5, 25, 10];
  > points.sort(function(a, b){return 0.5 - Math.random()}); 
  > //随机排序
  > ```

### 数组迭代

- `forEach(项目值，项目索引，数组本身)` 方法为每个数组元素调用一次函数（回调函数）。
- `map(项目值，项目索引，数组本身)` 方法通过对每个数组元素执行函数来创建`新数组`，不会对没有值的数组元素执行函数，不会更改原始数组。
- `filter(项目值，项目索引，数组本身)` 方法创建一个包含通过测试的数组元素的`新数组`。
- `reduce(总数（初始值/先前返回的值）,项目值,项目索引,数组本身)` 方法在每个数组元素上运行函数，以生成（减少它）单个值,在数组中从左到右工作,不会减少原始数组。

### Date日期操作

> .简单明了,直接new Date(),然后就照着来就是了:
>
> var myDate = new Date(); 
>
> myDate.getYear(); //获取当前年份(2位) 
>
> myDate.getFullYear(); //获取完整的年份(4位,1970-????) 
>
> myDate.getMonth(); //获取当前月份(0-11,0代表1月) // 所以获取当前月份是myDate.getMonth()+1; 
>
> myDate.getDate(); //获取当前日(1-31) 
>
> myDate.getDay(); //获取当前星期X(0-6,0代表星期天) 
>
> myDate.getTime(); //获取当前时间(从1970.1.1开始的毫秒数) 
>
> myDate.getHours(); //获取当前小时数(0-23) 
>
> myDate.getMinutes(); //获取当前分钟数(0-59) 
>
> myDate.getSeconds(); //获取当前秒数(0-59) 
>
> myDate.getMilliseconds(); //获取当前毫秒数(0-999) 
>
> myDate.toLocaleDateString(); //获取当前日期 
>
> var mytime=myDate.toLocaleTimeString(); //获取当前时间 
>
> myDate.toLocaleString( ); //获取日期与时间 

## 鼠标事件

- `mouseenter`：当鼠标移入某元素时触发。
- `mouseleave`：当鼠标移出某元素时触发。
- `mouseover`：当鼠标移入某元素时触发，事件冒泡。
- `mouseout`：当鼠标移出某元素时触发，事件冒泡。
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