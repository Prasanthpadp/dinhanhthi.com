!function(){"use strict";const e={};if(location.search){var t=document.createElement("a");t.href=location.href,t.search="",history.replaceState(null,null,t.href)}var n;function a(e){if("A"==e.target.tagName&&e.target.origin==location.origin){var t=document.createElement("link");t.rel="prefetch",t.href=e.target.href,document.head.appendChild(t)}}n=function(e){var t;t=e.getAttribute("href"),open("https://twitter.com/intent/tweet?url="+encodeURIComponent(t),"_blank")},e["tweet"]=n,document.documentElement.addEventListener("mouseover",a,{capture:!0,passive:!0}),document.documentElement.addEventListener("touchstart",a,{capture:!0,passive:!0});const r=document.documentElement.getAttribute("ga-id");window.ga=window.ga||function(){r&&(ga.q=ga.q||[]).push(arguments)},ga.l=+new Date,ga("create",r,"auto"),ga("set","transport","beacon");var o,i=setTimeout(onload=function(){clearTimeout(i),ga("send","pageview")},1e3),c=+new Date;function s(e){var t=+new Date;t-c<1e3||(ga("send",{hitType:"event",eventCategory:"page",eventAction:e.type,eventLabel:Math.round((t-c)/1e3)}),c=t)}if(addEventListener("pagehide",s),addEventListener("visibilitychange",s),addEventListener("click",(function(e){var t=e.target.closest("button");t&&ga("send",{hitType:"event",eventCategory:"button",eventAction:t.getAttribute("aria-label")||t.textContent})}),!0),addEventListener("selectionchange",(function(){clearTimeout(o);var e=String(document.getSelection()).trim();e.split(/[\s\n\r]+/).length<3||(o=setTimeout((function(){ga("send",{hitType:"event",eventCategory:"selection",eventAction:e})}),2e3))}),!0),window.ResizeObserver&&document.querySelector("header nav #nav")){var l=document.getElementById("reading-progress"),d=0,u=!1;function m(){u||(requestAnimationFrame(v),u=!0),d=Date.now()}addEventListener("scroll",m);var g=1e3,h=1e4;function v(){u=!1;var e=Math.min(document.scrollingElement.scrollTop/(h-g)*100,100);l.style.transform=`translate(-${100-e}vw, 0)`,Date.now()-d<3e3&&(requestAnimationFrame(v),u=!0)}new ResizeObserver(()=>{document.querySelector("#comments,footer")&&(h=document.scrollingElement.scrollTop+document.querySelector("#comments,footer").getBoundingClientRect().top),g=window.innerHeight,m()}).observe(document.body)}if(addEventListener("click",t=>{const n=t.target.closest("[on-click]");if(!n)return;t.preventDefault();const a=n.getAttribute("on-click"),r=e[a];if(!r)throw new Error("Unknown handler"+a);r(n)}),document.body.addEventListener("load",e=>{"IMG"==e.target.tagName&&(e.target.style.backgroundImage="none")},"true"),null!=document.querySelectorAll("h2, h3, h4")){addEventListener("scroll",(function(){document.querySelectorAll("h2, h3, h4").forEach(e=>{if(document.getElementsByTagName("html")[0].scrollTop>=e.offsetTop-100){var t=e.getAttribute("id");if(null!=t){var n=document.getElementsByClassName("toc")[0];null!=n&&(n.querySelectorAll("a").forEach(e=>{e.parentElement.classList.remove("toc-active")}),document.querySelector(`.toc li a[href="#${t}"]`).parentElement.classList.add("toc-active"))}}})}))}function p(){0!==location.hash.length&&window.scrollTo({left:window.scrollX,top:window.scrollY-60})}addEventListener("click",(function(e){"A"==e.target.tagName&&e.target.hash.startsWith("#")&&window.setTimeout((function(){p()}),0)})),window.setTimeout(p,0);Array.from(document.querySelectorAll('[class="hs__title"]'));window.addEventListener("click",e=>{e.target.classList.contains("hs__title")&&e.target.classList.toggle("show")},!1);const f=(e,t)=>{e.querySelectorAll("li").forEach(e=>{e.classList.remove("selected")}),t.classList.add("selected")};!function(e,t){const n=n=>{const a=e.searchIndex.search(n.target.value,{bool:"OR",expand:!0}),r=n.target.value;var o=new RegExp(r,"ig");const i=t.getElementById("nav-search__result-container"),c=t.getElementById("nav-search__ul"),s=t.getElementById("nav-search__no-result");c.innerHTML="",""!=r?(i.style.display="block",""!=a?(s.style.display="none",a.map(e=>{var{id:n,title:a,keywords:i,cat:s,target:l}=e.doc;const d=t.createElement("li");c.appendChild(d);const u=t.createElement("div");u.setAttribute("class","item__icon"),d.appendChild(u);const m=t.createElement("img");m.setAttribute("src",s),u.appendChild(m);const g=t.createElement("div");g.setAttribute("class","item__content"),d.appendChild(g);const h=t.createElement("h3");g.appendChild(h);const v=t.createElement("a");v.setAttribute("href",n),v.setAttribute("target",l),a&&r&&a.toLowerCase().includes(r.toLowerCase())&&(a=a.replace(o,(function(e){return"<mark>"+e+"</mark>"}))),v.innerHTML=a,h.appendChild(v);const p=t.createElement("p");i&&r&&(i.toLowerCase().includes(r.toLowerCase())&&(i=i.replace(o,(function(e){return" <mark>"+e+"</mark>"}))),i.indexOf("<mark>")>10&&(i="..."+i.substring(i.indexOf("<mark>")-10))),p.innerHTML=i,g.appendChild(p);const f=t.createElement("div");f.setAttribute("class","enter"),d.appendChild(f);const E=t.createElement("img");E.setAttribute("src","/img/nav/enter.svg"),f.appendChild(E)}),c.firstChild.classList.add("selected"),c.querySelectorAll("li").forEach(e=>{e.addEventListener("mousemove",()=>{f(c,e)},!1),e.getElementsByClassName("item__content")[0].firstChild.firstChild.addEventListener("focus",()=>{f(c,e)},!1)})):s.style.display="block"):i.style.display="none"};fetch("/pages/search-index.json").then(a=>a.json().then(a=>{e.searchIndex=elasticlunr.Index.load(a),t.getElementById("nav-search__input").addEventListener("input",n)}))}(window,document)}();
//# sourceMappingURL=min.js.map
