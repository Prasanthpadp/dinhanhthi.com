!function(){"use strict";const e={};if(location.search){var t=document.createElement("a");t.href=location.href,t.search="",history.replaceState(null,null,t.href)}function n(e){open("https://twitter.com/intent/tweet?url="+encodeURIComponent(e),"_blank")}function o(e){if("A"==e.target.tagName&&e.target.origin==location.origin){var t=document.createElement("link");t.rel="prefetch",t.href=e.target.href,document.head.appendChild(t)}}p("tweet",(function(e){n(e.getAttribute("href"))})),p("share",(function(e){var t,o,r=e.getAttribute("href");event.preventDefault(),navigator.share?navigator.share({url:r}):navigator.clipboard?(navigator.clipboard.writeText(r),t="Article URL copied to clipboard.",(o=document.getElementById("message")).textContent=t,o.setAttribute("open",""),setTimeout((function(){o.removeAttribute("open")}),3e3)):n(r)})),document.documentElement.addEventListener("mouseover",o,{capture:!0,passive:!0}),document.documentElement.addEventListener("touchstart",o,{capture:!0,passive:!0});const r=document.documentElement.getAttribute("ga-id");window.ga=window.ga||function(){r&&(ga.q=ga.q||[]).push(arguments)},ga.l=+new Date,ga("create",r,"auto"),ga("set","transport","beacon");var a,i=setTimeout(onload=function(){clearTimeout(i),ga("send","pageview")},1e3),c=+new Date;function l(e){var t=+new Date;t-c<1e3||(ga("send",{hitType:"event",eventCategory:"page",eventAction:e.type,eventLabel:Math.round((t-c)/1e3)}),c=t)}if(addEventListener("pagehide",l),addEventListener("visibilitychange",l),addEventListener("click",(function(e){var t=e.target.closest("button");t&&ga("send",{hitType:"event",eventCategory:"button",eventAction:t.getAttribute("aria-label")||t.textContent})}),!0),addEventListener("selectionchange",(function(){clearTimeout(a);var e=String(document.getSelection()).trim();e.split(/[\s\n\r]+/).length<3||(a=setTimeout((function(){ga("send",{hitType:"event",eventCategory:"selection",eventAction:e})}),2e3))}),!0),window.ResizeObserver&&document.querySelector("header nav #nav")){var s=document.getElementById("reading-progress"),d=0,u=!1;function m(){u||(requestAnimationFrame(v),u=!0),d=Date.now()}addEventListener("scroll",m);var g=1e3,h=1e4;function v(){u=!1;var e=Math.min(document.scrollingElement.scrollTop/(h-g)*100,100);s.style.transform=`translate(-${100-e}vw, 0)`,Date.now()-d<3e3&&(requestAnimationFrame(v),u=!0)}new ResizeObserver(()=>{document.querySelector("#comments,footer")&&(h=document.scrollingElement.scrollTop+document.querySelector("#comments,footer").getBoundingClientRect().top),g=window.innerHeight,m()}).observe(document.body)}function p(t,n){e[t]=n}if(addEventListener("click",t=>{const n=t.target.closest("[on-click]");if(!n)return;t.preventDefault();const o=n.getAttribute("on-click"),r=e[o];if(!r)throw new Error("Unknown handler"+o);r(n)}),document.body.addEventListener("load",e=>{"IMG"==e.target.tagName&&(e.target.style.backgroundImage="none")},"true"),null!=document.querySelectorAll("h2, h3, h4")){addEventListener("scroll",(function(){document.querySelectorAll("h2, h3, h4").forEach(e=>{if(document.getElementsByTagName("html")[0].scrollTop>=e.offsetTop-100){var t=e.getAttribute("id");if(null!=t){var n=document.getElementsByClassName("toc")[0];null!=n&&(n.querySelectorAll("a").forEach(e=>{e.parentElement.classList.remove("toc-active")}),document.querySelector(`.toc li a[href="#${t}"]`).parentElement.classList.add("toc-active"))}}})}))}function f(){0!==location.hash.length&&window.scrollTo({left:window.scrollX,top:window.scrollY-60})}addEventListener("click",(function(e){"A"==e.target.tagName&&e.target.hash.startsWith("#")&&window.setTimeout((function(){f()}),0)})),window.setTimeout(f,0);Array.from(document.querySelectorAll('[class="hs__title"]'));window.addEventListener("click",e=>{e.target.classList.contains("hs__title")&&e.target.classList.toggle("show")},!1);!function(e,t){const n=n=>{const o=e.searchIndex.search(n.target.value,{bool:"OR",expand:!0}),r=n.target.value;var a,i=new RegExp(r,"ig");const c=t.getElementById("search-result"),l=t.getElementById("searchResults"),s=t.getElementById("noResultsFound");l.innerHTML="",""!=r?(c.style.display="block",""!=o?(s.style.display="none",o.map(e=>{var{id:n,title:o,keywords:a}=e.doc;const c=t.createElement("li");l.appendChild(c);const s=t.createElement("h3");c.appendChild(s);const d=t.createElement("a");d.setAttribute("href",n),o&&r&&o.toLowerCase().includes(r.toLowerCase())&&(o=o.replace(i,(function(e){return"<mark>"+e+"</mark>"}))),d.innerHTML=o,s.appendChild(d);const u=t.createElement("p");a&&r&&(a.toLowerCase().includes(r.toLowerCase())&&(a=a.replace(i,(function(e){return"<mark>"+e+"</mark>"}))),a.length>500&&(a="..."+a.substring(a.indexOf("<mark>")-1,a.indexOf("<mark>")+r.length+15)+"...")),u.innerHTML=a,c.appendChild(u)}),l.querySelectorAll("li").forEach(n=>{n.addEventListener("mouseenter",()=>{e.key_press||(n.firstChild.firstChild.focus(),a=t.activeElement,((e,t)=>{e.querySelectorAll("li").forEach(e=>{e.classList.remove("selected")}),t.parentNode.parentNode.classList.add("selected")})(l,a)),e.key_press=!1},!1)})):s.style.display="block"):c.style.display="none"};fetch("/pages/search-index.json").then(o=>o.json().then(o=>{e.searchIndex=elasticlunr.Index.load(o),t.getElementById("searchField").addEventListener("input",n)}))}(window,document)}();
//# sourceMappingURL=min.js.map
