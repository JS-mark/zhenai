window.onload = function () {

    var xs_div = document.getElementById("xs_div");
    var xs_screen = document.getElementById("xs_screen");
    var ul = document.getElementById("ul");
    var ulLiArr = ul.getElementsByTagName("li");
    var ol = document.getElementById("ol");
    var arr = document.getElementById("arr");
    var left = document.getElementById("left");
    var right = document.getElementById("right");
    var imgWidth = xs_screen.offsetWidth;

    for(var i=0;i<ulLiArr.length;i++){
        var newLi = document.createElement("li");
        newLi.innerHTML = i+1;
        ol.appendChild(newLi);
    }

    var olLiArr = ol.getElementsByTagName("li");
    olLiArr[0].className = "current";

    ul.appendChild(ulLiArr[0].cloneNode(true));

    for(var i=0;i<olLiArr.length;i++){
        olLiArr[i].index = i;
        olLiArr[i].onmouseover = function () {
            for(var j=0;j<olLiArr.length;j++){
                olLiArr[j].className = "";
            }
            this.className = "current";
            var sss = -imgWidth*this.index;
            animate(ul,sss);

            square = key = this.index;
        }
    }

    var square = 0;//小方块索引值;
    var key = 0;//图片的索引值;
    right.onclick = autoPlay;


    left.onclick = function () {

        square--;
        key--;
        if(square === -1){
            square = olLiArr.length-1;
        }
        if(key === -1){
            ul.style.left = -(ulLiArr.length-1)*imgWidth+"px";
            key = ulLiArr.length-2;
        }

        for(var j=0;j<olLiArr.length;j++){
            olLiArr[j].className = "";
        }
        olLiArr[square].className = "current";
        //匀速动画封装
        var sss = -imgWidth*key;
        animate(ul,sss);
    }

    //定时器
    var timer = setInterval(autoPlay,3000);
    xs_div.onmouseover = function () {
        clearInterval(timer);
        xs_btn.style.display = "block";
    }
    xs_div.onmouseout = function () {
        timer = setInterval(autoPlay,3000);
        xs_btn.style.display = "none";
    }


    //封装按钮
    function autoPlay() {
        square++;
        key++;
        if(square === olLiArr.length){
            square = 0;
        }

        if(key === ulLiArr.length){
            ul.style.left = 0;
            key = 1;
        }
        for(var j=0;j<olLiArr.length;j++){
            olLiArr[j].className = "";
        }
        olLiArr[square].className = "current";
        var sss = -imgWidth*key;
        animate(ul,sss);
    }

}

//匀速动画封装
function animate(ele,target){
    //要用定时器先清定时器;
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        //1.获取步长
        var step = target>ele.offsetLeft?10:-10;
        //2.赋值
        ele.style.left = ele.offsetLeft+step+"px";
        //3.停止定时器(如果走过了，或者向后退了一步，也清除，赋值目标位置)
        //目标位置和当前位置的差值，不足一个步长的时候;
        if(Math.abs(target-ele.offsetLeft) <= Math.abs(step)){
            //设置目标位置，清除定时器
            ele.style.left = target+"px";
            clearInterval(ele.timer);
        }
    },10);
}
