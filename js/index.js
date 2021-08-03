let userAgent = window.navigator.userAgent.toLowerCase(); 
let isIE = userAgent.indexOf('trident');  
let isIE2= userAgent.indexOf("msie");
if(isIE > -1 || isIE2 > -1 ){ 
    alert("해당 브라우저에서 지원하지 않습니다.\n크롬으로 접속 부탁드립니다.")
}

$(document).ready(function(){
    /////////////////// 물결효과 ///////////////////
    $('.wave').ripples({
        resolution: 130,
        perturbance: 0.01
    });
    $(".main_txt").on('mousedown',function(e){
        e.offsetX=400;
        e.offsetY=200;
    });
    setTimeout(function(){
        $(".main_txt").fadeIn(600);
        $(".main_txt").trigger('mousedown');
    },600);
    
    /////////////////// 헤더스크롤 ////////////////////
    var sec2_top = $('.aboutme').offset().top;
    $(window).scroll(function(){
        var s_top = $(window).scrollTop();
        if(s_top >= sec2_top) {
            $('.header_wrap').addClass('header_ac');
            $('.logo').addClass('logo_ac')
        }
        else {
            $('.header_wrap').removeClass('header_ac');
            $('.logo').removeClass('logo_ac')
        }
    });

    /////////////////// 메뉴 부드럽게 이동 ////////////////////
    $('.gnb_menu a, .logo a').click(function(){
        event.preventDefault();

        let href = $(this).attr('href');
        let o_top = $(href).offset().top;
        
        $('html, body').animate({
            scrollTop: o_top
        }, 100, 'linear')
    });

    /////////////////// scrolldown 화살표 ////////////////////
    $('.scroll_down .arrow_down').hover(function(){
        $(this).animate({
            transform: 'tranlateY(50px)'
        },300)
    },function(){
        $(this).animate({
            transform: 'tranlateY(0px)'
        },300)
    })

    /////////////////// gnb 메뉴 ////////////////////
    $('.gnb_menu').hover(function(){
        $(this).css({
            color: '#3f3ce8'
        })
    },function(){
        $(this).css({
            color: '#fff'
        })
    })

    /////////////////// 메인 한 판 슬라이드 ////////////////////
    let scrollEvent = true;
    $('.wave').on('mousewheel DOMMouseScroll', function(event){
        event.preventDefault();
        let del = event.originalEvent.wheelDelta;
        if(scrollEvent) {
            scrollEvent = false;
            setTimeout(function(){
                scrollEvent = true;
            }, 800)
        
            if(del < 0) {
                $('html,body').stop().animate({
                    scrollTop: sec2_top
                },300)
            }
            else if(del > 0) {
                $('html,body').stop().animate({
                    scrollTop: 0
                },300)
            }
        }
    });

    /////////////////// about me 밑에 글씨 3줄 슬라이드 ////////////////////
    $('.about_bot_txt_box').eq(0).outerWidth($('.about_bot_txt').eq(0).outerWidth())
    $(window).scroll(function(){
        let left = ($(window).scrollTop() / ($(document).outerHeight() - $(window).height()));

        $('.about_bot_txt').eq(0).css({
            transform:'translateX('+ (left * $(window).scrollTop())+100+'px)'
        })
        $('.about_bot_txt').eq(1).css({
            transform:'translateX('+ (-1 * left * $(window).scrollTop())+100 +'px)'
        })
        $('.about_bot_txt').eq(2).css({
            transform:'translateX('+ (left * $(window).scrollTop())+100 +'px)'
        })
    });

    /////////////////// 스크롤 스킬박스 하나씩 나오게 ////////////////////
    let sk_top = $('.skills').offset().top;
    let work_top1 = $('.work_box1').offset().top;
    let work_top2 = $('.work_box2').offset().top;
    let work_top3 = $('.work_box3').offset().top;
    
    $(window).scroll(function(){
        let s_top = $(window).scrollTop();
        if(sk_top <= s_top + 300) {
            for(let i=0; i<$('.skills_pan .skill_box').length; i++) {
                (function(sk_i){
                    setTimeout(function(){
                        $('.sk_sec .skill_box').eq(sk_i).addClass('sk_ac');
                    }, 60 * sk_i)
                })(i) 
            }
        }
        
        /////스크롤 포폴박스 나오게 ////
        if(work_top1 <= s_top + 300) {
            for(let i=0; i<$('.work_box1 .work_box_item').length; i++) {
                (function(wk_i){
                    setTimeout(function(){
                        $('.work_box1 .work_box_item').eq(wk_i).addClass('wk_ac');
                    }, 60 * wk_i)
                })(i) 
            }
        }
        if(work_top2 <= s_top + 300) {
            for(let i=0; i<$('.work_box2 .work_box_item').length; i++) {
                (function(wk_i){
                    setTimeout(function(){
                        $('.work_box2 .work_box_item').eq(wk_i).addClass('wk_ac');
                    }, 60 * wk_i)
                })(i) 
            }
        }
        if(work_top3 <= s_top + 300) {
            for(let i=0; i<$('.work_box3 .work_box_item').length; i++) {
                (function(wk_i){
                    setTimeout(function(){
                        $('.work_box3 .work_box_item').eq(wk_i).addClass('wk_ac');
                    }, 60 * wk_i)
                })(i) 
            }
        }
    })
});

