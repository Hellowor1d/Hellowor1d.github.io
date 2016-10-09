---
title: 切换linuxMint桌面环境到Mate再到Xfce
date: 2016-10-09 18:08:57
tags:
  - linux
---
# 切换linuxMint桌面环境到Mate再到Xfce

自从安装linuxmint以来,一直都用着原装的Cinnamon桌面环境,挺顺手的.但是随着最近把linuxmint作为主力开发系统,用得多了也发现一个问题:
经常在webstorm和chrome都开了半天左右的时候,发生系统假死的情况,鼠标可以微微移动,但是不能进行其他操作,有时候三五分钟会自己恢复,但是恢复之后也很快又会重新假死,很是费解.

网上搜索了一下这个问题,了解到可以使用`Ctrl+Alt+F1`进入命令行界面进行注销重登,这种方法治标不治本啊,又继续Google相关问题,才发现这是gnome3的一些bug导致的,残留了很长时间,还没得到解决.

反正之前也好奇了很久其他桌面环境(比如KDE,MATE,Xfce)的展示效果了,正好借此机会换掉Cinnamon,体验一下其他的桌面环境

## 在Cinnamon下安装Mate
其实,LinuxMint官方就是有mate和xfce版本的镜像的,可见官方对于这两种桌面环境的支持度挺高.所以就先从Mate开始体验吧
1. 软件管理工具直接搜索`mint-meta-mate`可以直接安装,但是注意这种方法安装之后很有可能只实现部分Mate的效果,因为需要获取root权限才能完全修改 
