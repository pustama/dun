jQuery(document).ready(function() {
function makingdifferent_ppopup()  {var sec = 20
var timer = setInterval(function() {
   $("#mdfooter span").text(sec--);
   if (sec == 0) {
      $("#makingdifferentpopup").fadeOut("slow");
      clearInterval(timer);
   }
},1000);
  var mdwh = jQuery(window).height();
  var mdpph = jQuery("#makingdifferentpopup").height();
  var mdfromTop = jQuery(window).scrollTop()+50;
 jQuery("#makingdifferentpopup").css({"top":mdfromTop});}
jQuery(window).fadeIn(makingdifferent_ppopup)
.resize(makingdifferent_ppopup)
 //alert(jQuery.cookie('sreqshown'));
 //var mdww = jQuery(window).width();
 //var mdppw = jQuery("#makingdifferentpopup").width();
 //var mdleftm = (mdww-mdppw)/2;
   var mdleftm = 600;
 //var mdwh = jQuery(window).height();
 //var mdpph = jQuery("#makingdifferentpopup").height();
 //var mdfromTop = (jQuery(window).scrollTop()+mdwh-mdpph) / 2;
 jQuery("#makingdifferentpopup").animate({opacity: "1", left: "0" , left:  mdleftm}, 0).show();
     jQuery("#mdclose").click(function() {
jQuery("#makingdifferentpopup").animate({opacity: "0", left: "-6000000"}, 1000).show();});});