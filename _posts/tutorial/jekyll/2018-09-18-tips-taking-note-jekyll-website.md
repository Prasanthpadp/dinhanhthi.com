---
layout: post
title: "Tips for note-taking with Jekyll websites"
subtitle: tools and procedures
description: Note taking with Markdown and Jekyll websites
tags: [jekyll, git]
img: tip.png
categories: tutorial
math: 1
date: 2018-10-09
update: 1
---

{% assign img-src="/img/post/tutorial/note" %}

In this tutorial, I will show you some useful techniques to take notes on a Jekyll website create with Github Pages and NoteTheme theme.

{% include toc.html %}

<h4 class="post-more">TL;DR</h4>

- Using [Github Pages](https://pages.github.com/) for hosting website.
- Using [NoteTheme](https://dinhanhthi.github.io/NoteTheme/how-to-install-notetheme) for a note-taking website's template (I designed it).
- Using [MarkdownPad](http://markdownpad.com/) for a markdown editor on **Windows**, [Marker](https://fabiocolacio.github.io/Marker/) on **Linux**.
- Using [FreeFileSync](https://freefilesync.org/) for transferring files between local repository and cloned repository from the remote.
- Using [git](/tags/tutorial#git) (terminal) for updating notes to the remote.
  - Using [GitKraken](https://www.gitkraken.com/) as a GUI client of git on **Linux**.
  - Using [Github Desktop](https://desktop.github.com/) as a GUI client of git on **Windows** and **Mac**.
- Working with many computers? Using [Dropbox](http://dropbox.com) to store the local repo.

<h4 class="post-more">Prerequisites</h4>

- A little bit knowledge about [git](http://localhost:1234/tags/tutorial#git).
- Writing a [markdown](https://en.wikipedia.org/wiki/Markdown) document.  

<h4 class="post-more">Goals</h4>

- Find a best easy way to write a note on a local machine and then publish it.
- There are differences between what is on local and what is public so that you can check all things before pushing it to the remote.
- Find some best tools for this purpose (and also know about other alternative tools)

<div class="tomTat">
<div id="btTomTat" class="collapsed" data-toggle="collapse" href="#ndTomTat0">
  <span>Why a website instead of an app?</span>
</div>
<div id="ndTomTat0" markdown="1" class="collapse multi-collapse ndTomTat">

This post supposes that you are going to choose a website for note taking but first, we make clear the reason why I recommend using a website instead of a note-taking app like [Evernote](https://www.evernote.com).

What do we need about a note-taking service (app, website, tool)?

1. **Easy to text.** Support keyboard shortcuts, unicode, different language input (for example, Vietnamese input methods)
2. **Search & Replace.** We can come back any place we want to modify, supplement or delete something. Sometimes, we want to replace a lot of the same words with other ones. This function is really necessary.
3. **Mobility.** We can check at any time, on any devices (computer, mobile, tablet,…)
4. **Clean & Neat.** We can understand immediately what we have written.
5. **Math & Syntax highlighting code.** They are important to me.
6. **Multi-platforms.** We work not only on one type of device, it's sure.
7. **Free.** It’s optional, we prefer services at lower cost.

**Evernote** lacks function 5. Other note-taking apps almost lack functions 3 and 5 except some below apps.

1. [**Quiver**](http://happenapps.com/): It's great (I used it before and I love it for the first time). It supports all of the above things except the function 6 because it's only available on MacOS and iOS. It's not also free, you must pay 10$ to get the full version (but it's cheap).
2. **[Bootsnote](https://boostnote.io/)**: It surprised me with its current features because when I met it for a year ago, it likes other ones which lack many features. Honestly, with Bootsnote now, you have all above needs except that, you can only sync your notes via Dropbox (but not so easy to do that).

**How about others?** [Google Keep](http://keep.google.com) (it's a to-do list app), [SimpleNote](https://simplenote.com/) (it's not good for math and coding), [OneNote](https://www.onenote.com/) (It's so complicated for quickly noting, its block styling mechanism seems to be annoying and it's not good for math and coding notes), [Zoho Notebook](https://www.zoho.com/notebook/) (it likes Google Keep), [Bear](https://bear.app/) (it's not free and only for Apple's services), [Squid](https://www.squidnotes.com/) (it's for handwriting-supported devices).

</div>
</div>


## Creating a note-taking website

Read [this article](/tutorial/create-github-pages-with-given-theme){:target="_blank"} to create a free website with Github Pages and [NoteTheme](https://github.com/dinhanhthi/NoteTheme) theme. Because **I created this theme** (I actually modified from Matjek), it has most of the features we need for a note-taking service listed above.


<div class="tomTat">
<div id="btTomTat" class="collapsed" data-toggle="collapse" href="#ndTomTat">
<span>Why NoteThem?</span>
</div>
<div id="ndTomTat" markdown="1" class="ndTomTat collapse multi-collapse">
- Clean & **Simple** & **Beautiful** (see [demo](https://dinhanhthi.github.io/NoteTheme/))
- Full supports and **frequently update**
- Support a lot of useful **components for taking notes** (see [full list](http://dinhanhthi.github.io/NoteTheme/how-to-use-notetheme))
- Display **Table of Contents** automatically on a fixed sidebar (and on the post content)
- Integrate **[disqus](http://disqus.com)** comment system.
- Integrate **[Mathjax](https://www.mathjax.org/)** which supports typing math equations.
- Integrate **[DataCamp Light](https://github.com/datacamp/datacamp-light)** which supports embedding side-by-side Python/R code environment (see [demo](https://cdn.datacamp.com/dcl-react/standalone-example.html) for this)
- Support **search** on site quickly ([demo](http://dinhanhthi.github.io/NoteTheme/search?q=welcome))
- Support **tags and categories** for posts.
- Mobile friendly
- Search engine friendly
- **Invisible** option: make your site invisible to search engines
</div>
</div>


<div class="tomTat">
<div id="btTomTat" class="collapsed" data-toggle="collapse" href="#ndTomTat1">
<span>Why Github Pages and Jekyll?</span>
</div>
<div id="ndTomTat1" markdown="1" class="ndTomTat collapse multi-collapse">
Because they **go together**, **free** and **easy to setup**. You can also [couple Jekyll with Gitlab Pages](https://www.chenhuijing.com/blog/hosting-static-site-gitlab-pages/) but there are some disadvantages of [Gitlab](https://about.gitlab.com/features/pages/) in comparison with Github Pages (complicated to setup, long time generating, non-flexible urls,...). However, Gitlab has advantages in giving free private repositories and supporting third party jekyll plugins. It depends on you to choose but I recommend Github Pages.
</div>
</div>



## Texting with Markdown

When working with Jekyll and Github Pages, you must choose a "good" markdown editor: **easy to edit** and **organize** the document.

<div class="tomTat">
<div id="btTomTat" class="collapsed" data-toggle="collapse" href="#ndTomTat2">
<span>What's "good"?</span>
</div>
<div id="ndTomTat2" markdown="1" class="collapse multi-collapse ndTomTat">
1. *Supporting key-binding/keyboard shortcut (bold/italic texts, insert links, ...)*
2. *Supporting table of contents (toc) generated based on headings*
3. *Supporting search and replace*
4. *Supporting generating markdown syntax (differences for headings, code blocks, bold or italics texts,...)*
5. Supporting auto-completion
6. Supporting syntax highlights for code
7. Supporting tab
 codes, math block, quotes, ...)

For my personal experience, a good markdown at least has 3 features "1 to 4".
</div>
</div>

Sadly, there is no markdown editor supporting all the above features (I tried them all). 

- You may find on the first results on Google that [Typora](https://typora.io/) is the best one for typing Markdown. However, it's advantage is also it's disadvantage when our note takes large and complicated contents (especially for codes).
- [Abricotine](http://abricotine.brrd.fr) is also a good choice but less "WYSIWYG" than Typora. However, when our block of codes contains symbol `#` or `---`, it automatically uses markdown engine to convert to corresponding html syntax. That makes our document look ugly and it's not good for note taking.

What we need is a tool at least has the ability to **search and replace** so that we can modify many "wrong words" at the same time. We also need to **distinguish headings, code blocks, links, images** for easily typing texts. The most necessary feature is the **supporting of keyboard shortcut**, for example, we just use <kbd>Ctrl</kbd> + <kbd>B</kbd> to bold a text instead of typing 4 times symbol `*` or use <kbd>Ctrl</kbd> + <kbd>K</kbd> to insert quickly a link instead of typing a full phrase `[text](link)`, ...

For that need, I recommend using **[MarkdownPad](http://markdownpad.com/)** (Windows) and **[Visual Studio Code](https://code.visualstudio.com/)** with extensions **[Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)** and **[Markdown Shortcuts](https://marketplace.visualstudio.com/items?itemName=mdickin.markdown-shortcuts)** (Linux). I have not tested any app on MacOS.

<div class="alert alert-warning" role="alert" markdown="1">
In previous version of this post, I recommended using **[Marker](https://fabiocolacio.github.io/Marker/)** on Linux. However, it supports weakly "search and replace" function. It meets also some "flash screen" error while typing and it doesn't support table of content on the sidebar.
</div>


## Create a local website which is the same to remote

We don't want our drafts or under-modifying templates are exposed to the public while they are not ready. We want to have a very the same website with the real one on our local machine so that we can make every test on it before publishing.

You can read [this article](/tutorial/make-a-local-jekyll-website) for a full instruction of creating a local Jekyll website. When you want to run it, you just run

<div class="terminal">
$ bundle exec jekyll serve
</div>

This corresponding to `http://localhost:4000`. If you want to create 2 local websites, you can run the following line which is corresponding to `http://localhost:1234`.

<div class="terminal">
$ bundle exec jekyll serve --port 1234
</div>



## Sync between local and remote

When working with local website and remote website at the same time, you will have two separated folders located on your computer: one for local (`local-folder`), one for remote (`remote-folder`). You make some changes on `local-folder` but what you use to push to remote is the content in `remote-folder`. You cannot track by yourself the changes and do the copy-paste work. [**FreeFileSync**](https://freefilesync.org) will help you to do that. It determines automatically the differences between two folders.

{% include img/full.html src="/img/post/tutorial/note/freefilesync.png" des="FreeFileSync UI (source: FreeFileSync)" %}

- **On the left**: you choose `local-folder`.
- **On the right**: you choose `remote-folder`.
- You choose option **Mirror** in the **Synchronize** button. This choice will track all changes on `local-folder` (by pressing button **Compare**) and then overwrite them to `remote-folder` (by pressing button **Synchronize**). You must <mark>be careful on this step</mark> because all contents on the right will be lost and be replaced by the left's ones.
- If there are some folders or files you don't want FFS to compare between two folders, you can choose them and then make a right click to choose **Exclude via ...**. All the exclusions will be saved and FFS will not compare them on the next time.
- Don't forget the small section on the bottom left window, you can exclude a folder in this section.
- Use the icon **Save** on the top left window to save all your settings for the pair `local-folder`-`remote-folder`. Next time you want to compare them, just double-click on the saved title.
- <mark>Don't forget to pull all changes from the remote</mark> to `remote-folder` before using FFS. If you don't, there will be many conflicts with git which are not so easy to fix.

You can use either [Github Desktop](https://desktop.github.com/) (Windows, MacOS) or [GitKraken](https://www.gitkraken.com/) (all platforms) to clone, pull, push the changes between `remote-folder` and remote (Github's server).

## Working on different machines

If you work on many computers or many operate systems. You want that the change on `local-folder` on `computer-1` will automatically update to `local-folder` on `computer-2`. It's easy with a sync service like [Dropbox](http://dropbox.com), [Microsoft OneDrive](https://onedrive.live.com/) or [Google Drive](https://drive.google.com). I choose **Dropbox** because we don't need to download again the content from remote to local whenever we reinstall the computer and there is still an old dropbox folder on it.

