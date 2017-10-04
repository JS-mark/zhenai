/*
*JS.Author:  sunduo
*C.Time:    2017/9/26 0:19
*/
//调用jQuery实现首页固定导航栏注册以及登录按钮事件
$ (window).load (function () {
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
    //调用fullpage插件实现全屏滚动
    $('#sd_dowebok').fullpage({
        sectionsColor: ['', '', '#EFEFEF', '','','#EFEFEF','',''],
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7'],
        menu: '#sd_menu',
        afterLoad: function(anchorLink, index){
            //判断小火箭显示隐藏
            if(index !== 1){
                $(".sd_section_a").show(500);
                $("video")[0].pause();
            }else {
                $(".sd_section_a").hide(500);
                $("video")[0].play();
                // $(".sd_public_title p").hide();
            }
            if(index === 4){
                //显示每个标签
                $(".sd_section_a").show(500);
                // $(".sd_public_title p").show(500);
                //调用旋转插件实现每个li标签旋转
                $(".sd_img_box ul:eq(0)").stop().slideDown(1000);
                $(".sd_img_box ul:eq(0)").stop().slideDown(1000).rotate({
                    bind:
                        {
                            click: function() {
                                $(this).rotate({angle: 0, animateTo: 360});
                            }
                        }

                });
                $(".sd_img_box ul:eq(1) li").rotate({
                    bind:
                        {
                            click: function() {
                                $(this).rotate({angle: 0, animateTo: -360});
                            }
                        }

                });
                //显示第二个ul标签
                $(".sd_img_box ul:eq(1)").stop().slideDown(1000);
            }else {
                //移动到其他屏sd_img_box_title里的p标签和sd_img_box里的ul标签
                // $(".sd_public_title p").hide();
                // $(".sd_img_box ul").hide();
            }
            if(index == 6){
                $(".sd_down_app_down .left").find("i").eq(0).animate({"left" : "50%"},1000);
                $(".sd_down_app_down .left").find("i").eq(1).animate({"left" : "25%"},1500);
                $(".sd_down_app_down .right").find("i").eq(0).animate({"left" : "22%"},1500).rotate({
                    bind:
                        {
                            click: function() {
                                $(this).rotate({angle: 0, animateTo: 360});
                            }
                        }

                });
                $(".sd_down_app_down .right").find("i").eq(1).animate({"left" : "23%"},1500).rotate({
                    bind:
                        {
                            click: function() {
                                $(this).rotate({angle: 0, animateTo: 360});
                            }
                        }

                });
            }
        }
    });
    //调用sd_$运行视频背景功能
    sd_$.Bvideo ("#sd_video","./sources/Sugar");
    //调用遮罩层
    $(".sd_mask").css("background-color","rgba(0,0,0,0.5)");
    // //调用载入动画
    $("video").hide();
    $("video")[0].pause();
    $(".sd_mask").addClass("sd_mask_bj");
    $(".sd_loader").stop().fadeOut(5000,"linear",function () {
        $("video").stop().fadeIn(500,function () {
            $(".sd_mask").removeClass("sd_mask_bj");
            $("video")[0].play();
            S.Drawing = S.Drawing();
            S.UI = S.UI();
            S.Shape = S.Shape();
            S.init();
        });
    });
    // 调用导航
    // sd_$.Nav(oo,"rgb(112,57,135)");
    //输出版本号
    // console.log(sd_$.Ver())
    //调用提醒框
    // sd_$.Pop("#sd_pop",400,300,"red");
    //使用jQuery实现突出显示效果，两个ul
    $(".sd_img_box ul:eq(1)").find("li").mouseenter(function () {
        $ (this).find ("i").css ({"opacity":"0"}).parent().siblings("li").find("i").css ({"opacity":"0.4"});
        $(".sd_img_box ul:eq(0)").find("i").css ({"opacity":"0.4"});
        $(".sd_img_box ul:eq(0)").find("span").stop().slideUp(500);
    });
    $(".sd_img_box ul:eq(0)").find("li").mouseenter(function () {
        $ (this).find ("i").css ({"opacity":"0"}).parent ().parent ().next().find("i").css ({"opacity":"0.4"});
        $ (this).find("span").stop().slideDown(500);
    });
    $(".sd_img_box_w").mouseleave(function () {
        $(".sd_img_box_w\ " +
            "li i").css({"opacity" : "0"});
    });
    //首页底部按钮进入事件
    $(".sd_index_footer_btn").find("span").mouseenter(function () {
        $(this).addClass("sd_index_footer_btn_selected").siblings("span").removeAttr("class");
    });
    //tab栏img盒子
    $(".sd_tab_main").find("img").css({"width" : "100%"});
    // li标签鼠标进入
    $(".sd_tab_w").find("li").mouseenter(function () {
        $(this).addClass("sd_tab_w_li_sle").siblings("li").removeAttr("class");
        $(".sd_tab_main").eq($(this).index()).stop().fadeIn(500).siblings("div").stop().fadeOut(500);
    });
    //div盒子
    $(".sd_tab_main").children("div").children("span").children('span').mouseenter(function () {
        $ (this).find('p').stop ().fadeIn (1000);
    });
    $(".sd_tab_main").children("div").children("span").children('span').mouseleave(function () {
        $ (this).find('p').stop ().fadeOut (1000);
    });
});