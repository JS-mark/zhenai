/**
 * Created by Dbling on 2017/9/26.
 */

//tab栏切换
$(window).load(function () {
    //鼠标进入哪个li，该li就应该添加active类;
    //对应索引值的div就应该添加selected类;其他的去除;
    $(".info_tab ul>li").click(function () {
        //当前的li设置active,其他的去除active
        $(this).addClass("active").siblings("li").removeClass("active");
        //对应索引值得div添加selected,其他的去除selected;
        $(".main").eq($(this).index()).addClass("selected").siblings("div").removeClass("selected");
    });

    //鼠标进入显示mask和big;移开隐藏;
    //鼠标在small上移动，mask盒子跟随移动;
    //big盒子里面的图片等比例移动;

        $ ("#sd_btn_log").mouseenter (function () {
            $ (this).addClass ("sd_selected");
            $ ("#sd_btn_reg").removeClass ("sd_selected");
        });
        $ ("#sd_btn_log").mouseleave (function () {
            $ (this).removeClass ("sd_selected");
            $ ("#sd_btn_reg").addClass ("sd_selected");
        });
        $ ("ul li:eq(2)").mouseenter (function () {
            $ (this).addClass ("sd_a_selected");
            $ ("#sd_subNav").stop().fadeIn (500);
            $ ("#sd_btn_reg").removeClass ("sd_selected");
        });
        $ ("ul li:eq(2)").mouseleave (function () {
            $ (this).removeClass ("sd_a_selected");
            $ ("#sd_subNav").stop().fadeOut (500,function () {
                $ ("#sd_btn_reg").addClass ("sd_selected");
            });

        });
    // 调用导航
    var oo = document.getElementById("sd_mainNav");
    sd_$.Nav(oo,"rgb(112,57,135)");
    //鼠标进入显示mask和big;移开隐藏;
    var photo = document.getElementById("photo");
    var small = photo.firstElementChild || photo.firstChild;
    var mask = small.children[1];
    var big = small.nextElementSibling || small.nextSibling;
    var bigImg = big.lastElementChild || big.lastChild;

    //鼠标进入显示mask和big;移开隐藏
    //small比较好，如果是box那么鼠标进入big也会显示;
    small.onmouseenter = function () {
        mask.style.display="block";
        big.style.display="block";
    }
    small.onmouseleave = function () {
        mask.style.display="none";
        big.style.display="none";
    }
    //鼠标在small上移动，mask盒子跟随移动;
    small.onmousemove = function (event) {
        //获取鼠标在small上面的坐标，然后给黄盒子赋值;
        //新七步获取鼠标在盒子中的坐标;
        event = event || window.event;
        var pagex = event.pageX || event.clientX + scroll().left;
        var pagey = event.pageY || event.clientY + scroll().top;
        //因为大盒子有定位，而且和small几乎重合，所以直接用大盒子;
        var smallx = photo.offsetLeft;
        var smally = photo.offsetTop;
        //为了让鼠标在黄盒子的最中间，获取值的时候减去盒子宽高的一半儿;
        var x = pagex - smallx - mask.offsetWidth/2;
        var y = pagey - smally - mask.offsetHeight/2;

        //黄盒子的坐标不能随意赋值要有界限！[0,small宽-mask宽]
        if(x<0){
            x = 0;//鼠标超出，但是黄盒子不能超出
        }
        if(x>small.offsetWidth-mask.offsetWidth){
            x = small.offsetWidth-mask.offsetWidth;//鼠标超出，但是黄盒子不能超出
        }
        if(y<0){
            y = 0;//鼠标超出，但是黄盒子不能超出
        }
        if(y>small.offsetHeight-mask.offsetHeight){
            y = small.offsetHeight-mask.offsetHeight;//鼠标超出，但是黄盒子不能超出
        }

        //给黄盒子赋值;
        mask.style.left = x+"px";
        mask.style.top = y+"px";


        //需求3: big盒子里面的图片等比例移动;(数学算法)
        //比例1：大图片走的距离/黄盒子走的距离 = 大图片/小图片
        var bili = bigImg.offsetWidth/small.offsetWidth;
        //比例2：大图片走的距离/黄盒子走的距离 = (大图片-大盒子)/(小盒子-黄盒子);
//                var bili = (bigImg.offsetWidth-big.offsetWidth)/(small.offsetWidth-mask.offsetWidth);

        //通过比例获取大图片应该走过的距离
        var xx = bili*x;
        var yy = bili*y;
        //为大图片赋值;(应该设置top/left值，但是图片没有定位)
        bigImg.style.marginTop = -yy+"px";
        bigImg.style.marginLeft = -xx+"px";
    }
});


//固定导航栏
//涉及图片一般使用window.onload入口函数;
jQuery(window).load(function () {
    $(window).scroll(function () {
        //判断：页面被卷去的部分和第一个盒子的高
        if($(window).scrollTop() >= $(".header").height()){
            //fixed_tab加属性display:block
            $(".fixed_tab").stop().slideDown(1000);
//                    $(".up_details").hide();
            $(".up_details").css({"padding-top":$(".fixed_tab").height()});
            $(".header").hide();
        }else {
            $(".fixed_tab").hide();
            $(".up_details").show();
            $(".header").show();
            $(".up_details").css({"padding-top":0});
        }
    });
});

// 放大镜