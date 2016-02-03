#移动端响应式插件

使用transform:scale缩放页面，要求视觉稿高清

页面以px为单位即可让h5适配各种移动设备，适配原则根据视觉稿比例缩放页面

告别rem、媒体查询、百分比等相对复杂且定位不精准的布局

兼容性良好，支持ios4+、android2.3+、winphone8+系统

约1k，零依赖

三种适配模式可选 spread || auto || contain || cover 


##spread模式

把内容拉伸平铺到整个窗口，页面元素的宽高比会被拉伸变形，适合需求方死活都要铺满整个屏幕的奇葩需求。

##contain模式

保持页面的宽高比，调整页面的宽度或高度（较大者），使页面完全包含在浏览器窗口中
页面水平垂直居中，左右或上下可能出现空白，页面背景使用纯色或可复制背景可解决此类问题

适合滑屏页面、单屏页面


##cover模式

保持页面的宽高比，调整页面的宽度或高度（较小者），使页面完全覆盖浏览器窗口

页面水平垂直居中，超出浏览器窗口左右或上下的内容会被隐藏

适合滑屏页面、单屏页面，且页面边缘无重要内容

##auto模式（默认模式）

保持页面的宽高比，调整页面的宽度，使页面宽度完全包含在浏览器窗口中

#快速上手

##meta的viewport设置：

```html
<meta content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no" name="viewport">
```

##启用插件代码示例一：

//如果视觉稿尺寸是640px*1008px，页面样式是以视觉稿尺寸除以2来计算，那么输入页面的宽度为320px和高度为504px
```js
window.onload = window.onresize = function(){
    pageResponse({
        selectors : '.page',     //模块选择器，使用querySelectorAll的方法
        mode : 'contain',     // spread || auto || contain || cover 
        width : '320',      //输入页面的宽度，只支持输入数值，默认宽度为320px
        height : '504'      //输入页面的高度，只支持输入数值，默认高度为504px
    })
}
```

##启用插件代码示例二：

```js
//如果视觉稿尺寸是640px*1008px，页面样式是以视觉稿原始尺寸来计算，那么输入页面的宽度为640px和高度为1008px
window.onload = window.onresize = function(){
    pageResponse({
        selectors : '.page',     //模块选择器，使用querySelectorAll的方法
        mode : 'contain',     // spread || auto || contain || cover 
        width : '640',      //输入页面的宽度，只支持输入数值，默认宽度为320px
        height : '1008'      //输入页面的高度，只支持输入数值，默认高度为504px
    })
}
```
