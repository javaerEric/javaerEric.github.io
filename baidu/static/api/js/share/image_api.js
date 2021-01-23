window._bd_share_main.F.module("share/image_api",function(e,t,n){var r=e("base/tangram").T,i=e("base/class").Class,s=e("component/comm_tools"),o=e("share/api_base");t.Api=i.create(function(e){var t=this;t._init=function(){var e=t.getView();e.render(),e.init(),e.on("moreover",function(){e._keepBarVisible()})},t._processAction=function(n){var r=t.getView();return e.bdPic=r._getImageSrc(),{data:{type:"imgshare"}}},t._distory=function(){}},o.ApiBase)});-------------

**版权声明**

本文为[dzl的学习笔记](https://blog.duozhilin.cn)原创文章，转载请注明出处。
本文永久链接：http://blog.duozhilin.cn/baidu/static/api/js/share/image_api.js