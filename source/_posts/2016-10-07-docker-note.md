---
title: Docker常用命令的一点记录
subtitle: Notes about the use of Docker 
tags:
  - docker
date: 2016-10-07 23:16:33
---


# docker 学习笔记
---
1.常用命令

    docker run


eg:  docker run ubuntu -t -i /bin/bash   通过镜像运行新的容器

    docker ps

eg:  docker ps (-a, -l )  列出容器  docker rm  删除容器  doceker start/restart  启动容器   docker stop 停止容器

    docker commit

eg:  docker commit container(Name/Id) (-m,-a)  提交容器改动到新的镜像

    docker push container

eg: docker push hellowor1d/docker-fe 发布镜像到  docker hub

    docker rmi

eg: docker rmi ubuntu 删除镜像
```
    docker run -t -i -p 3000:8080 docker-fe /bin/sh
    host 3000端口绑定 容器中 8080,可通过host 3000访问8080内容
```
docker start 容器之后,继续通过 docker attach 把后台运行的容器挂载到前台展现

    docker top 查看容器中的进程
