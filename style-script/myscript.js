
new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: {
        title: 'Portfolio',

        win:window.innerWidth,

    }
})



$(document).ready(function(){
// function start
$("#aboutbtn").on("click",function(){
	$(window).scrollTop("503");
});
// function end
// animation start
$(".fadein").fadeIn(2000);
$(".showitems").show(3000);
$(window).scroll(function() {
  if ($(window).scrollTop() >=50) {
	  $(".aboutMe").show(2000);
  }if ($(window).scrollTop() >=400) {
  	$(".skillTitle").fadeIn(2000);
  	$(".skillsTitle1").delay(200).show(200);
  	$(".skillsTitle2").delay(400).show(200);
  	$(".skillsTitle3").delay(600).show(200);
  	$(".skillsTitle4").delay(800).show(200);
  	$(".skillsTitle5").delay(1000).show(200);
  	$(".skillsTitle6").delay(1200).show(200);
  	$(".skillsTitle7").delay(1400).show(200);
  	$(".skillsTitle8").delay(1600).show(200);
  	$(".skillsTitle9").delay(1800).show(200);
  	$(".skillsTitle10").delay(2000).show(200);
  }
});
// animation end
// css-class start
	if ($(window).width() <= 412) {
		$(".introContent").removeClass("text-h6").addClass("text-h7");
		$(".introTitle").removeClass("text-h3").addClass("text-h4");
		$(".aboutMeContent").removeClass("text-h6").addClass("text-h7");
		$(".aboutMeContentTitle").removeClass("text-h3").addClass("text-h4");
		$(".avatarSize").width("60vw").height("60vw");
		$(".skilltitle").removeClass("text-h3").addClass("text-h4").css("text-align","center");
	}else{
		$(".introContent").addClass("text-h6").removeClass("text-h7");
		$(".introTitle").addClass("text-h3").removeClass("text-h4");
		$(".aboutMeContent").addClass("text-h6").removeClass("text-h7");
		$(".aboutMeContentTitle").addClass("text-h3").removeClass("text-h4");
		$(".avatarSize").width("35vw").height("35vw");
		$(".skilltitle").addClass("text-h3").removeClass("text-h4").css("text-align","center");
	}
	// css-class end
});