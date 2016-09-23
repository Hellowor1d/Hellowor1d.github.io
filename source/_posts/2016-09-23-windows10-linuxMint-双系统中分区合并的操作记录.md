---
title: windows10+linuxMint 双系统中分区合并的操作记录
date: 2016-09-23 14:48:07
tags:
 - linux 笔记
---


本来是打算回答 [*Ask Ubuntu*](http://askubuntu.com/questions/269045/how-to-merge-an-unallocated-partition-with-an-extended-partition/828542#828542) 上的一个问题,结果说我声望不够,不能添加太多链接,索性就放到自己博客里吧,折腾双系统的分区着实比较辛苦,还好看了诸多教程加上自己摸索,把本来都准备放弃的事儿解决了!
哈哈哈~~现在两个系统都放在了 SSD 里,尤其是在 linux 下安装的 Webstorm 体验飞升了不少!
图片多,打开速度慢,建议国内用户查看我在 coding.net 的博客备份: [HERE](http://hellowor1d.coding.me/2016/09/23/windows10-linuxMint-%E5%8F%8C%E7%B3%BB%E7%BB%9F%E4%B8%AD%E5%88%86%E5%8C%BA%E5%90%88%E5%B9%B6%E7%9A%84%E6%93%8D%E4%BD%9C%E8%AE%B0%E5%BD%95/)

There are some of my operation photos, hope helpful:

>    **0. BACKUP YOUR DATA  (!!!)**

*   1. use [Gparted Live CD/USB boot](http://gparted.sourceforge.net/livecd.php)

*   2. **swap off**

*   3. just merge unallocated partition with extended partition.


if you have two main system partition, and still  want to merge unallocated partition (next to/ in windows) to which ext4 partition in extended partition (maybe your linux partition)

the problem is that:
your unallocated partition is far from your ext4 partition,you shoud move it to the left of the ext4 partition ,then you can merge them.just like me do:


![图片swapoff](/img/GpartedRecords/swapoff.png)
![图片1](/img/GpartedRecords/1.png)
![图片2](/img/GpartedRecords/2.png)
![图片3](/img/GpartedRecords/3.png)
![图片4](/img/GpartedRecords/4.png)
![图片5](/img/GpartedRecords/5.png)
![图片6](/img/GpartedRecords/6.png)
![图片7](/img/GpartedRecords/7.png)
![图片8](/img/GpartedRecords/8.png)
![图片9](/img/GpartedRecords/9.png)
![图片10](/img/GpartedRecords/10.png)
![图片11](/img/GpartedRecords/11.png)
![图片12](/img/GpartedRecords/12.png)
![图片13](/img/GpartedRecords/13.png)
![图片14](/img/GpartedRecords/14.png)
![图片15](/img/GpartedRecords/15.png)
![图片16](/img/GpartedRecords/16.png)
![图片17](/img/GpartedRecords/17.png)
![图片18](/img/GpartedRecords/18.png)
![图片19](/img/GpartedRecords/19.png)
![图片20](/img/GpartedRecords/20.png)
