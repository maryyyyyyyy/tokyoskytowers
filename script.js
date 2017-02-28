//pagetop
$(function() {
    var topBtn = $('.pageTop');    
    topBtn.hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
	    //ボタンの表示方法
            topBtn.fadeIn();
        } else {
	    //ボタンの非表示方法
            topBtn.fadeOut();
        }
    });
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,  html').animate({
            scrollTop: 0
        },   1000);
        return false;
    });
});

//pagetop
$(function() {
    var topBtn = $('.pageTop-skytree');    
    topBtn.hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
	    //ボタンの表示方法
            topBtn.fadeIn();
        } else {
	    //ボタンの非表示方法
            topBtn.fadeOut();
        }
    });
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,  html').animate({
            scrollTop: 0
        },   1000);
        return false;
    });
});




$(function() {
    var bg1 = $('#main-img');
    var bg2 = $('#bg');
    var speed = 3000;
    cloudMove();
    setInterval(cloudMove, 6000);
    function cloudMove(){
        bg1
            .animate({backgroundPosition:'60px'}, speed)
            .animate({backgroundPosition:'0'}, speed);
        bg2
            .animate({backgroundPosition:'120px'}, speed)
            .animate({backgroundPosition:'0'}, speed);
    }
});

$('head').append(
    '<style type="text/css">#container { display: none; } #fade, #loader { display: block; }</style>'
);
 
jQuery.event.add(window,"load",function() { // 全ての読み込み完了後に呼ばれる関数
    var pageH = $("#container").height();
 
    $("#fade").css("height", pageH).delay(900).fadeOut(800);
    $("#loader").delay(600).fadeOut(300);
    $("#container").css("display", "block");
});