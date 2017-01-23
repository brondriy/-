$(document).ready(function(){
    $(".p1-center-text").animate(
    {
         top: "-=20",
         opacity:1
     }, 1200);
    $(".sandy-two, .sandy-one").animate(
    {
        opacity:1
    }, 2000);
    $(".white").animate(
    {
        opacity: 0.8
    }, 5000);

});
$(".d1").click(function()
    {
        /*$(".main1").slideUp(700);*/
        $(".main1").fadeOut(700);
    });
