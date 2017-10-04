/*
 *JS.Author:  sunduo
 *C.Time:    2017/9/24 1:18
 */
//封装sd_$库
(function (window) {
    this.sd_$ = {
        "Ver" : function () {
            return "1.0.0";
        },
        //Bvideo H5视频标签与资源标签创建调用函数（方法）
        /**
         *videoEle：放置视频标签元素
         *src：电影路径及视频名称
         *width：视频播放器宽度
         *height：视频播放器高度
         *voice：是否禁用视频声音布尔值
         */
        // jQuery方法
        // "Bvideo" : function (videoEle,src,voice) {
        //     var newVideo = $("<video></video>");
        //     var newSource = $("<source></source>");
        //     $(videoEle).append(newVideo);
        //     $(newVideo).attr({
        //         autoplay : "autoplay",
        //         loop : "loop",
        //         defaultMuted : voice || false
        //     });
        //     $(newVideo).append(newSource);
        //     $(newSource).attr({
        //         src: src + '.mp4',
        //         type: 'video/mp4'
        //     },
        //     {
        //         src: src + '.webm',
        //         type: 'video/webm;codecs="vp8, vorbis"'
        //     });
        //     $(newVideo).addClass("sd_video");
        // },
        //原生js写法
        "Bvideo" : function (videoEle,src,voice) {
            var Video = document.createElement ("video");
            var Source = document.createElement ("source");
            if(videoEle.charAt(0) === "#"){
                var newVideoEle = document.getElementById(videoEle.slice(1));
            }else if(videoEle.charAt(0) === "."){
                var newVideoEle = document.getElementById(videoEle.slice(1));
            }else {
                var newVideoEle = document.getElementsByTagName(videoEle)[0]
            }
            var beforeEle = newVideoEle.getElementsByClassName("fp-tableCell")[0];
            newVideoEle.insertBefore(Video,beforeEle);
            var newVideo = document.getElementsByTagName("video")[0];
            newVideo.appendChild (Source);
            var newSource = newVideo.getElementsByTagName("source")[0];
            var obj = {
                "autoplay" : "autoplay",
                "loop" : "loop",
                "defaultMuted" : voice || "false"
            };
            for(var i in obj){
                newVideo.setAttribute (i,obj[i]);
            }
            newSource.setAttribute ("src",src + '.mp4');
            newVideo.className = "sd_video";
        },
        //滑动导航jQuery写法
        "Nav" : function (ele,backgroundColor) {
            $(ele).append($("<p></p>")).parent().parent().parent().css({"background-color":backgroundColor});
            $(ele).find("li").mouseenter(function () {
                $(ele).find("p").addClass("sd_current").width($(this).width() + 40).animate({left : $(this).position().left},"linear");
            })
        },
        //滑动导航Js原生写法
        // "Nav" : function (ele,backgroundColor) {
        //     var newP = document.createElement("p");
        //     ele.appendChild(newP);
        //     ele.parentNode.parentNode.parentNode.style.backgroundColor = backgroundColor;
        //     var p = ele.getElementsByTagName("p")[0];
        //     for (var i = 0;i<ele.children.length - 1;i++){
        //         ele.children[i].onmouseenter = function (num) {
        //             return function () {
        //                 p.style.width = ele.children[num].offsetWidth + 20 +"px";
        //                 p.className = "sd_current";
        //                 var www = ele.children[num].offsetLeft - 10;
        //                 animate(p,www);
        //             };
        //         }(i);
        //     }
        //     //封装函数缓动动画
        //     function animate(ele,target){
        //         //要用先清，一盒一定时
        //         clearInterval(ele.timer);
        //         ele.timer = setInterval(function () {
        //             //1.获取步长
        //             var step = (target-ele.offsetLeft)/10;
        //             //2.二次处理步长
        //             step = step>0?Math.ceil(step):Math.floor(step);
        //             //3.赋值
        //             ele.style.left = ele.offsetLeft+step+"px";
        //             //4.清除 定时器
        //             if(Math.abs(target-ele.offsetLeft) <= Math.abs(step)){
        //                 ele.style.left = target+"px";
        //                 clearInterval(ele.timer);
        //             }
        //         },15);
        //     }
        // },
        //原生JS方法
        "Pop" : function (ele,width,height,backgroundColor) {
            if(ele.charAt(0) === "#"){
                var newEle = document.getElementById(ele.slice(1));
            }else if(ele.charAt(0) === "."){
                var newEle = document.getElementById(ele.slice(1));
            }else {
                var newEle = document.getElementsByTagName(ele)[0]
            }
            newEle.className = "sd_pop";
            newEle.style.width = width + "px";
            newEle.style.height = height + "px";
            newEle.style.backgroundColor = backgroundColor;
            newEle.style.lineHeight = height + "px";
        },
        //jQuery方法
        // "Pop" : function (ele,width,height,backgroundColor) {
        //     $(ele).addClass("sd_pop").css({"width": width,"height" : height,"background-color" : backgroundColor})
        // }
        //JS原生获取地址栏地址
        "href" : function () {
            var href = window.location.href;
            var newHerf = href.slice(-6);
            return newHerf;
        }
    };
    window.sd = window.sd_$ = sd_$;

} (window));

