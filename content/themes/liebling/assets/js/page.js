(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{25:function(t,e,a){t.exports=a(26)},26:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),o=a(3),s=a(4),c=a.n(s);i()(document).ready(function(){c()(".js-post-content"),function(){for(var t=document.querySelectorAll(".kg-gallery-image img"),e=0,a=t.length;e<a;e++){var n=t[e].closest(".kg-gallery-image"),i=t[e].attributes.width.value/t[e].attributes.height.value;n.style.flex="".concat(i," 1 0%")}}(),i()(".js-post-content").find("figure img").each(function(){i()(this).addClass("js-zoomable");var t=i()(this).parent().find("figcaption");t?i()(this).attr("alt",t.text()):i()(this).attr("alt","")}),Object(o.a)(".js-zoomable")})}},[[25,0,1]]]);