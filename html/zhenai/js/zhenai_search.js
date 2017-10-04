/**
 * Created by Administrator on 2017/9/27 0027.
 */
$(window).ready(function(){

    $(".center_top_up ul>li").eq(2).mouseenter(function(){
        $(".icon_wrong").show();
    });

    $(".center_top_up ul>li").eq(2).mouseleave(function(){
        $(".icon_wrong").hide();
    });
    $("#ct_ipnut").blur(function(){
        if($(this).val() == ""){
            $(this).val("ID昵称搜索");
        }
    })
});