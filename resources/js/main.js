$(document).ready(function () {

    // mixit up
    var mixer = mixitup(".container");

    // navbar scroll
    window.onscroll = scrollFun;
    function scrollFun() {
        if (window.document.documentElement.scrollTop > 300) {
            $('nav').css({
                'position': 'fixed',
                'top': '0',
                "left": "0",
                "width": "100%",
                "background": "#87509c",
                "padding": "3.5rem 0",
                "transition": ".5s",
                "transform": "translateY(0)",
                "z-index" : "3333333333333333"
            });
            $('.logo').css({
                "margin-top": "0"
            })
            $('.main-nav').css({
                "margin-top": "0"
            })
        } else {
            $('nav').attr('style', "");
            $('.logo').attr('style', "")
            $('.main-nav').attr('style', "")

        }
    }
    $('#nav-bar').click(function(){
        $('.main-nav-toggle').toggle(1000);
        


    })

})