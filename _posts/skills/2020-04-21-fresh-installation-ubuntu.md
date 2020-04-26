---
layout: post
title: "Fresh Ubuntu Installation"
categories: [others]
tags: [bash, linux]
icon-photo: ubuntu.svg
keywords: "to do list after installing ubuntu debian elementary os linux"
---

The basic steps I often do every time I install a new Ubuntu system. The order of things is important.

1. Download [Ubuntu ISO](https://ubuntu.com/download/desktop). If you like a MacOS-like version, you can choose [Elementary OS](https://elementary.io/).
2. Using [Rufus](https://rufus.ie/) to create a bootable USB drives.
3. Download and install [Google Chrome](https://www.google.com/chrome).
4. Make emojis showing up
~~~ bash
sudo apt install fonts-noto-color-emoji
~~~
5. Install Guake Terminal (drop-down terminal supporting tabs). We install it first because we working mainly on terminal.
~~~ bash
sudo apt install guake
~~~
5. Update & Upgrade
~~~ bash
sudo apt update & sudo apt upgrade
~~~
1. Change user avatar.
4. Auto install drivers
~~~ bash
sudo ubuntu-drivers autoinstall
~~~
In case you wanna switch between Intel (more power efficient) and NVDIA driver (more powerful)
~~~ bash
sudo prime-select intel 
sudo prime-select nvidia
~~~
5. Check the NVDIA driver and install the newest version: check in **Additional Drivers**. In case you wanna remove it and reinstall it later, use 
~~~ bash
sudo apt purge nvidia-*
~~~
6. Install video codecs,
~~~ bash
sudo apt install ubuntu-restricted-extras
~~~
1. Log in to online accounts: Google, Ubuntu One, StackOverflow, Notion, Trello, Facebook,...
2. Download and install an email client, I use [Mailspring](https://getmailspring.com/). Log in to email accounts and let Mailspring downloads the necessary things.
3. Install **GoldenDict** (app store) and [dictionaries](https://drive.google.com/open?id=1jna8_grA-wyhPrq8BiB7ypadvW3tTlIv).
4. Python is installed on Ubuntu system with 2 versions. By default, `python` prefers version 2, if you wanna use python 3, you can use `python3` or add an alias
~~~ bash
alias python='python3' # and call python 2 as `python2`
~~~
Install PIP
~~~ bash
pip sudo apt install python3-pip
alias pip=pip3
~~~
5. [Visual Studio Code](https://code.visualstudio.com/) and its basic extensions: Bracket Pair Colorizer, Docker, Linux Themes for VS Code, Markdown All in One, Markdown Shortcuts, Remote Development, Python, Auto Close Tags

    Also add below settings to setting json file (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> and search "Preferences: Open Settings (JSON)", it's in `~/.config/Code/User`)
6. Install GIT
~~~ bash
install git: sudo apt install git-all
~~~
1. Install Git Client as [Gitkraken](https://www.gitkraken.com/). Log in with Github account and clone [all working repositories](https://github.com/dinhanhthi?tab=repositories).
2. [Slack](https://slack.com/intl/en-fr/downloads/linux) and sign in.
3. Install GNOME Shell extensions
~~~ bash
sudo apt install gnome-shell-extensions
~~~
    Install also [chrome extension](https://extensions.gnome.org/). Go to the corresponding extension link and turn it on and install it. List of useful extensions: [Start Overlay in Application View](https://extensions.gnome.org/extension/1198/start-overlay-in-application-view/), [ESC to close overview from applications list](https://extensions.gnome.org/extension/1122/esc-to-close-overview-from-applications-list/), [Caffein](https://extensions.gnome.org/extension/517/caffeine/), [Dash to Panel](https://extensions.gnome.org/extension/1160/dash-to-panel/), [Alt-Tab Switcher Popup Delay Removal](https://extensions.gnome.org/extension/1317/alt-tab-switcher-popup-delay-removal/), [Sound Input & Output Device Chooser](https://extensions.gnome.org/extension/906/sound-output-device-chooser/).
1. [Microsoft Teams](https://teams.microsoft.com/).
2. [IBUS Bamboo](https://github.com/BambooEngine/ibus-bamboo), Vietnamese Input Method. Need to restart Ibus and choose Bamboo in the keyboard layout. You can use also <kbd>Shift</kbd> + <kbd>~</kbd> for changing the options (remove the underline, for example). Use <kbd>Super</kbd> + <kbd>Space</kbd> to change between input methods.
3. Make things in **Tweaks** tool. For example, choose theme "Adwaita-dark".
4. Google Drive client for Ubuntu: [OverGrive](https://www.thefanclub.co.za/overgrive) (5\$ for each account).
5. LaTeX
~~~ bash
sudo apt-get install texlive-full # 5GB
sudo apt-get install texmaker
~~~
5. If you install Matlab, you can install `matlab-support` to add matlab icon to applications. Note that, if matlab exe file is at `/usr/local/MATLAB/R2017b/bin/matlab`, we add the location of folder as `/usr/local/MATLAB/R2017b/`.
6. Use <kbd>super</kbd> + <kbd>E</kbd> to open File Manager: change in Keyboard shortcut.
7. Default text editor `gedit`, you can use this command in terminal.
8. **Gnome Calendar** in app store.
9. Screen Recorder, use **Kazam** (app store).
10. VLC (app store).
11. Read SD card
~~~ bash
sudo apt-get install exfat-utils exfat-fuse
~~~
12. Other applicatons: [WPS Office](https://www.wps.com/), [Skype](https://www.skype.com/en/get-skype/), [Extreme Download Manager](https://subhra74.github.io/xdm/). 