/**
 * Created by lenovo on 2017/9/27.
 */
/**
 * Created by lenovo on 2017/9/25.
 */
/*$(window).load(function () {
 $("#sd_btn_log").mouseenter(function () {
 $(this).addClass("sd_selected");
 $("#sd_btn_reg").removeClass("sd_selected");
 });
 $("#sd_btn_log").mouseleave(function () {
 $(this).removeClass("sd_selected");
 $("#sd_btn_reg").addClass("sd_selected");
 });
 $("ul li:eq(2)").mouseenter(function () {
 $(this).addClass("sd_a_selected");
 $("#sd_subNav").stop().fadeIn(500);
 $("#sd_btn_reg").removeClass("sd_selected");
 });
 $("ul li:eq(2)").mouseleave(function () {
 $(this).removeClass("sd_a_selected");
 $("#sd_subNav").stop().fadeOut(500, function () {
 $("#sd_btn_reg").addClass("sd_selected");
 });

 });
 sd_$.Bvideo("#sd_video", "../sources/Sugar");
 });*/

//自动循环播放
window.onload = function () {
    var index = $("#mhh_bbg img").length;
    digui(0);
    function digui(a) {

        if (a == index) {
            a = 0;
        }
        $("#mhh_bbg img").css("display", "none");
        $("#mhh_bbg img").eq(a).css("display", "block");
        if (a++ < index) {
            setTimeout(function () {
                digui(a);
            }, 2000);//递归两秒调用
        }

    }
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

//登录框开始
//鼠标进入输入框高亮显示 获取焦点失去焦点事件

    var divOne = document.getElementById("mhh_divOne");
    var inpOne = document.getElementById("mhh_inpOne");
    divOne.onmouseenter = function () {
        this.style.border = "2px solid green";
    }

    inpOne.onfocus = function () {
        if (this.value == "手机号/会员ID/邮箱") {
            this.value = "";
        }

    }

    inpOne.onblur = function () {
        if (this.value == "") {
            this.value = "手机号/会员ID/邮箱";
        }
    }
    divOne.onmouseleave = function () {
        this.style.border = "1px solid #77c9d1";
    }
    var divTwo = document.getElementById("mhh_divTwo");
    var inpTwo = document.getElementById("mhh_inpTwo");
    divTwo.onmouseenter = function () {
        this.style.border = "2px solid green";
    }

    inpTwo.onfocus = function () {
        if (this.value == "密码") {
            this.value = "";
        }
    }

    inpTwo.onblur = function () {
        if (this.value == "") {
            this.value = "密码";
        }
    }
    divTwo.onmouseleave = function () {
        this.style.border = "1px solid #77c9d1";
    }


    //手机号/会员ID/邮箱正则验证
    //密码验证

    var inpOne = document.getElementById("mhh_inpOne");
    var inpTwo = document.getElementById("mhh_inpTwo");
    var spanss = document.getElementById("mhh_spanss");
    var spans = document.getElementById("mhh_spans")


    inpOne.oninput = function () {
        var reg = /^((13[0-9])|(15[^4,\D])|(18[0-9]))\d{8}$/;
        var reg1 = /^[\$a-zA-Z0-9_-]{6,18}$/;
        function fn(ele, reg) {
            ele.onblur = function () {
                //bug：不输入内容，不进行判断;
                if (this.value == "") {
                    return;
                }

                //书写正则
                if (reg.test(this.value)) {
                    //控制后面的span标签，让他显示正确并设置内容;
                    ele.nextSibling.innerHTML = "恭喜您，输入正确";
                    ele.nextSibling.className = "right";
                } else {
                    //控制后面的span标签，让他显示错误并设置内容;
                    ele.nextSibling.innerHTML = "对不起，格式错误！";
                    ele.nextSibling.className = "wrong";
                }
            }
        }


        //验证密码
        fn(inpOne,reg);

    }
    inpTwo.oninput = function () {

        var reg1 = /^[\$a-zA-Z0-9_-]{6,18}$/;
        function fn(ele, reg) {
            ele.onblur = function () {
                //bug：不输入内容，不进行判断;
                if (this.value == "") {
                    return;
                }

                //书写正则
                if (reg.test(this.value)) {
                    //控制后面的span标签，让他显示正确并设置内容;
                    ele.nextSibling.innerHTML = "恭喜您，输入正确";
                    ele.nextSibling.className = "right";
                } else {
                    //控制后面的span标签，让他显示错误并设置内容;
                    ele.nextSibling.innerHTML = "对不起，格式错误！";
                    ele.nextSibling.className = "wrong";
                }
            }
        }


        //验证密码

        fn(inpTwo,reg1);

    }



    //不输入任何内容点击立即登录出现隐藏的盒子

//

var ooo = document.getElementById("ooooo");
    ooo.onclick = function () {
            $("#sd1pop").show(500);
        if(inpOne.value === "13145201314" && inpTwo.value === "5201314"){
            location.href = "./../index.html"
        }else{
            sd_$.Pop("#sd1pop",300,200,"rgb(0,0,0)");
            $("#sd1pop").mouseleave(function () {
                $(this).hide(500);
            })


            // setInterval(function () {
            //     location.href = "log_in.html";
            // },1000)

        }

    }


//     点击按钮进行验证



    var div_three = document.getElementById("mhh_div_three");

    div_three.onmouseenter = function () {
        this.style.background = "rgba(0,0,0,0.05)";
        this.style.zIndex = "999";
    }
    div_three.onmouseleave = function () {
        this.style.background = "";
        this.style.zIndex = "";
    }


}





