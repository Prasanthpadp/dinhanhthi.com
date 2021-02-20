# v1.dinhanhthi.com [![Netlify Status](https://api.netlify.com/api/v1/badges/fa6c0045-fc9e-404d-a1d1-ab2b3c75d4a1/deploy-status)](https://app.netlify.com/sites/stoic-wing-b25942/deploys)

Source code of my personal website (using Jekyll). If you would like to use this source code, please indicate me in the credit and let me know first, thanks! My email: dinhanhthi@gmail.com.

⭐ **Demo**: https://v1.dinhanhthi.com/

![Home page](./img/github/home-1.png)

![Home page](./img/github/home-2.png)

![Home page](./img/github/home-3.png)

![About page](./img/github/pages.png)

![Note page](./img/github/post.png)

## Using docker?

``` bash
# build container
cd docker
docker-compose -p "dat_v1" up -d
# wait a little bit for it to build at the 1st time

# whenever working
docker start dat_local_v1
# NOTE: for the 1st run, it takes a little long time to build and serve
# You can check what are running on background with
docker attach dat_local_v1
```

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