---
title: windows10+linuxMint 双系统中分区合并的操作记录
subtitle: Use Gparted to Merge the partition of windows10 to Linux
date: 2016-09-23 14:48:07
header-img: 'http://7xo9xp.com1.z0.glb.clouddn.com/header-gparted-records.jpg'
tags:
 - linux 笔记
---
自从笔记本装了双系统开发以来,越发觉得 linuxMint 系统顺手,所以开机基本都是默认进入 linuxMint 系统了,躺在 boot 选项里的 Windows10 都快被我遗忘了,还是保留着刚安装完的"纯净"本来面目.本来是计划Windows为主力系统的,但却计划赶不上变化.随着 Linux 使用越来越多,本来在装双系统时给他分配的空间就越来越觉得不够用,尤其是把我的几个主力开发软件搬移到 SSD 中 linux 的分区之后,

> 大致说下我的分区吧
   两个硬盘: HD(750G)+ SSD(128G),SSD分了两个大区分别安装 Windows10(80G  NTFS) 和 LinuxMint(40G  EXT4),HD 作为数据资料盘

![图片1](http://7xo9xp.com1.z0.glb.clouddn.com/gparted-record1.png)

于是冥思苦想怎么才能把 windows 中的未用空间剥离出来合并到 linux 分区中.之前比较熟悉 Windows 下的分区操作,所以试着在 windows 下重新进行分区,但是大名鼎鼎的 `diskGenius` 还有新晋神器`傲梅分区助手`都没法实现对 EXT4格式的 linux 盘进行合并,只能作罢.

切换到 LinuxMint 之后,分区软件就只知道 `Gparted` 了,研究半天,Windows 分区成功压缩,分离出来了30G的未用空间,但却不知道怎么才能合并到 linux 分区下的最后一个 ext4 分区中. google 查了好几篇文章还有问答网站上的问题和回答都不是很满意.就自己摸索,研究 Gparted 的文档.终于发现,由于分区的关系,未用空间只能由磁盘中物理相邻的位置进行合并,而不支持选中任意两个分区直接进行合并.

最终就是要把未用空间先合并给 linux 分区,叫做 `Extended`(这是linux分区在磁盘中的总称,可以叫"扩展卷/扩展分区"都行),这样未用空间由隔壁相邻的 windows 区合并给了 `Extended` ,进了 linux 的家门,再进行分配就要排队慢慢往后传递,直到给最后一个的 ext4 了 ,然后就可以把最后一个 ext4 跟未用空间合并了,实现对linux系统盘的扩容!

说了这么多,我知道你可能没看太懂,所以给你们拍照了,快看看图再回来看看文字,知道这个原理之后,还可以举一反三,给自己的系统空间随意分配,无论是从 windows 到 linux ,还是linux到windows,抑或是给他们下的子分区进行扩容和减容,都可以进行了,但是切记不要改动系统启动文件`boot`盘内的东西,只要你不更改内容和各个子分区的顺序,启动都没问题,但要是动了这块"奶酪",你就要乖乖去修复 grub/grub2 文件了!

本来是打算回答 [*Ask Ubuntu*](http://askubuntu.com/questions/269045/how-to-merge-an-unallocated-partition-with-an-extended-partition/828542#828542) 上的一个问题,结果说我声望不够,不能添加太多链接,索性就放到自己博客里吧,折腾双系统的分区着实比较辛苦,还好看了诸多教程加上自己摸索,把本来都准备放弃的事儿解决了!
哈哈哈~~现在两个系统都放在了 SSD 里,尤其是在 linux 下安装的 Webstorm 体验飞升了不少!
图片多,打开速度慢,建议国内用户查看我在 coding.net 的博客备份: [HERE](http://hellowor1d.coding.me/2016/09/23/windows10-linuxMint-%E5%8F%8C%E7%B3%BB%E7%BB%9F%E4%B8%AD%E5%88%86%E5%8C%BA%E5%90%88%E5%B9%B6%E7%9A%84%E6%93%8D%E4%BD%9C%E8%AE%B0%E5%BD%95/)

There are some of my operation photos, hope helpful:

>    **0. BACKUP YOUR DATA  (!!!)**

1.   use [Gparted Live CD/USB boot](http://gparted.sourceforge.net/livecd.php)

2.   **swap off**

3.  just merge unallocated partition with extended partition.


if you have two main system partition, and still  want to merge unallocated partition (next to/ in windows) to which ext4 partition in extended partition (maybe your linux partition)

the problem is that:
your unallocated partition is far from your ext4 partition,you shoud move it to the left of the ext4 partition ,then you can merge them.just like me do:


![图片swapoff](http://7xo9xp.com1.z0.glb.clouddn.com/gparted-recordswapoff.png)
![图片1](http://7xo9xp.com1.z0.glb.clouddn.com/gparted-record1.png)
![图片2](http://7xo9xp.com1.z0.glb.clouddn.com/gparted-record2.png)
![图片3](http://7xo9xp.com1.z0.glb.clouddn.com/gparted-record3.png)
![图片4](http://7xo9xp.com1.z0.glb.clouddn.com/gparted-record4.png)
![图片5](http://7xo9xp.com1.z0.glb.clouddn.com/gparted-record5.png)
![图片6](http://7xo9xp.com1.z0.glb.clouddn.com/gparted-record6.png)
![图片7](http://7xo9xp.com1.z0.glb.clouddn.com/gparted-record7.png)
![图片8](http://7xo9xp.com1.z0.glb.clouddn.com/gparted-record8.png)
![图片9](http://7xo9xp.com1.z0.glb.clouddn.com/gparted-record9.png)
![图片10](http://7xo9xp.com1.z0.glb.clouddn.com/gparted-record10.png)
![图片11](http://7xo9xp.com1.z0.glb.clouddn.com/gparted-record11.png)
![图片12](http://7xo9xp.com1.z0.glb.clouddn.com/gparted-record12.png)
![图片13](http://7xo9xp.com1.z0.glb.clouddn.com/gparted-record13.png)
![图片14](http://7xo9xp.com1.z0.glb.clouddn.com/gparted-record14.png)
![图片15](http://7xo9xp.com1.z0.glb.clouddn.com/gparted-record15.png)
![图片16](http://7xo9xp.com1.z0.glb.clouddn.com/gparted-record16.png)
![图片17](http://7xo9xp.com1.z0.glb.clouddn.com/gparted-record17.png)
![图片18](http://7xo9xp.com1.z0.glb.clouddn.com/gparted-record18.png)
![图片19](http://7xo9xp.com1.z0.glb.clouddn.com/gparted-record19.png)
![图片20](http://7xo9xp.com1.z0.glb.clouddn.com/gparted-record20.png)
