---
layout: post
title: "Docker + GPUs"
categories: [deploy & run]
tags: [bash, ide, linux, docker, "deploy & run", pytorch, tensorflow, gpu]
icon-photo: docker.svg
keywords: "pybash tania rascia CI CD continuous integration deployment pipeline docker idea how to use airflow kubernetes k8s k apache container images dangling images vscode vsc visual studio code ssh container env environnement file variable nvidia docker runtime gpus tensorflow torch"
---

{% assign img-url = '/img/post/deploy/docker' %}

{% include toc.html %}

👉 [Docker note](/docker).

## With Tensorflow or PyTorch

👉 [Official doc for TF + docker](https://www.tensorflow.org/install/docker) <br />
👉 My [note for docker + TF](/tensorflow#installation-with-docker). <br />
👉 [An example of docker pytorch with gpu support](https://github.com/dinhanhthi/git_dataswati/tree/master/docker-thi).

## Check info

``` bash
# verify that your computer has a graphic card
lspci -nn | grep '\[03'
```

``` bash
# First, install drivers and check
nvidia-smi
# output: NVIDIA-SMI 450.80.02 Driver Version: 450.80.02    CUDA Version: 11.0
# it's maximum CUDA version that your driver supports
```

``` bash
# install and check nvidia-docker
dpkg -l | grep nvidia-docker
# or
nvidia-docker version
```

``` bash
# Verifying –gpus option under docker run
docker run --help | grep -i gpus
# output: --gpus gpu-request GPU devices to add to the container ('all' to pass all GPUs)
```

``` bash
# Listing out GPU devices
docker run -it --rm --gpus all ubuntu nvidia-smi -L
# output: GPU 0: GeForce GTX 1650 (...)
```

``` bash
# Verifying again with nvidia-smi
docker run -it --rm --gpus all ubuntu nvidia-smi
```

``` bash
# test a working setup container-toolkit
sudo docker run --rm --gpus all nvidia/cuda nvidia-smi
```

``` bash
# test a working setup container-runtime
docker run --runtime=nvidia --rm nvidia/cuda nvidia-smi
```

## Install `nvidia-docker2`

{% hsbox More information ([ref](https://github.com/NVIDIA/nvidia-docker/issues/1268)) %}
> This package is the only docker-specific package of any of them. It takes the script associated with the `nvidia-container-runtime` and installs it into docker's `/etc/docker/daemon.json` file for you. This then allows you to run (for example) `docker run --runtime=nvidia ...` to automatically add GPU support to your containers. It also installs a wrapper script around the native docker CLI called `nvidia-docker` which lets you invoke docker without needing to specify `--runtime=nvidia` every single time. It also lets you set an environment variable on the host (NV_GPU) to specify which GPUs should be injected into a container.
{% endhsbox %}


👉 [Officicial guide to install](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/install-guide.html#docker).

``` bash
distribution=$(. /etc/os-release;echo $ID$VERSION_ID)
curl -s -L https://nvidia.github.io/nvidia-docker/gpgkey | sudo apt-key add -
curl -s -L https://nvidia.github.io/nvidia-docker/$distribution/nvidia-docker.list | sudo tee /etc/apt/sources.list.d/nvidia-docker.list

sudo apt-get update
sudo apt-get install -y nvidia-docker2

# restart docker
sudo systemctl restart docker
```

``` bash
# check version
nvidia-docker version
```

## Difference: `nvidia-container-toolkit` vs `nvidia-container-runtime`

👉 [What's the difference between the lastest nvidia-docker and nvidia container runtime？](https://github.com/NVIDIA/nvidia-docker/issues/1268)

> In this note, with Docker 19.03+ (`docker --version`), he says that `nvidia-container-toolkit` is used for `--gpus` (in `docker run ...`), `nvidia-container-runtime` is used for `--runtime=nvidia` (can also be used in `docker-compose` file).

> However, <mark markdown="span">if you want to use Kubernetes with Docker 19.03, you actually **need to continue using nvidia-docker2**</mark> because Kubernetes doesn't support passing GPU information down to docker through the --gpus flag yet. It still relies on the nvidia-container-runtime to pass GPU information down the stack via a set of environment variables.

👉 [Installation Guide — NVIDIA Cloud Native Technologies documentation](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/install-guide.html#docker)

## Using docker-compose?

Purpose?

<div class="flex-50" markdown="1">
``` bash
# instead of using
docker run \
    --gpus all\
    --name docker_thi_test\
    --rm\
    -v abc:abc\
    -p 8888:8888
```

``` bash
# we use this with docker-compose.yml
docker-compose up
```
</div>

``` bash
# check version of docker-compose
docker-compose --version
```

``` bash
# DOCKER-COMPOSE'S VERSION < 2.3
# Modify: /etc/docker/daemon.json
{
    "default-runtime": "nvidia",
    "runtimes": {
        "nvidia": {
            "path": "nvidia-container-runtime",
            "runtimeArgs": []
        }
    }
}
```

``` bash
# restart our docker daemon
sudo pkill -SIGHUP dockerd
```

``` bash
# DOCKER-COMPOSE'S VERSION >=2.3
# docker-compose.yml => able to use "runtime"
version: '2.3' # THIS ONE!!!
services:
  testing:
    ports:
      - "8000:8000"
    runtime: nvidia
    volumes:
      - ./object_detection:/object_detection
```

👉 Check more in my repo [my-dockerfiles](https://github.com/dinhanhthi/my-dockerfiles) on Github.

Run the test,

``` bash
docker pull tensorflow/tensorflow:latest-gpu-jupyter
mkdir ~/Downloads/test/notebooks
```

Without using `docker-compose.yml` (tensorflow) (cf. [this note](/tensorflow#without-docker-compose) for more)

``` bash
docker run --name docker_thi_test -it --rm -v $(realpath ~/Downloads/test/notebooks):/tf/notebooks -p 8888:8888 tensorflow/tensorflow:latest-gpu-jupyter
```

With `docker-compose.yml`?

``` bash
# ~/Download/test/Dockerfile
FROM tensorflow/tensorflow:latest-gpu-jupyter
```

``` yaml
# ~/Download/test/docker-compose.yml
version: '2'
services:
  jupyter:
    container_name: 'docker_thi_test'
    build: .
    volumes:
        - ./notebooks:/tf/notebooks # notebook directory
    ports:
        - 8888:8888 # exposed port for jupyter
    environment:
        - NVIDIA_VISIBLE_DEVICES=0 # which gpu do you want to use for this container
        - PASSWORD=12345
```

Then run,

``` bash
docker-compose run --rm jupyter
```

## [OLD] Make NVIDIA work in docker (Linux)

{:.alert.alert-warning}
This section is still work (on 26-Oct-2020) but old for new methods.

**Idea**: Using NVIDIA driver of the base machine, don't install anything in docker!

<div class="hide-show-box">
<button type="button" markdown="1" class="btn collapsed box-button" data-toggle="collapse" data-target="#box1ct">
Detail of steps
</button>
<div id="box1ct" markdown="1" class="collapse multi-collapse box-content">

{:.noindent}
1. First, [maker sure](/pytorch#installation) your base machine has an NVIDIA driver.

	``` bash
	# list all gpus
	lspci -nn | grep '\[03'

	# check nvidia & cuda versions
	nvidia-smi
	```
2. Install [`nvidia-container-runtime`](https://github.com/NVIDIA/nvidia-container-runtime)

	``` bash
	curl -s -L https://nvidia.github.io/nvidia-container-runtime/gpgkey | sudo apt-key add -
	distribution=$(. /etc/os-release;echo $ID$VERSION_ID)

	curl -s -L https://nvidia.github.io/nvidia-container-runtime/$distribution/nvidia-container-runtime.list | sudo tee /etc/apt/sources.list.d/nvidia-container-runtime.list

	sudo apt-get update

	sudo apt-get install nvidia-container-runtime
	```
3. Note that, <mark markdown='span'>we cannot use `docker-compose.yml` in this case!!!</mark>
4. Create an image `img_datas` with `Dockerfile` is

	``` docker
	FROM nvidia/cuda:10.2-base

	RUN apt-get update && \
		apt-get -y upgrade && \
		apt-get install -y python3-pip python3-dev locales git

	# install dependencies
	COPY requirements.txt requirements.txt
	RUN python3 -m pip install --upgrade pip && \
		python3 -m pip install -r requirements.txt
	COPY . .

	# default command
	CMD [ "jupyter", "lab", "--no-browser", "--allow-root", "--ip=0.0.0.0"  ]
	```
5. Create a container,

	``` bash
	docker run --name docker_thi --gpus all -v /home/thi/folder_1/:/srv/folder_1/ -v /home/thi/folder_1/git/:/srv/folder_2 -dp 8888:8888 -w="/srv" -it img_datas

	# -v: volumes
	# -w: working dir
	# --gpus all: using all gpus on base machine
	```

[This article](https://towardsdatascience.com/how-to-properly-use-the-gpu-within-a-docker-container-4c699c78c6d1) is also very interesting and helpful in some cases.

</div>
</div>