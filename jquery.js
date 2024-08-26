	$(document).ready(function(){
		$(".skill-item").hover(function(params) {
			html_td = "";
			$(this).find(".img-prop").hide();
			$(this).find(".level-prop").show();
			$(this).find(".tr-data").attr("max_level");
			levelcount = $(this).find(".tr-data").data("max");
			for (let index = 0; index < levelcount; index++) {
				dynamic_class = "col-count-"+index;
				html_td +='<td class="column-style '+dynamic_class+'">&nbsp</td>';
			}
			$(this).find(".tr-data").append(html_td);
			level = $(this).find(".tr-data").data("level");
			for (let index = 0; index < level; index++) {
				setTimeout(() => {
					$(this).find(".col-count-" + index).css({
						"background-color": "rgb(55, 255, 0)",
						"transition": "background-color 0.1s ease"
					});
					count = index + 1;
					$(this).find(".counter").html("<span class='count'>"+count+"<span>");
				}, 100 * index);
			}
		},function () {
			$(this).find(".count").remove();
			$(this).find(".tr-data .column-style").remove();
			$(this).find(".img-prop").show();
			$(this).find(".level-prop").hide();
		})
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
			$(".skillsTitle11").delay(2200).show(200);
			$(".skillsTitle12").delay(2400).show(200);
		}if ($(window).scrollTop() >= 1200) {
			$(".mycert").fadeIn(200);
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
			$(".mycert").removeClass("text-h3").addClass("text-h4").css("text-align","center");
			$(".project").removeClass("text-h3").addClass("text-h4").css("text-align","center");
		}else{
			$(".introContent").addClass("text-h6").removeClass("text-h7");
			$(".introTitle").addClass("text-h3").removeClass("text-h4");
			$(".aboutMeContent").addClass("text-h6").removeClass("text-h7");
			$(".aboutMeContentTitle").addClass("text-h3").removeClass("text-h4");
			$(".avatarSize").width("35vw").height("35vw");
			$(".skilltitle").addClass("text-h3").removeClass("text-h4").css("text-align","center");
			$(".mycert").addClass("text-h3").removeClass("text-h4").css("text-align","center");
			$(".project").removeClass("text-h3").addClass("text-h4").css("text-align","center");
		}
		// css-class end
	});