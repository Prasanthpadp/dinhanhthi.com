# v0.dinhanhthi.com [![Netlify Status](https://api.netlify.com/api/v1/badges/df7275e7-df7f-4b69-b853-1bd0e6413e60/deploy-status)](https://app.netlify.com/sites/suspicious-payne-80a830/deploys)

Source code of my personal website (using Jekyll). If you would like to use this source code, please indicate me in the credit and let me know first, thanks! My email: dinhanhthi@gmail.com.

⭐ **Demo**: https://v0.dinhanhthi.com/

![Home page](./img/github/front-1.png)

![Home page](./img/github/front-2.png)

![Home page](./img/github/front-3.png)

![Home page](./img/github/front-4.jpg)

![Reading page](./img/github/reading.png)

![Blog page](./img/github/blog.png)

## Build and deploy

__Note__: On Windows, you should [use WSL2](https://dinhanhthi.com/docker-wsl2-windows) to run Jekyll site.

After cloning to a local server, run these:

~~~
# install git

# install ruby
ruby --version

# install bundler
gem install bundler

# cd to the repo directory and install gems
bundle install

# run the server (http://localhost:4000)
bundle exec jekyll serve

# incremental build (only build the changes, faster)
bundle exec jekyll serve -I
~~~