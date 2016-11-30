---
title: Chrome Dev Tools 中，单步执行调试方法的使用分析
date: 2016-11-30 15:52:22
subtitle: debugger method of Chrome Dev Tools
header-img: 'http://7xo9xp.com1.z0.glb.clouddn.com/image/bg/chrome-dev-tools.png'
tags:
 - 调试
---

# Chrome Dev Tools 中，单步执行调试方法的使用分析

step into就是单步执行，遇到子函数就进入并且继续单步执行；

step over是在单步执行时，在函数内遇到子函数时不会进入子函数内单步执行，而是将子函数整个执行完再停止，也就是把子函数整个作为一步。

step out就是但单步执行到子函数内时，用step out就可以执行完子函数余下部分，并返回到上一层函数。

>  　step into：进入子函数

>　　step over：越过子函数，但子函数会执行

>　  step out：跳出子函数


```js

function foo(){
         fun()
         bar()
         console.log("this is foo")
          var subfoo = function(){
             console.log("this is subfoo")
             (function(){
                 console.log("this is inside of subfoo")
             })()
         }
         subfoo()
     }

     function fun(){
         console.log("this is fun")
         var subfun = function(){
             console.log("this is subfun")
         }
         subfun()
     }
     function bar(){
         console.log("this is bar")
          var subbar = function(){
             console.log("this is subbar")
         }
         subbar()
     }

     function next(){
         console.log("NEXT HAS BEEN CALLED")
     }

      foo()
     next()
```
