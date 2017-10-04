/**
 * Created by MiLi on 2017/9/25.
 */
jQuery(window).ready(function () {
    $(".tab-item").mouseenter(function () {
        $(this).addClass("active").siblings("li").removeClass("active");
        $(".main").eq($(this).index()).addClass("selected").siblings("div").removeClass("selected");

    });

$('.link').on('click',function() {
    //if($(this).prevAll().length>=5){
    //    return;
    //}
    //for (var i = 0; i < 5; i++) {
    //    $(this).prev().after($(this).prev().clone(true));
    //}
    $(this).prev().empty();
    for(var i=0;i<5;i++){
        $(this).prev().append($(this).parent().children().eq(0).clone(true));
    }

});
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
    sd_$.Nav ($ ("#sd_mainNav")[0],"rgb(112,57,135)")
});
































