---
layout: post
title: "How to build a local Jekyll website"
description: Run your website locally
tags: [jekyll]
img: jekyll.png
categories: tutorial
math: 1
---

{% assign img-src = "/img/post/tutorial/github-pages" %}

In this post, I show you a simple way to make a Jekyll website locally (without the internet) using available themes.

<h4 class="post-more">TL;DR</h4>

- Creating a blank site,

	<div class="tomTat">
	<div id="btTomTat" class="collapsed" data-toggle="collapse" href="#ndTomTat3">
	  <span>See all steps</span>
	</div>
	<div id="ndTomTat3" markdown="1" class="collapse multi-collapse ndTomTat">

	1. Install **Ruby and its dependencies**. Check step 1 in [this section](/tutorial/make-a-local-jekyll-website#create-a-new-blank-website).
	2. Install **Jekyll Bundler**.

		<div class="terminal">
		<span>$</span> gem install jekyll bundler
		</div>
	3. Choose a place to store all local websites, namely **LocalSites**.
	4. Create and run the new Jekyll site

		<div class="terminal" markdown="1">
		<span>$</span> cd LocalSites<br />
		<span>$</span> jekyll new \<name-of-site\><br />
		<span>$</span> cd \<name-of-site\> <br />
		<span>$</span> bundle jekyll exec serve --port 1234
		</div>

		Browse **http://localhost:1234** to see your result.
	5. If there are some errors, check step 5 in [this section](/tutorial/make-a-local-jekyll-website#create-a-new-blank-website).

	</div>
	</div>

- Using available themes,

	<div class="tomTat">
	<div id="btTomTat" class="collapsed" data-toggle="collapse" href="#ndTomTat4">
	  <span>See all steps</span>
	</div>
	<div id="ndTomTat4" markdown="1" class="collapse multi-collapse ndTomTat">

	1. Install **Ruby and its dependencies**. Check step 1 in [this section](/tutorial/make-a-local-jekyll-website#create-a-new-blank-website).
	2. Install **Jekyll Bundler**.

		<div class="terminal">
		<span>$</span> gem install jekyll bundler
		</div>
	3. Choose a place to store all local websites, namely **LocalSites**. 
	4. [Choose and download](http://jekyllthemes.org/) a theme, e.g. **Jasper2**.
	5. Install particular gems of the theme,

		<div class="terminal" markdown="1">
		<span>$</span> cd LocalSites<br />
		<span>$</span> cd jasper2<br />
		<span>$</span> bundle install
		</div>
	6. Modify theme's settings: make sure that fields `url` and `baseurl` are blank.
	7. Create and run the new Jekyll site

		<div class="terminal" markdown="1">
		<span>$</span> bundle jekyll exec serve --port 1234
		</div>

		Browse **http://localhost:1234** to see your result.
	8. If there are some errors, check step 5 in [this section](/tutorial/make-a-local-jekyll-website#create-a-new-blank-website).

	</div>
	</div>

{% include toc.html %}

## Why we need a local website?

You have an online Jekyll website, you have many "draft" posts, you have many customs on the theme you are building but you don't want to test them on the final version where everyone can see it. **It's easier if you can test all things on your local machine before publishing them**.

{% include more.html content="[Quickly create a website with Github Pages and available themes](/tutorial/create-github-pages-with-given-theme)" %}

A local Jekyll website has all features of a normal Jekyll website. It has even more advantages than Github Pages because you can use third party plugins on a local website whereas Github Pages doesn't support fully.

## Create a new blank website

In this section, you will create a local website with default jekyll theme. Actually, it's great only if you start to build by yourself a new Jekyll theme. Otherwise, you can check next section for using an available theme.

<div  class="thi-step">

<div class="step">
<div class="step-number"></div>
<div class="step-content" markdown="1">
**<sbj>Install Ruby.</sbj>** You need to be sure that you have already installed [Ruby](https://www.ruby-lang.org/en/downloads/), [RubyGems](https://rubygems.org/pages/download), [GCC](https://gcc.gnu.org/install/) and [Make](https://www.gnu.org/software/make/) on your system. Check their version by using below commands (if they are not installed, you can go to the corresponding links and follow the guides on their homepage). Note that, <mark>Jekyll requires Ruby 2.2.5 or above</mark>.

<div class="terminal">
<span>$</span> ruby -v<br/>
<span>$</span> gem -v<br/>
<span>$</span> gcc -v<br/>
<span>$</span> g++ -v<br/>
<span>$</span> make -v
</div>

<div class="tomTat">
<div id="btTomTat" class="collapsed" data-toggle="collapse" href="#ndTomTat">
  <span>On Windows, Ubuntu/Debian, Fedora and MacOS</span>
</div>
<div id="ndTomTat" markdown="1" class="collapse multi-collapse ndTomTat">

- On **Windows**, download and install [RubyInstaller](https://rubyinstaller.org/downloads/) (with DevKit). For more complicated cases, read [this](https://jekyllrb.com/docs/installation/windows/).
- On **Ubuntu/Debian** Linux,

	<div class="terminal">
<span>$</span> sudo apt-get install ruby ruby-dev build-essential
	</div>

	If you don't want to install Ruby Gems as a root user, we need to set up a gem installation directory for your user account. From this step, whenever you wanna install a new gem, just use `gem install` instead of `sudo gem install`.

	<div class="terminal">
<span>$</span> echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc<br/>
<span>$</span> echo 'export GEM_HOME=$HOME/gems' >> ~/.bashrc<br/>
<span>$</span> echo 'export PATH=<span>$</span>HOME/gems/bin:<span>$</span>PATH' >> ~/.bashrc<br/>
<span>$</span> source ~/.bashrc
	</div>
- On **Fedora** Linux,

	<div class="terminal">
<span>$</span> sudo dnf install ruby ruby-devel @development-tools
	</div>
- On **MacOS**, first you need to install the command-line tools,

	<div class="terminal">
<span>$</span> xcode-select --install
	</div>

	and then you need to install [Homebrew](https://brew.sh/) and use it to install Ruby,

	<div class="terminal">
<span>$</span> /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"<br />
	<span>$</span> brew install ruby
	</div>

</div>
</div>

</div>
</div>
<!-- end step 1 -->

<div class="step">
<div class="step-number"></div>
<div class="step-content" markdown="1">

**<sbj>Install Jekyll Bundler.</sbj>** After you have Ruby and their all necessary components installed on your system, you can start to install Jekyll and Bundler Gems

<div class="terminal">
<span>$</span> gem install jekyll bundler
</div>

Not that, sometimes you need to use `sudo` (on Linux) or open the terminal under admin users (Windows) to use above line of code.

</div>
</div>
<!-- end step 2 -->

<div class="step">
<div class="step-number"></div>
<div class="step-content" markdown="1">

**<sbj>Choose a place to store the local website.</sbj>** You need to choose a place on your computer to store the website's folder. Suppose that I choose `/LocalSites`.

</div>
</div>
<!-- end step -->


<div class="step">
<div class="step-number"></div>
<div class="step-content" markdown="1">

**<sbj>Create a new Jekyll site.</sbj>** You have all necessary tools to create a new blank Jekyll website on your system.

<div class="terminal" markdown="1">
<span>$</span> cd LocalSites<br />
<span>$</span> jekyll new \<name-of-site\>
</div>

After this command, a new folder named `<name-of-site>` will be created in the folder where terminal is working on. You can now start the local server to host this site by

<div class="terminal" markdown="1">
<span>$</span> cd \<name-of-site\> <br />
<span>$</span> bundle jekyll exec serve --port 1234
</div>

If you don't use `--port 1234`, the default port is `4000`, you can now browse your new website at ***http://localhost:1234***. It will look like,

![Default theme jekyll site]({{img-src}}/jekyll-local-default.png)

</div>
</div>
<!-- end step 3 -->

<div class="step">
<div class="step-number"></div>
<div class="step-content" markdown="1">

<div class="tomTat">
<div id="btTomTat" class="collapsed" data-toggle="collapse" href="#ndTomTat2">
  <span>If there is some error</span>
</div>
<div id="ndTomTat2" markdown="1" class="collapse multi-collapse ndTomTat">

- If you meet error "*commonmaker: failed to build gem native extension*", 
	- Check if you have already installed **Msys2**, or you can [download and install](http://www.msys2.org/) it for sure.
	- After that, you need to reinstall Ruby, download at [here](https://rubyinstaller.org/downloads/). Everything should be set as default.
	- Moreover, [Ruby-dev](https://rubyinstaller.org/downloads/) is also needed to be installed. On **Windows**, you need to extract the downloaded .zip file into system drive, i.e., *C:\RubyDevKit* and then

		<div class="terminal">
<span>$</span> cd C:\RubyDevKit <br />
<span>$</span> ruby dk.rb init <br />
<span>$</span> ruby dk.rb install
		</div>
- If the error relates to `ffi` (on **Linux**), 

	<div class="terminal">
<span>$</span> sudo apt-get install libffi-dev
	</div>
- If you meet something with `nokogiri`, 
	
	<div class="terminal">
<span>$</span> sudo apt-get install build-essential patch ruby-dev zlib1g-dev liblzma-dev <br />
<span>$</span> gem install nokogiri
	</div>
- In the later steps, if you meet "*Could not find … in any of the sources*", there are two ways to handle it,
	1. If the error tells you that you miss some packages, e.g. *Could not find abc-xyz-1.0.0*, install it,

		<div class="terminal">
<span>$</span> gem install abc-xyz
		</div>
	2. Open `Gemfile.lock` and modify the lines after `PLATFORMS` into

		~~~
PLATFORMS
java
		~~~

</div>
</div>

</div>
</div>

</div>


## Create locally website with an available Jekyll theme

If you want an "instant" websitre with some given themes, you can follow below steps.

<div  class="thi-step">

<div class="step">
<div class="step-number"></div>
<div class="step-content" markdown="1">

**<sbj>Install Ruby & Jekyll Bundler.</sbj>** Follow steps 1, 2 and 3 in the [previous section](/tutorial/make-a-local-jekyll-website#create-a-new-blank-website).

</div>
</div>

<div class="step">
<div class="step-number"></div>
<div class="step-content" markdown="1">
**<sbj>Choose a theme.</sbj>** There are [a lot of free Jekyll themes](http://jekyllthemes.org/) for you. Download one of theme as a zip file and then extract it to a folder in `LocalSites`. Suppose that I choose [Jasper2](http://jekyllthemes.org/themes/jasper2/) as a theme I want, so we have all files being in */LocalSites/jasper2/*.

~~~{% raw %}
| jasper2
|--- # some folders & files
|--- _layouts
|--- _posts
|--- _config.yml
|--- index.html
|--- # some folders & files
{% endraw %}~~~

</div>
</div>

<div class="step">
<div class="step-number"></div>
<div class="step-content" markdown="1">

**<sbj>Install particular gems of the theme.</sbj>** Run following line of code to install all gems that the theme needs, a file `Gemfile.lock` is also created in the same folder.

<div class="terminal" markdown="1">
<span>$</span> cd jasper2<br />
<span>$</span> bundle install
</div>

</div>
</div>

<div class="step">
<div class="step-number"></div>
<div class="step-content" markdown="1">
**<sbj>Modify some settings.</sbj>** Open file **\_config.yml** and make be sure some of following infomation are correct,

- `baseurl`: leave it blank.
- `url`: leave it blank.

There are many other options that you can customize as you wish. They depend on the theme you choose and what you want to add to your website. It's not the purpose of this post, I just want to make sure that you can properly run the site.

</div>
</div>

<div class="step">
<div class="step-number"></div>
<div class="step-content" markdown="1">

**<sbj>Run the site.</sbj>** If there is no error, you just use following line to run the site,

<div class="terminal" markdown="1">
<span>$</span> bundle jekyll exec serve –port 1234 
</div>

If you don't use `--port 1234`, the default port is `4000`, you can now browse your new website at ***http://localhost:1234***. It will look like,

![Jasper 2 theme jekyll local site]({{img-src}}/jekyll-local-jasper2.png)

</div>
</div>

<div class="step">
<div class="step-number"></div>
<div class="step-content" markdown="1">
**<sbj>Errors.</sbj>** If there is some error, follow step 5 in the [previous section](/tutorial/make-a-local-jekyll-website#create-a-new-blank-website).
</div>
</div>

</div>




