$(document).ready(function(){
	$("#search").on("input",function(){
		var searchText = $("#search").val().toLowerCase();
		$("p").each(function(){
			var paragraphText = $(this).attr('data-name').toLowerCase();
			 let filteredText = paragraphText.toLowerCase().includes(searchText);
			if (filteredText == true) {
	            $(this).addClass("highlight");
	        }else{
            	$(this).removeClass("highlight");	
	        }
		});
		if ($("#search").val().length === 0) {
			$("p").each(function(){
				$(this).removeClass("highlight");
			});
		}
	});
	$("#reload").on("click",function(){
		location.reload();
	});
})