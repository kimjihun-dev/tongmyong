$(document).ready(function(){

    // 언어선택 dropdown
    const langBtn = $(".topNav > ul > .langBtn");
    $(".lang-list").hide();
    $(langBtn).click(function(){
        if($(".lang-list").css("display") == "none") {
            $(".lang-list").show();
        } else {
            $(".lang-list").hide();
        }
    });
    
    // mouse over 서브메뉴
    const Menu = $(".gnb > .m");
    const subMenu = $(".subMenu");

    $(Menu).mouseover(function(){
        $(subMenu, this).stop().css({'display': 'block'}).animate({height: "300px"});
        $(this).siblings().find("div").hide();
        $(this).addClass("active").siblings().removeClass("active");
        
    }).mouseleave(function(){
        $(this).removeClass("active");
    });
    
    $(subMenu).mouseleave(function(){
        $(subMenu).stop().animate({height: 0}, 300, function(){
            $(this).css("display", "none");
        });
    });

    // 검색창
    const searchBtn = $(".m > .btn");
    const searchArea = $(".searchArea");
    $(searchArea).hide();
    $(searchBtn).click(function(){
        $(searchArea).stop().fadeToggle(300);
    });

    // 동영상 탭메뉴 
    $("ul.tabs .tab-link").click(function(){
        const tab_id = $(this).attr("data-tab");
        $(".tab-link").removeClass("current");
        $(".tab-content").removeClass("current");
        $(this).addClass("current");
        $("#"+tab_id).addClass("current");
    });
    
    // sns filter
    $(".filter li").click(function () {
        $(".filter .current").removeClass("current");
        $(this).addClass("current");

        const selector = $(this).data('filter');
        $(".sns-contents").isotope({
            filter: selector
        });
        return false;
    });
});

var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });