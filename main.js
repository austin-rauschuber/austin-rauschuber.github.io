var main = function(){
    $(".ui-loader").hide()
    $('.block').click(function(event){
        var index = $('.block').index(this);
        var $current = $('.current');
        var textIndex = $('.textbox').index($current);
        
        var $newCurrent = $('.textbox').eq(index);
        
        $('.currentblock').removeClass('currentblock');
        $('.block').eq(index).addClass('currentblock');
        
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
        
        
        
    });
    
    
    
    $('.projectLink').on("click", function (event){
         var index = $('.projectLink').index(this);
        $targetHeader = $('.project').eq(index);
         $(".projects").animate({ scrollTop: $targetHeader.offset().top + $(".projects").scrollTop() - 120 }, "slow");
        
        
    });
}

$(document).ready(main);
