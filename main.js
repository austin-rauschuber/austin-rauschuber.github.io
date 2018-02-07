var headerColors = ['#50A6C2','#5950c2', '#b250c2', '#c25059', '#c2b450'];
var publicationsHeaderHeight;


var main = function(){
    $(".ui-loader").hide()
    $('.block').click(changeBlock);
    $('.projectLink').click(scrollToItem);

    calculatePublicationsHeight();

    $(window).resize(calculatePublicationsHeight);
}

var changeBlock = function () {
        var index = $('.block').index(this);
        var $current = $('.current');
        var textIndex = $('.textbox').index($current);
        
        var $newCurrent = $('.textbox').eq(index);
        
        $('.currentblock').removeClass('currentblock');
        $('.block').eq(index).addClass('currentblock');

        $('.header').css("border-top-color", headerColors[index]);
        
        if(index>textIndex){
            $newCurrent.css({left:"10000px"});
            $newCurrent.addClass('current');


            $newCurrent.animate({left:"0px"},1000,function(){});
            $current.animate({left:"-10000px"},1000,function(){
                $current.removeClass('current');
            });
        }
        
        if (index<textIndex){
            $newCurrent.css({left:"-10000px"});
            $newCurrent.addClass('current');


            $newCurrent.animate({left:"0px"},1000,function(){});
            $current.animate({left:"10000px"},1000,function(){
                $current.removeClass('current');
            });
        }
};

var scrollToItem = function () {
    var index = $('.projectLink').index(this);
    $targetHeader = $('.project').eq(index);
    $(".projects").animate({ scrollTop: $targetHeader[0].offsetTop - publicationsHeaderHeight }, "slow"); 
};

var calculatePublicationsHeight = function () {
    $('.textbox:nth-child(3)').css("display", "inline-block");
    publicationsHeaderHeight = $('.projectHead').height();
    $('.textbox:nth-child(3)').css("display", "");

    $('.projects').css({'height': 'calc(100% - ' + publicationsHeaderHeight + 'px)'});
};

$(document).ready(main);
