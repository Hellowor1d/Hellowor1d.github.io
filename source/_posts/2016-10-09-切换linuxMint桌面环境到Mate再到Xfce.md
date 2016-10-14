---
title: 切换linuxMint桌面环境到Mate再到Xfce
subtitle: Switch desktop enviroment from Cinnamon to Xfce
date: 2016-10-09 18:08:57
header-img: 'http://7xo9xp.com1.z0.glb.clouddn.com/xfce_desktop.jpg'
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

[一个很不错的教程](http://winaero.com/blog/how-to-install-mate-in-linux-mint-cinnamon-edition/)

 软件管理工具直接搜索`mint-meta-mate`可以直接安装,(直接通过`sudo apt-get install mint-meta-mate`命令也可以安装,卸载的话就得一点点通过软件管理工具搜索mate相关内容逐一卸载了)但是注意这种方法安装之后很有可能只实现部分Mate的效果,因为需要获取root权限才能完全修改,然后注销重新选择用户进行登录前,右上角选择Mate就可以进入新的桌面环境了.(Mate是基于Gnome2的分支创建,没有之前所说的bug问题)

## 安装KDE
> $ sudo add-apt-repository ppa:kubuntu-ppa/backports

> $ sudo apt-get update && sudo apt-get dist-upgrade

> $ sudo apt-get install kubuntu-desktop

直接按照命令行执行就行了,kde虽然华丽,但是响应速度略有迟滞感,不是我的菜,果断再换

## 安装Xfce

这个安装就和mate一样简单了

[这个教程可以参考](http://linoxide.com/linux-how-to/install-xfce-4-12-mint-arch-linux/)

> sudo apt-get install xfce4

若是注销重登时无法进入xfce桌面,最好是先`su`获得root权限再执行上面的安装命令,然后就可以了

众所周知,Xfce是经典的小巧桌面,占用资源小,响应速度快,但是原生的界面有点windows XP的既视感,所以还是要花点心思调教一番的,由于个人比较喜欢简洁些的桌面,所以也就没有太多的折腾,用了一个桌面管理器,稍微优化一下就完全可用了,既简洁迅速,又美观大方.

安装主题管理器的方法:
> sudo add-apt-repository ppa:rebuntu16/other-stuff

> sudo apt-get update

> sudo apt-get install xfce-theme-manager

这会随安装包附带一个Cario-Dock应用,模仿OSX的那种效果,功能强大,效果很好.

至此,我就先把Xfce当做主力桌面进行使用了,希望不再遇到假死的问题.
