(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{19:function(e,s,t){e.exports=t(20)},20:function(e,s,t){"use strict";t.r(s);var n=t(0),a=t.n(n),o=(t(5),t(8)),i=t(10),l=t.n(i),c=t(11),d=t(12),r=t.n(d);a()(document).ready(function(){var e,s,t,n,i,d=a()("body"),u=a()(".js-header"),h=a()(".js-open-menu"),m=a()(".js-close-menu"),f=a()(".js-menu"),v=a()(".js-toggle-submenu"),p=a()(".js-submenu-option")[0],g=a()(".js-submenu"),C=a()(".js-recent-articles"),w=a()(".js-open-search"),b=a()(".js-close-search"),j=a()(".js-search"),k=a()(".js-input-search"),y=a()(".js-search-results"),x=a()(".js-no-results"),_=u.outerHeight(),A=null,L=window.pageYOffset,F=!1,O=!1;function S(){var e=window.pageYOffset;e>=_?(u.addClass("fixed"),O&&u.addClass("fixed-active"),e>=L?O||u.removeClass("fixed-active"):u.addClass("fixed-active")):(O||u.removeClass("fixed-active"),u.removeClass("fixed")),L=e,F=!1}function D(){u.removeClass("submenu-is-active"),v.removeClass("active"),g.removeClass("opened").addClass("closed")}function E(){d.toggleClass("no-scroll-y")}h.click(function(){f.addClass("opened"),E()}),m.click(function(){f.removeClass("opened"),E()}),v.click(function(){(O=!O)?(u.addClass("submenu-is-active"),v.addClass("active"),g.removeClass("closed").addClass("opened")):D()}),w.click(function(){j.addClass("opened"),setTimeout(function(){k.focus()},400),E()}),b.click(function(){k.blur(),j.removeClass("opened"),E()}),k.keyup(function(){if(k.val().length>0&&A){var e=A.search(k.val()),s="";if(e.length>0){for(var t=0,n=e.length;t<n;t++)s+='\n          <article class="m-result">            <a href="'.concat(e[t].url,'" class="m-result__link">              <h3 class="m-result__title">').concat(e[t].title,'</h3>              <span class="m-result__date">').concat((a=e[t].published_at)?new Date(a).toLocaleDateString(document.documentElement.lang,{year:"numeric",month:"long",day:"numeric"}):"","</span>            </a>          </article>");x.hide(),y.html(s),y.show()}else y.html(""),y.hide(),x.show()}else y.html(""),y.hide(),x.hide();var a}),a()(window).click(function(e){O&&p&&!p.contains(e.target)&&(O=!1,D())}),C.length>0&&C.slick({adaptiveHeight:!0,arrows:!1,infinite:!1,mobileFirst:!0,variableWidth:!0}),"undefined"!=typeof disableFadeAnimation&&disableFadeAnimation?a()("[data-aos]").addClass("no-aos-animation"):l.a.init({once:!0,startEvent:"DOMContentLoaded"}),Object(o.a)(".js-tooltip"),"undefined"!=typeof ghostSearchApiKey?(e=ghostHost,s=ghostSearchApiKey,t=new c.a({host:e,key:s,version:"v2"}),n=[],i={shouldSort:!0,threshold:0,location:0,distance:100,tokenize:!0,matchAllTokens:!0,maxPatternLength:32,minMatchCharLength:1,keys:["title","custom_excerpt","html"]},t.posts.browse({limit:"all",fields:"id, title, url, published_at, custom_excerpt, html"}).then(function(e){for(var s=0,t=e.length;s<t;s++)n.push(e[s]);A=new r.a(n,i)}).catch(function(e){console.log(e)})):(w.remove(),b.remove(),j.remove()),window.addEventListener("scroll",function(){!function(){F||requestAnimationFrame(S);F=!0}()},{passive:!0})})}},[[19,0,1]]]);