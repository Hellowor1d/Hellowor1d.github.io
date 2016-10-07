---
title: docker note
tags:
 - docker
---

# docker 学习笔记
---
1.常用命令

> docker run

eg:  docker run ubuntu -t -i /bin/bash   通过镜像运行新的容器

> docker ps

eg:  docker ps (-a, -l )  列出容器  docker rm  删除容器  doceker start/restart  启动容器   docker stop 停止容器

>docker commit

eg:  docker commit container(Name/Id) (-m,-a)  提交容器改动到新的镜像

> docker push container

eg: docker push hellowor1d/docker-fe 发布镜像到  docker hub

> docker rmi

eg: docker rmi ubuntu 删除镜像
