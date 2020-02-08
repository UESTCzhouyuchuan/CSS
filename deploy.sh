#!/usr/bin/env bash
#
# 部署脚本
#
# Windows 无法执行 .sh 文件，需要安装 git 客户端
#
# Author: yuchuan
# Email: uestczhouyuchuan@163.com
#

# 开始
set -e

# 添加
git add -A

# 提交
git commit -m deploy

# 推送到默认仓库分支
git push
