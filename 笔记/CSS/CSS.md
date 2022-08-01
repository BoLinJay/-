# CSS规范 

**严禁**使用内联样式表

```html
<div style="width:100px"></div>
```

# 内联元素居中

> text-align

# 块级元素居中

> 固定宽度的块级元素
>
> margin

#  定位 position

> **sticky**定位

他的行为就像position:relative滚动到顶部后转变成position:fixed

> **relative** 相对定位

> **absolute**绝对定位

> **fixed**绝对定位
>
> static 静态定位

一般的标签元素不加任何定位属性都属于静态定位，在页面的最底层属于标准流。

# 如何将一个div上下居中，左右居中

## 1、固定宽高

### ①定位 absolute;+transform

```css
position:absolute;
top:50%;
left:50%;
transiform: translate(-50%, -50%);
```

### ② 定位 absolute+margin:auto;

```css
position:absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
margin: auto;
```

### ③定位 absolute+margin:-(盒子一半)

```css
position:absolute;
top: 50%;
left: 50%;
margin-left: -50px;
margin-top: -50px;
```

### ④flex布局 宽高不固定，不需要定位，不会脱离DOM流

```css
display: flex;
justify-content：center;
align-items:center;
```

# 文本截断

## 控制显示几行

~~~css
display: -webkit-box; //需要显示时文本行数
-webkit-box-orient: vertical; //需要显示时文本行数
-webkit-line-clamp: 2; //需要显示时文本行数
~~~

## 单行文本截断 

```css
overflow: hidden;
white-space: nowrap; //单行文本显示
```

## 移动端meta文件

~~~css
<meta 
name="viewport" 
content="width=device-width, 
initialscale=1.0,
maximum-scale=1.0,
user-scalable=no">

<!-- initial-scale=1.0是确保页面1:1展现，不会出现缩放 -->
<!-- user-scalable=no在移动端禁止浏览器缩放，和maximum-scale=1.0一起使用 -->
~~~







