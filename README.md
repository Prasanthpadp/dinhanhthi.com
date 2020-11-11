# dinhanhthi.com [![Netlify Status](https://api.netlify.com/api/v1/badges/ace14869-1b28-471b-ad0f-5f1f7defa382/deploy-status)](https://app.netlify.com/sites/inspiring-goldstine-cfc130/deploys)

Source code of my personal website. If you would like to use this source code, please indicate me in the credit and let me know first, thanks! My email: dinhanhthi@gmail.com.

## Using docker?

``` bash
# Open Gemfile and comment out "jekyll-feed" and "jeyll-sitemap" and then
git update-index --assume-unchanged Gemfile

# build container
cd docker
docker-compose up -d
# wait a little bit for it to build at the 1st time

# whenever working
docker start dat_local

# update changes for principle pages
sh update_dat.sh
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

# build also the posts in `_drafts`
bundle exec jekyll serve --draft
~~~