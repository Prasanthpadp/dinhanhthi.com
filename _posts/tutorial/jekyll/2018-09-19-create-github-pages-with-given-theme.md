---
layout: post
title: "Quickly create a website with Github Pages and available themes"
description: Quickly, Easily and Beautiful
tags: [jekyll]
img: github-pages.gif
categories: tutorial
bigimg: /img/tutorial/bigimg/github-pages-quickly.png
math: 1
---

{% assign img-src = "/img/post/tutorial/github-pages" %}

In this post, I'll show you how to create a website based on Github Pages and Jekyll very quickly. You have also a lot of available beautiful themes to choose in different categories.

<div class="alert alert-success" role="alert" markdown="1">
This post is for both **non-tech** and tech users, you can boost your progress by ignoring some steps if you want.
</div>

<h4 class="post-more">TL;DR</h4>

1. [Create](https://github.com/) a Github account, for example, `yourAccount`.
2. Create a new repository with the name **exactly** is `yourAccount.github.io` (this's also your website's url).
3. Download [**Github Desktop**](https://desktop.github.com) (Windows, MacOS) or [**Gitkraken**](https://www.gitkraken.com/) (Linux) or just use command lines if you know [git](https://git-scm.com/).
4. Clone above repository to your local machine using Git client or command lines. A new folder named `yourAccount.github.io` will be created on your machine.
5. Choose a theme you like from [this site](http://jekyllthemes.org/).
6. Copy all files and folders from zip file downloaded in step 5 to folder in step 4.
7. Modify file `_config.yml` with your own informations. The *must-be-modified* line is `url: yourAccount.github.io`
8. Push all changes to Github.
9. Wait some minutes and browse `https://yourAccount.github.io` to see your wonderfull website.

{% include toc.html%}

## All main steps

<div  class="thi-step">

<div class="step">
<div class="step-number"></div>
<div class="step-content" markdown="1">
**[<sbj>Create</sbj>](https://github.com/) <sbj>a free Github account and sign in.</sbj>** Don't forget to **verify your email** address. Suppose that, I created an account whose name is `yourAccount`.
</div>
</div>

<div class="step">
<div class="step-number"></div>
<div class="step-content" markdown="1">
**<sbj>Create a new repository.</sbj>** This repo will contain all of your website's source codes.

1. Sign in to Github with account `yourAccount`.
2. Go to the [home page](https://github.com) and click on **New** button on the right hand side of field **Repositories**.
3. Name your repository **exactly** with `yourAccount.github.io` where `yourAccount` is your Github account name. This step is very important, if you choose another name, it cannot work!
4. You can give some details on the *Description* field, choose *Publish* or *Private* your repo (you need to pay if you want to choose *Private*). With a private repo, people cannot see your website's source codes.
5. After you finish to create your repo and done all of following steps. Your website will available at `https://yourAccount.github.io`.
</div>
</div>

<div class="step">
<div class="step-number"></div>
<div class="step-content" markdown="1">
**<sbj>Use git or download git client.</sbj>** You need to *clone* your repo to your local machine so that you can modify your website's files easily. Before doing this on the next step, you need to [know about git](https://git-scm.com/), if you don't, you can use a git client like [**Github Desktop**](https://desktop.github.com/) or [**Gitkraken**](https://www.gitkraken.com/). I advice you to choose Github Desktop if you use Windows or Mac and choose Gitkraken if you use Linux.

Even if you don't know anything about git and don't want to use a git client, you can follow below basic git commands just for this purpose.

<div class="tomTat">
<div id="btTomTat" class="collapsed" data-toggle="collapse" href="#ndTomTat">
<span>Some basic git commands only for this post</span>
</div>
<div id="ndTomTat" markdown="1" class="collapse multi-collapse ndTomTat">

Below are very simple git commands, if you have something complicated, please let me know in the comment section below this post.

- Be sure that you have [already installed git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) on your system.
- You need a terminal app to use the git codes. I recommend [**cmder**](http://cmder.net/) (Windows), [**guake**](http://guake-project.org/) (Linux) and [**iTerm2**](https://www.iterm2.com/) (MacOS).
- **Provide your info to git**. It's useful for the first time, you don't need to provide them every time you push to Github remote.

	~~~ bash
git config --global user.name "Anh-Thi Dinh"
git config --global user.email "dinhanhthimail@gmail.com" # your email to register to Github
	~~~

- In the case you have many git accounts, you have to provide your account and password every time you contact to the git remote. Below line will help you remember your git info for the working repo,

	~~~ bash
git config credential.helper store
	~~~

- **Clone your repo by git command**. Go to your repo's website (*https://github.com/yourAccount/yourAccount.github.io*), click on the green button named **Clone or download** and then choose **Clone with HTTPS**. Copy the link below it, *i.e.* 

	~~~ bash
https://github.com/yourAccount/yourAccount.github.io.git
	~~~

- In the terminal, `cd` to the directory where you want to store your repo,

	~~~ bash
cd <full-path-contains-your-repo-folder>
	~~~

	and then use below line of code

	~~~ bash
git clone https://github.com/yourAccount/yourAccount.github.io.git
	~~~

	You may be asked to fill your Github account & password.

Afterall, a folder named `yourAccount.github.io` will appear on your directory. Don't forget this folder because you will work on it every time.

</div>
</div>

</div>
</div>

<div class="step">
<div class="step-number"></div>
<div class="step-content" markdown="1">
**<sbj>Using git clients.</sbj>** If you like to use git command lines, please read the previous steps. For both Github Desktop and Gitkraken, you need to focus on their 4 functions: **clone** (copy entire repo from the remote for the first time), **commit** (claim the changes), **push** (send to remote) and **pull** (update changes from the remote to local).

<div class="tomTat">
<div id="btTomTat" class="collapsed" data-toggle="collapse" href="#ndTomTat3">
  <span>Github Pages</span>
</div>
<div id="ndTomTat3" markdown="1" class="collapse multi-collapse ndTomTat">

1. Install, open Github Desktop (GD) and then log in with your Github accout (`yourAccount`).
2. Go to your repo's website (*https://github.com/yourAccount/yourAccount.github.io*), click on the button **Set up in Desktop**, GD's windows will open up.
3. In the section **Local path**, choose wherever you want to store your repo on your local system and then click on **Clone**.
4. Open up the directory you use to store github on your computer, a new folder is created whose name is `yourAccount.github.io`.

</div>
</div>


<div class="tomTat">
<div id="btTomTat" class="collapsed" data-toggle="collapse" href="#ndTomTat2">
  <span>Gitkranken</span>
</div>
<div id="ndTomTat2" markdown="1" class="collapse multi-collapse ndTomTat">

1. Install, open Gitkraken.
2. **File** > **Preferences** > **Authentication** > choose tab **GitHub.com** and then log in with your Github account (`yourAccount`).
2. **File** > **Clone Repo** > **Clone** > **GitHub.com** > in the list of *Repository to clone*, you choose `yourAccount.github.io`; in section *Where to clone to*, you choose a place on your computer to store your repo. Finally, press **Clone the repo**.

</div>
</div>

</div>
</div>

<div class="step">
<div class="step-number"></div>
<div class="step-content" markdown="1">
**<sbj>Find and choose a Jekyll theme.</sbj>** There are several websites which give free Jekyll themes such as [this site](http://jekyllthemes.org/).
</div>
</div>

<div class="step">
<div class="step-number"></div>
<div class="step-content" markdown="1">
**<sbj>Extract & copy files.</sbj>** Normally, the theme you downloaded is contained in a `.zip` file. You need to extract all of your contents to the repo's directory. (Extract to folder > copy all files in the extracted folder > paste to the repo's directory).If everything goes right, your repo's direct to will be like

~~~
| yourAccount.github.io
|--- # some folders & files
|--- _layouts
|--- _posts
|--- _config.yml
|--- index.html
|--- # some folders & files
~~~

</div>
</div>

<div class="step">
<div class="step-number"></div>
<div class="step-content" markdown="1">
**<sbj>Modifying _config.yml file.</sbj>** Open up file `_config.yml` inside folder `yourAccount.github.io` and edit it with your own information. It depends on the theme you downloaded but every theme will have some common settings as giving below,

- `title`: Your website's name, for example, `The first website`.
- `description`: Your website's description
- `baseurl`: leave it blank (see more on the Advanced settings section)
- `url` (**the most important**): `https://yourAccount.github.io` (don't forget I have supposed that your Github account is `yourAccount`)

There are many other fields which are important for the specific theme. They are usually described carefully by the author of these theme, just follow the guides.

</div>
</div>


<div class="step">
<div class="step-number"></div>
<div class="step-content" markdown="1">
**<sbj>Push to Github remote.</sbj>** Every time you finish editing your files inside the folder `yourAccount.github.io`, you need to `push` them to the Github remote. You can use git commands or a git client.

<div class="tomTat">
<div id="btTomTat" class="collapsed" data-toggle="collapse" href="#ndTomTat4">
  <span>If you want to use git commands</span>
</div>
<div id="ndTomTat4" markdown="1" class="collapse multi-collapse ndTomTat">

Remeber 4 keywords **add**, **commit**, **push** and **pull** when working with a git command. Use the following lines (don't use any texts beginning with `#`)

~~~ bash
# add all changes to stage
git add *
# alternative to above line if you add a specific file or files
git add <name-of-file> 

# commit the changes (ready to push)
# you can ignore <name-of-file> to include all changes
git commit -m "<some-comments-about-the-commit>" <name-of-file>

# push to remote
git push origin master
~~~

If you want to "pull" the contents from the remote repo to the local repo (in the situation that you use different computers for the same repo and you pushed from some computer and want to get the update to other one)

~~~ bash
git pull origin master
~~~

</div>
</div>

<div class="tomTat">
<div id="btTomTat" class="collapsed" data-toggle="collapse" href="#ndTomTat5">
  <span>If you use Github Desktop</span>
</div>
<div id="ndTomTat5" markdown="1" class="collapse multi-collapse ndTomTat">

GD will automatically recognize the changes in the repo directory and display all notifications on the left panel of its window.

- In the field **Summary**, you must give a brief description of the changes.
- In the field **Description**, you can give some more details about the changes but it's optional.

After that, click on **Commit to master** and then press the button **Publish** (on the top right).

</div>
</div>

<div class="tomTat">
<div id="btTomTat" class="collapsed" data-toggle="collapse" href="#ndTomTat6">
  <span>If you use Gitkraken</span>
</div>
<div id="ndTomTat6" markdown="1" class="collapse multi-collapse ndTomTat">
Like GD, it also automatically recognize the changes in your repo directory. The changes will be displayed on the right panel of its window. 

- Click on **Stage all changes** to bring all changes to the stage status (ready to commit). You can only a specific file by click **Stage file** on the right of this file (you need to mouse over this file to see the button)
- After staging, give a summary about the changes in field **Summary** (it's mandatory) and more details in field **Description** (it's optional)

Afterall, click on **Commit** button and then press **Push** (on the top bar) to send all changes to the Github remote.

</div>
</div>

</div>
</div>

<div class="step">
<div class="step-number"></div>
<div class="step-content" markdown="1">

Make your own a cup of coffee, wait a few minutes and then browse `https://yourAccount.github.io` to see your masterpiece.

</div>
</div>

</div>

## Advanced settings

Above guide only helps you make a site based on your account name, i.e. `<your-account>.github.io`. That's why at step 2, you create a repo on branch `master`. If you intend to create multiple websites also based on Github Pages and Jekyll, don't worry that you have to make multiple Github accounts for this purpose.

Github supports making a `gh-pages` branch repo to serve a project's website. It means that you can use `gh-pages` branch repos to store your websites without the need of *the same name with url*. More specifically, you can create a repo named `first-site`, store all your codes like above guide showing you and then browse the website at `https://<your-account>.github.io/first-site`. It's cool, right? In order to do that, 

1. At **step 2**, you can create a repo with any name you want, for example, `first-site`.
2. Go to that repo's url (`https://github.com/yourAccount/first-site`)
3. Click on **Branch: master** (on the left) > Fill in **Find or create a branch** by **gh-pages**.
4. Follow the same manners as above guide to clone your repo to your local machine. At the step of using git commands or git client, you make more below step
	- **Git command**: Type in terminal `git checkout gh-pages` to change from the branch `master` to branch `gh-pages`.
	- **Github Desktop**: Look at the top bar, click on **Current Branch** and choose **gh-pages** on the dropdown list.
	- **Gitkraken**: On the top left bar, right beside **first-name** tab, choose **gh-pages** instead of **master**.
5. Everything else will be the same as above guide except **step 7** when you modify the `_config.yml` file.
	- `baseurl: /first-site` (because now your site presents at `yourAccount.github.io/first-site` instead of `yourAccount.github.io`.
6. Your website is now available at `https://yourAccount.github.io/first-site`.



