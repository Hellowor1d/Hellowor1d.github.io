---
title: Docker--我的地盘我做主
subtitle: Notes about the use of Docker
header-img: "http://7xo9xp.com1.z0.glb.clouddn.com/image/bg/docker-banner.jpg"
tags:
  - docker
date: 2016-10-07 23:16:33
---


# docker 学习笔记
---
1.常用命令

    docker run

eg:  docker run ubuntu -t -i /bin/bash   通过镜像运行新的容器

-t 运行一个终端

-i 让容器可交互,与 `-t`一般一起使用`-it`,就是容器内的命令行或者模拟shell

-d  后台运行

--rm 参数会在结束容器之后自动删除该容器

--name 为运行的容器制指定一个名字,如果不指定,docker 会随机生成一段字符串作为该容器的名称

-p [host port]: [container port] 手动制定容器内端口映射到宿主机的端口

-P P字母大写,全部container端口映射到localhost

-v [host path]:[absolut container path] ,如果参数指定的不是路径,[Volume](https://docs.docker.com/engine/tutorials/dockervolumes/#/mount-a-host-directory-as-a-data-volume)参数,可以挂载外部文件到容器下

    docker pull <imageName>

eg: docker pull  jenkins  拉取一个远程 `jenkins` 镜像到本地，或者更新`jenkins`镜像

    docker ps

eg:  docker ps 列出容器(-a 全部, -l 上一个)    docker rm  删除容器  doceker start/restart  启动容器   docker stop 停止容器

    docker commit

eg: docker commit container(Name/Id) (-m,-a) imagehub/imagename 提交容器(ID/名称)改动到新的镜像仓库/镜像名

-m "添加注释"
-a --author 作者信息

    docker tag

eg: docker tag 5db5f8471261 imagehub/imagename:taginfo,给镜像添加标签

    docker push image

eg: docker push hellowor1d/docker-fe 发布镜像到  docker hub

    docker rmi

eg: docker rmi ubuntu 删除镜像
```
    docker run -t -i -p 3000:8080 docker-fe /bin/sh
    host 3000端口绑定 容器中 8080,可通过host 3000访问8080内容
```
docker start 容器之后,继续通过 docker attach 把后台运行的容器挂载到前台展现

    docker top 查看容器中的进程
