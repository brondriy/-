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
$(".d1").click(function()
    {
        /*$(".main1").slideUp(600,function(){$(".main2").slideDown(600);});*/
        $(".main1").fadeOut(600,function(){$(".main2").slideDown(600);});
});
