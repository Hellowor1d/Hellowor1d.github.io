---
title: JavaScript 关于变量和值的小笔记
subtitle: Interesting konwledge of JavaScript
date: 2016-10-10 23:52:33
tags:
  - JavaScript
---
临近下班,在微信群里看到别人讨论的问题，代码如下：

```JavaScript
Array.prototype.forEach = function(fn){
    console.log('debugging');
    let self = this;
    for(let i=0;i<self.length;i++){
        fn(self[i],i,self);
    }
};
var fruits = ['Apple','Banana'];
//情形一:
fruits.forEach((item,index,array)=>{
    console.log(item);
    fruits = [];
})
//'Apple','Banana'
//情形二:
fruits.forEach((item,index,array)=>{
    console.log(item);
    fruits[1] = 'aaa';
})
//'Apple','aaa'
```
有些人对于这段代码的输出结果感到不解,谈谈我自己的看法
## 我的理解：
```JavaScript
//给数组原型链上添加forEach方法,其实现在很多浏览器是可以直接支持forEach的,可以不必写
Array.prototype.forEach = function(fn){
    console.log('debugging');
    let self = this;
    for(let i=0;i<self.length;i++){
        fn(self[i],i,self);
    }
};
//这里使用 var 声明了一个变量fruits,是个全局变量,为了区分我们把这个称之为fruits1,其实他只是一个变量指向了真正的数据['Apple','Banana'];
var fruits = ['Apple','Banana'];
//情形一:
//下面这个fruits还是fruits1,他的作用是告诉引擎对真实的数据['Apple','Banana']使用forEach方法,js会听话地遍历['Apple','Banana']全部元素
fruits.forEach((item,index,array)=>{
    console.log(item);      //打印输出"Apple"
    fruits = [];            
    //因为fruits是个全局变量,这里fruits = [],相当于又给fruits赋予了一个新的值,或者说指向了别的内存空间,虽然名字和fruits1一样,但是实际上它已经变成了fruits2,
    //对于forEach方法来说,他的调用对象是真实数据['Apple','Banana'],fruits = []只是变量名重新指向了新的内存空间而已,调用forEach的真实数据并没有什么变化,所以第一次循环结束后,会继续循环输出"Banana"
})
//所以上面这部分输出的结果是'Apple','Banana'


//情形二:
//注意执行这段代码,不能跟情形一连起来,否则会输出undefined,因为上面的fruits = []把原本的fruits变成了fruits2,指向的真实数据是[]
//下面这个fruits.forEach就变成成了[].forEach,自然是输出undefined
//分开来执行的话,fruits指向真实数据['Apple','Banana'],['Apple','Banana'].forEach本应该遍历输出'Apple','Banana'
fruits.forEach((item,index,array)=>{
    console.log(item);
    fruits[1] = 'aaa';      //但是,在这个时候,已经输出了Apple,即将结束第一次循环时,fruits[1] = 'aaa'修改了真实数据['Apple','Banana'],变成了          
                            //['Apple','aaa'],所以在进行第二次循环时,输出的结果是"Banana"
})
//所以最终输出结果是 'Apple','aaa'
```
