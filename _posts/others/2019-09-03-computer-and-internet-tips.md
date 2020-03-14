---
layout: post
title: "Computer & Internet tips"
categories: [others]
icon-photo: tips.svg
keywords: "download flash video browser extension video url google video download manager videoplay developer tools VSC visual studio code exclude files folders search technique skills patterns preference settings confige configure options remove apps google apps visual studio code vsc regex regular expression bit.ly cortana uses chrome instead of edge default browser windows 10 change default directory powershell ssh remote server cmder"
---

{% assign img-url = '/img/post/others' %}

{% include toc.html %}

## General

👉 Remove apps permission from Google Apps (Youtube, Google Play Music, …) ⇾ [here](https://myaccount.google.com/permissions).

👉 Change default directory in [cmder](https://cmder.net/)

1. Go to settings
1. Then, Startup > Tasks
1. Choose `{cmd::Cmder}`
1. Choose the below-right box, let the cursor at the end of the text
1. Click on "Startup dir…"
1. Choose your desired directory > OK
1. Remove the current line with the new appearing one (`new_console:d:%USERPROFILE%`)
1. Click on Save settings

## Windows

### Cortana uses Chrome instead of Edge

- Download and install [this app](https://github.com/da2x/EdgeDeflector/releases) (reinstall it after every update of Windows).
- Choose **EdgeDeflector** as the default web browser if it asks.
- Install [this extension](https://chrome.google.com/webstore/detail/chrometana-redirect-bing/) in Chrome to force to redirect from **Bing** to **Google Search Engine**.

### Change default directory in PowerShell

- Create a folder in your **Documents** folder called **WindowsPowerShell**
- Create a file called `profile.ps1` inside this folder
- Add following command `Set-Location c:\abc`
- Every time you launch PowerShell, the profile script will be executed


## Download flash video

In most case, you can use [Flash Video Downloader](https://chrome.google.com/webstore/detail/flash-video-downloader/aiimdkdngfcipjohbjenkahhlhccpdbc?hl=en) (for Chrome) or other extensions to detect the video url.

In the case browser extensions cannot capture the url, you can open the **Developer Tools** (in Chrome, press <kbd>F12</kbd>) > Reload the page and click to play again the video > **Network** tab > **Media** tab > click on any sources on the left column (`videoplayback?expire...`) > On the right column, in tab **Headers** > **General** > Copy the content in **Request URL**, something like below,

{:.bg-gray}
~~~
https://r4---sn-25ge7ns7.googlevideo.com/videoplayback?expire=1568040368&ei=kEl2Xb...f_cW7qE=
~~~ 

Open a new tab in your browser, <kbd>Ctrl</kbd> + <kbd>S</kbd> to save the video. You can also open the Downloads manager in your browser (<kbd>Ctrl</kbd> + <kbd>J</kbd>) to copy the download link and use other Download Manager tools to download this video without using the browser!

## Visual Studio Code

### Regular Expression

-  Using regular expression in Visual Studio (Code) ⇾ [ref](https://docs.microsoft.com/en-us/visualstudio/ide/using-regular-expressions-in-visual-studio?view=vs-2017)
- Replace current bit.ly text with its same url:
    - Find: `(http://bit.ly.*)` (Enable `.*`)
    - Replace: `[$1]($1)`

### Exlude files/folders in file search Visual Studio Code (VSC)

Go to **Preferences** > **Settings** > search `exclude` and modify inside section `Search: Exclude`. More patterns can be found [here](https://code.visualstudio.com/docs/editor/codebasics#_advanced-search-options).

Below is an example list,

~~~
**/node_modules
**/bower_components
**/*.code-search
**/_site
**/.jekyll-cache
**/.sass-cache
**/*.ico
**/*.png
**/*.ipynb
**/*.jpg
**/*.jpeg
**/*.svg
~~~

### Connect `ssh` folders in VSC

Read [this tutorial](https://code.visualstudio.com/blogs/2019/07/25/remote-ssh).

