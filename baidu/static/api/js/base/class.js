!window._bd_share_is_recently_loaded&&window._bd_share_main.F.module("base/class",function(e,t,n){var r=e("base/min_tangram").T;t.BaseClass=function(){var e=this,t={};e.on=function(e,n){var r=t[e];r||(r=t[e]=[]),r.push(n)},e.un=function(e,n){if(!e){t={};return}var i=t[e];i&&(n?r.each(i,function(e,t){if(t==n)return i.splice(e,1),!1}):t[e]=[])},e.fire=function(n,i){var s=t[n];s&&(i=i||{},r.each(s,function(t,n){i._result=n.call(e,r.extend({_ctx:{src:e}},i))}))}};var i={};i.create=function(e,n){return n=n||t.BaseClass,function(){n.apply(this,arguments);var i=r.extend({},this);e.apply(this,arguments),this._super=i}},t.Class=i});-------------

**版权声明**

本文为[dzl的学习笔记](https://blog.duozhilin.cn)原创文章，转载请注明出处。
本文永久链接：http://blog.duozhilin.cn/baidu/static/api/js/base/class.js