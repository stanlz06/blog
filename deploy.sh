#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# deploy to github pages
# echo 'b.kazaf.com' > CNAME

msg='来自github actions的自动部署'
githubUrl=git@github.com:stanlz06/blog.git

git config --global user.name "linzhenbin"
git config --global user.email "770541591@qq.com"

git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl master:gh-pages # 推送到github gh-pages分支

cd -
rm -rf docs/.vuepress/dist
