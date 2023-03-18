
// メインメニュー用の開閉処理
$(function () {
    $('#menubar_hdr').click(function () {
        $('#menubar').slideToggle();
        $(this).toggleClass('close');
    });
});

// 同一ページへのリンクの場合にメニューを閉じる処理
$(function () {
    $('#menubar a[href^="#"]').click(function () {
        $('#menubar').hide();
        $('#menubar_hdr').removeClass('close');
    });
});

// 汎用開閉処理
$(function () {
    $('.openclose').next().hide();
    $('.openclose').click(function () {
        $(this).next().slideToggle();
        $('.openclose').not(this).next().slideUp();
    });
});

//pagetopのボタンを出したり消したりするスクリプト
$(function () {
    var scroll = $('.pagetop');
    var scrollShow = $('.pagetop-show');
    $(scroll).hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 300) {
            $(scroll).fadeIn(500).addClass(scrollShow);
        } else {
            $(scroll).fadeOut(500).removeClass(scrollShow);
        }
    });
});

//スムーススクロールのスクリプト
$(function () {

    $('a[href^="#"]').click(function () {
        var href = $(this).attr('href');
        var target = href == '#' ? 0 : $(href).offset().top;
        $('body,html').animate({ scrollTop: target }, 500);
        return false;
    });

});

//language selection
$(function () {
    /* クッキーをセットする
     -------------------------------------------------- */
    function setSiteviewCookie() {
        $('.btn-lang a').bind('click', function () {　//言語切り替えボタンを押下したときに発火
            $.cookie('siteview', $(this).data('siteview'), { path: '/' }); //siteviewという名前でcookieに値をセット
        });
    }
    setSiteviewCookie();

    /* 日本語 or 英語を選んだ場合の処理
     -------------------------------------------------- */
    if ($.cookie('siteview') == 'en') {
        //英語が選択されている場合(coockieの値にenが設定されている時)
        $('.content-en').css('display', 'block'); //英語を表示
        $('.content-jp').css('display', 'none');　//日本語を非表示
        $('.btn-lang .en').addClass('selected');　//言語切り替えボタンにクラスを振る処理
        $('.btn-lang .jp').removeClass('selected');
    } else {
        //日本語が選択されている場合
        $('.content-jp').css('display', 'block'); //日本語を表示
        $('.content-en').css('display', 'none');　//英語を非表示
        $('.btn-lang .jp').addClass('selected');
        $('.btn-lang .en').removeClass('selected');
    }
});