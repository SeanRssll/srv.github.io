$(document).ready(function(){
	
	$(".top-black").slideDown(2000);
	$(".bottom-black").animate({
        top: '40vw',
        height: '15vw',
	}, 2000).queue(function(next) {
		$("#silence").show().animate({
			width:"100%",
		},2000).queue(function(next){
			cinematic_animate('-7vw','14vw',3,2000);
			$("#isnt").fadeIn(2000)
			.queue(function(next){
				var vtop = 0;
				if ($(document).width() <= 1340) {
					vtop = "-11vw";
				}else{
					vtop = "-12vw";
				}
				cinematic_animate(vtop,'-17vw',3,'');
				var deg = 0;
				var callinterval = setInterval(function() {
					deg += 2;
					cinematic_rotate(deg);
					if (deg >= 90) {
						clearInterval(callinterval);
					}
				},10);

				$("#strength").slideDown(2000)
				
				.queue(function(next){

					var count = 90;
					var callinterval = setInterval(function() {
						count -= 2;
						cinematic_rotate(count);
						if (count === 0) {
							clearInterval(callinterval);
						}
					},10);
					cinematic_animate('-1vw','11vw',1.2,1500);
					$("#speaking").slideDown().queue(function(){
						cinematic_animate('2vw','7vw',1.4,1500)
						
						$("#up").fadeIn(3500).queue(function(){
							$("#is").css({
								"position":"absolute",
								"z-index": "3"
							});
							
							cinematic_animate('-12vw','13vw',3.4,1500);
							$('#is').show().queue(function(next) {
								$(".cinematic").fadeOut(2000).queue(function(next) {
									ending();
								});
						  	});
						});
							
					})

					next();
				})
				next();
			})

			next();
		})		
		next();
	})
	function cinematic_animate(vtop,vleft,vzoom,vdelay){
		$(".cinematic").animate({
			left:vleft,
			top:vtop,
			zoom:vzoom
		},vdelay);
	}
	function cinematic_rotate(rotate){
		$(".cinematic").css({
			"transform": "rotate(-"+rotate+"deg)"
		});
	}

	function ending(){
		$(".top-black").slideUp(2000);
		$(".bottom-black").animate({
	        top: '54vw',
	        height: '0px',
		}, 2000); 
		$("p").each(function(){
			$(this).fadeIn(7000);
		});

	} 

});