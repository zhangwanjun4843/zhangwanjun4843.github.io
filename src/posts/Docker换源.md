---
icon: edit
date: 2024-12-14
category:
  - Docker
tag:
  - red
  - round
star: true
sticky: true
---

配置Docker使用国内镜像源的步骤如下：

### 对于Windows和macOS用户：
1. 打开Docker Desktop应用。
2. 进入Settings（设置）> Docker Engine。
3. 在JSON配置中添加国内镜像源地址，例如：
   ```json
   {
     "registry-mirrors": [
       "https://docker.mirrors.ustc.edu.cn",
       "https://registry.docker-cn.com",
       "http://hub-mirror.c.163.com",
       "https://mirror.ccs.tencentyun.com"
     ]
   }
   ```
4. 应用并重启Docker Desktop。

### 对于Linux用户：
1. 打开终端。
2. 编辑Docker的配置文件`/etc/docker/daemon.json`，如果没有该文件，则创建它。
3. 在配置文件中添加以下内容，替换为相应的国内镜像源地址：
   ```json
   {
     "registry-mirrors": [
       "https://docker.hpcloud.cloud",
       "https://docker.m.daocloud.io",
       "https://docker.unsee.tech",
       "https://docker.1panel.live",
       "http://mirrors.ustc.edu.cn",
       "https://docker.chenby.cn",
       "http://mirror.azure.cn",
       "https://dockerpull.org",
       "https://dockerhub.icu",
       "https://hub.rat.dev"
     ]
   }
   ```
4. 保存并关闭文件。
5. 重启Docker服务：
   ```bash
   sudo systemctl daemon-reload
   sudo systemctl restart docker
   ```
6. 运行以下命令来验证镜像源配置是否生效：
   ```bash
   docker info | grep "Registry Mirrors"
   ```
   如果输出显示配置的镜像源地址，说明设置成功。