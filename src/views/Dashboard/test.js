export const str = `------WebKitFormBoundaryGc4qkdH8N2AxkJx1
0|main  | Content-Disposition: form-data; name="title"
0|main  | 
0|main  | 测试一哈
0|main  | ------WebKitFormBoundaryGc4qkdH8N2AxkJx1
0|main  | Content-Disposition: form-data; name="introduction"
0|main  | 
0|main  | ·啊啊啊啊
0|main  | ------WebKitFormBoundaryGc4qkdH8N2AxkJx1
0|main  | Content-Disposition: form-data; name="article"; filename="gitHooks自动化部署.md"
0|main  | Content-Type: application/octet-stream
0|main  | 
0|main  | 想要实现的效果是： 本地 \`git push\`代码之后，执行远程脚本，开始自动化部署。
0|main  | 
0|main  | 下面的操作是在服务端已经下载并配置好了\`git ssh \` 之后。
0|main  | 
0|main  | #### 1.在服务器上创建一个裸仓库
0|main  | 
0|main  | \`\`\`shell
0|main  | cd /home/iblog/www
0|main  | mkdir repos
0|main  | cd repos/
0|main  | git init --bare bare.git  // 这样就在服务端创建了一个名为 bare 的裸仓库
0|main  | #切换到钩子目录下
0|main  | cd bare.git/hooks/
0|main  | cp post-update.sample post-update // 拷贝一分钩子文件也可以拷贝 post-receive 这个钩子。
0|main  | vim post-update
0|main  | \`\`\`
0|main  | 
0|main  | 编辑一下：
0|main  | 
0|main  | \`\`\`shell
0|main  | #!/bin/bash
0|main  | #
0|main  | # An example hook script to prepare a packed repository for use over
0|main  | # dumb transports.
0|main  | #
0|main  | # To enable this hook, rename this file to "post-update".
0|main  | unset GIT_DIR // 必须要有
0|main  | DIR_ONE=/home/iblog/www/blog-server/   // 这是项目仓库目录。
0|main  | cd $DIR_ONE
0|main  | #sudo git init
0|main  | #在项目仓库添加刚创建的远程裸仓库。并命名为 prod 。
0|main  | #第一次操作的时候不知道远程项目可以命名。直接使用 git remote add origin xxx/bate.git 会提示已经有了 origin 远程仓库。必须重命名下。
0|main  | sudo git remote add prod /home/iblog/www/repos/serverBare.git
0|main  | # 清除没有 add 的文件
0|main  | sudo git clean -df
0|main  | sudo git pull origin master
0|main  | sudo npm install
0|main  | echo "ceshi git hook"
0|main  | sudo npm run prod
0|main  | echo "git hook 执行"
0|main  | \`\`\`
0|main  | 
0|main  | 这个文件默认是没有执行权限的，需要手动修改一下权限
0|main  | 
0|main  | \`\`\`shell
0|main  | chmod +x post-update
0|main  | \`\`\`
0|main  | 
0|main  | #### 2. 本地项目仓库关联服务端创建的裸仓库
0|main  |
0|main  | 在本地项目目录内：
0|main  |
0|main  | \`\`\`shell
0|main  | # 在本地仓库添加远程服务端的裸仓库。需要输入远程登录用户名已经 IP 地址。本地 push 代码之后，会提示输入登录密码。
0|main  | git remote add prod user@121.12.12.12/home/iblog/www/repos/bare.git
0|main  | # 执行下面的命令之后，远程裸仓库的 post-update 钩子就会执行。
0|main  | git push prod master
0|main  | \`\`\`
0|main  |
0|main  | 现在就实现了本地 push 代码之后，项目自动部署的功能。
0|main  | ------WebKitFormBoundaryGc4qkdH8N2AxkJx1--`