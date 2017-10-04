/**
 * Created by 11480 on 2017/9/26.
 */
jQuery(window).load(function(){
    //生日的界面的隐藏与显示
    $(".ry_year").mouseenter(function(){
        $(".ry_year dd").show();
        $(".ry_year dt").css({"border-bottom-color":"#fff","z-index":12});
    });
    $(".ry_year").mouseleave(function(){
        $(".ry_year dd").hide();
        $(".ry_year dt").css({"border-bottom-color":"#C9C9C9"});
    });
    $(".ry_month").mouseenter(function(){
        $(".ry_month dd").show();
        $(".ry_month dt").css({"border-bottom-color":"#fff","z-index":12});
    });
    $(".ry_month").mouseleave(function(){
        $(".ry_month dd").hide();
        $(".ry_month dt").css({"border-bottom-color":"#C9C9C9"});
    });
    $(".ry_day").mouseenter(function(){
        $(".ry_day dd").show();
        $(".ry_day dt").css({"border-bottom-color":"#fff","z-index":12});
    });
    $(".ry_day").mouseleave(function(){
        $(".ry_day dd").hide();
        $(".ry_day dt").css({"border-bottom-color":"#C9C9C9"});
    });

    //所在地区界面的隐藏与显示
    $(".ry_sheng").mouseenter(function(){
        $(".ry_sheng dd").show();
        $(".ry_sheng dt").css({"border-bottom-color":"#fff","z-index":2});
    })
    $(".ry_sheng").mouseleave(function(){
        $(".ry_sheng dd").hide();
        $(".ry_sheng dt").css({"border-bottom-color":"#C9C9C9"});
    });

    $(".ry_qu").mouseenter(function(){
        $(".ry_qu dd").show();
        $(".ry_qu dt").css({"border-bottom-color":"#fff","z-index":2});
    })
    $(".ry_qu").mouseleave(function(){
        $(".ry_qu dd").hide();
        $(".ry_qu dt").css({"border-bottom-color":"#C9C9C9"});
    });

    $(".ry_xian").mouseenter(function(){
        $(".ry_xian dd").show();
        $(".ry_xian dt").css({"border-bottom-color":"#fff","z-index":2});
    })
    $(".ry_xian").mouseleave(function(){
        $(".ry_xian dd").hide();
        $(".ry_xian dt").css({"border-bottom-color":"#C9C9C9"});
    });


//年月份界面跳转以及判断
    $('.ry_year>dd').find('a').on('click',function(event){
        event.preventDefault();
       $(this).parent().parent().prev().text($(this).text())
          .end().end().end().parent().parent().hide(0,function(){
               $('#ry_month dd').show();
           });
    });

    $('.ry_month>dd').find('a').on('click',function(event){
        event.preventDefault();
        $(this).parent().parent().prev().text($(this).text());
        var arr1=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28];
        var arr2=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29];
        var arr3=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
        var arr4=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
        var arr5=[1,3,5,7,8,10,12];
        var arr6=[4,6,9,11]
        if(($("#year").text()%4==0&&$("#year").text()%100!=0||$("#year").text()%400==0)&&($("#month").text()==2)) {
            $("#day").text("");
            for (var i = 0; i < arr2.length; i++) {
                $("#day").append("<a href=''>" + arr2[i] + "</a>")
            }
        }
        else if($("#month").text()==2){
            for(var i=0;i<arr1.length;i++){
                $("#day").append("<a href=''>"+arr1[i]+"</a>")
            }
        }

        for(var i=0;i<arr5.length;i++){
            if($("#month").text()==arr5[i]){
                $("#day").text("");
                for(var j=0;j<arr4.length;j++){
                    $("#day").append("<a href=''>"+arr4[j]+"</a>")
                }
            }
        }

        for(var i=0;i<arr6.length;i++){
            if($("#month").text()==arr6[i]){
                $("#day").text("");
                for(var j=0;j<arr3.length;j++){
                    $("#day").append("<a href=''>"+arr3[j]+"</a>")
                }
            }
        }

            $(".ry_month>dd").hide(0,function(){
            $('#ry_day dd').show();
        });

    });

    $('#day').on('click','a',function(event){
        event.preventDefault();
        $('#sec').text($('#day>a').eq($(this).index()).text());
        $("#day").hide();

    });




//所在地区的界面跳转以及判断
    var arr=["天津","北京","上海","重庆"];
    var arr1=["东城区","西城区","朝阳区","海淀区"];
    $(".ry_sheng>dd").find("a").on("click",function(event){
        event.preventDefault();
        $(this).parent().parent().prev().text($(this).text());
        $(".ry_sheng>dd").hide(0,function(){
            $(".ry_qu>dd").show();
        });
        for(var i=0;i<arr.length;i++){
            var bool=true;
            if($("#sheng").text()===arr[i]){
                $("#xian").hide();
                bool=false;
                break;
            }
        }
        if(bool){
            $("#xian").show();
        }

        if($("#sheng").text()==="北京"){
            $(".ry_qu>dd").text("");
            for(var i=0;i<arr1.length;i++){
                $(".ry_qu>dd").append("<span>"+"<a href=''>"+arr1[i]+"</a>"+"<span>");
            }
        }else{
            $(".ry_qu>dd").text("");
        }

    });

    $('#qu1').on('click','a',function(event){
        event.preventDefault();
        $('#qu').text($('#qu1>a').eq($(this).index()).text());
        $("#qu1").hide();

    });








    $(".ry_xueli").mouseenter(function(){
        $(".ry_xueli dd").show();
    })
    $(".ry_xueli").mouseleave(function(){
        $(".ry_xueli dd").hide();
    })
    $(".ry_xueli>dd").find("a").on("click",function(event){
        event.preventDefault();
        $(this).parent().prev().text($(this).text());
        $(".ry_xueli>dd").hide();
    })


    $(".ry_yuexin").mouseenter(function(){
        $(".ry_yuexin dd").show();
    })
    $(".ry_yuexin").mouseleave(function(){
        $(".ry_yuexin dd").hide();
    })
    $(".ry_yuexin>dd").find("a").on("click",function(event){
        event.preventDefault();
        $(this).parent().prev().text($(this).text());
        $(".ry_yuexin>dd").hide();
    });


    $(".ry_genery>a").mouseenter(function(){
        $("#ry_checkforma").show();
    });
    $(".ry_genery>a").mouseleave(function(){
        $("#ry_checkforma").hide();
    })


    $("#ry_select1").mouseenter(function(){
        $("#ry_checkformb").show();
    })
    $("#ry_select1").mouseleave(function(){
        $("#ry_checkformb").hide();
    })

    $("#ry_select2").mouseenter(function(){
        $("#ry_checkformc").show();
    })
    $("#ry_select2").mouseleave(function(){
        $("#ry_checkformc").hide();
    })

    $(".ry_marry").mouseenter(function(){
        $("#ry_checkformd").show();
    })
    $(".ry_marry").mouseleave(function(){
        $("#ry_checkformd").hide();
    })

    $(".ry_ruler").mouseenter(function(){
        $("#ry_checkforme").show();
    })
    $(".ry_ruler").mouseleave(function(){
        $("#ry_checkforme").hide();
    })

    $(".ry_xueli").mouseenter(function(){
        $("#ry_checkformf").show();
    })
    $(".ry_xueli").mouseleave(function(){
        $("#ry_checkformf").hide();
    })

    $(".ry_yuexin").mouseenter(function(){
        $("#ry_checkformg").show();
    })
    $(".ry_yuexin").mouseleave(function(){
        $("#ry_checkformg").hide();
    })




    //正则表达式验证

    //$(".ry_input").on('focus',function(){
    //   $(this).next().show();
    //});
    //$(".ry_input").on('blur',function(){
    //    $(this).next().hide();
    //});


    //手机号正则表达式
    //   /^((13[0-9])|(15[^4,\D])|(18[0-9]))\d{8}$/;
    //密码正则表达式
    //    /^[\$a-zA-Z0-9_-]{6,18}$/

    var inp=document.getElementById("ry_inputa");
    var box1=document.getElementById("ry_checkformh1");
    var box2=document.getElementById("ry_checkformh2");
    inp.onfocus = function(){
        var reg = /^((13[0-9])|(15[^4,\D])|(18[0-9]))\d{8}$/;
        if (reg.test(inp.value)){
            box2.className ="ry_checkform_right ry_xianshi";
            box1.className ="ry_checkform ry_yincang";
        }else{
            box1.className ="ry_checkform ry_xianshi";
            box2.className ="ry_checkform_right ry_yincang";

        }
    }


    var inp1=document.getElementById("ry_inputb");
    var box3=document.getElementById("ry_checkformi1");
    var box4=document.getElementById("ry_checkformi2");
    inp1.onfocus = function(){
        var reg =  /^[\$a-zA-Z0-9_-]{6,18}$/;
        if (reg.test(inp1.value)){
            box4.className ="ry_checkform_right ry_xianshi";
            box3.className ="ry_checkform ry_yincang";
        }else{
            box3.className ="ry_checkform ry_xianshi";
            box4.className ="ry_checkform_right ry_yincang";

        }
    }


    var inp2=document.getElementById("ry_inputc");
    


})







