---
title: JavaScript 关于变量和值的小笔记
date: 2016-10-10 23:52:33
tags:
  - JavaScript
---
群里看到别人讨论的问题，代码如下：

```JavaScript
Array.prototype.forEach = function(fn){
    console.log('debugging');
    let self = this;
    for(let i=0;i<self.length;i++){
        fn(self[i],i,self);
    }
};
var fruits = ['Apple','Banana'];
fruits.forEach((item,index,array)=>{
    console.log(item);
    fruits = [];
})
fruits.forEach((item,index,array)=>{
    console.log(item);
    fruits[1] = 'aaa';
})
```
## 我的理解：
