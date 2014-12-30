$(document).ready(function(){

	//responsive logo height

		//set initial
		var logoHeight = Math.floor($(window).width()/30);
		$("section#brand .logo").css("top",(logoHeight + "%"));
		//bind to resize event
		$(window).resize(function(){
			logoHeight = Math.floor($(window).width()/30);
			$("section#brand .logo").css("top",(logoHeight + "%"))
		});

});

Pace.on("start", function(){
	disableScroll();
});

Pace.on("done", function(){
	setTimeout(function(){
		$("#loading").addClass("done");
		setTimeout(function(){
			//re-enable scrolling
			enableScroll();
			//hide loading screen
			$("#loading").hide();	
		},1000);
	},1000);
});

//scroll control functions
function disableScroll(){
	$('body').on({
		'mousewheel': function(e){ e.preventDefault(); e.stopPropagation(); }
	});
}

function enableScroll(){ 
	$('body').off('mousewheel');
}

