var active = 1;
var active2 = 1;

$(document).ready(function(){
    $(".p1-center-text").animate(
    {
         top: "-=20",
         opacity:1
     }, 1200);
    $(".d1, .sandy-one").animate(
    {
        opacity:1
    }, 2000);
    $(".white").animate(
    {
        opacity: 0.9
    }, 5000);

});


$(".d1").click(function(){changepage(1,2);});

/*header*/
$(".m1-1").click(function(){changepage(active,1);});
$(".m1-2").click(function(){changepage(active,2);});
$(".logo,.logo-hover").click(function(){changepage(active,1);});

/*page2*/
$("li.m2-1").click(function(){changem2item(active2,1);});
$("li.m2-2").click(function(){changem2item(active2,2);});
$("li.m2-3").click(function(){changem2item(active2,3);});
$("li.m2-4").click(function(){changem2item(active2,4);});
$("li.m2-5").click(function(){changem2item(active2,5);});




function changepage(_from,_to)
{
    if( _to == active ) return;
    $(".main"+_from).fadeOut(600,function(){$(".main"+_to).slideDown(600, function(){if(_to == 2 ){$("div[class='m2-']").hide(); $("div.m2-1").slideDown(600);}});});
    $(".m1-"+_from).removeClass("active");
    $(".m1-"+_to).addClass("active");
    active = _to;
};

function changem2item(_from,_to)
{
    if( _to == active2 ) return;
    $("li.m2-"+_from).removeClass("item-active");
    $("li.m2-"+_to).addClass("item-active");
    $("div.m2-"+_from).fadeOut(300,function(){$("div.m2-"+_to).slideDown(600);});
    active2 = _to;
};
