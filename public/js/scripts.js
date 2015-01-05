$(document).ready(function(){

	//responsive logo height
		
		//bind to resize event
		$(window).resize(function(){
			logoHeight = Math.floor($(window).width()/30);
			$("section#brand .logo").css("top",(logoHeight + "%"))
		});

	//hide scroll indicator onScroll
	window.onscroll = function(e){
		if($(window).scrollTop() > 200){
			$(".scrollInd").fadeOut();
			window.onscroll = null;
		}
		
	}

});


//if pace start is not fired, just show the content
// var fallback = setTimeout(function(){
// 	console.log("fallback fired");
// 	document.getElementById("loading").className += " done";
// }, 5000);

// Pace.on("start", function(){
// 	disableScroll();
// 	console.log("start");
// 	//disable fallback timer
// 	clearTimeout(fallback);
// });

// Pace.on("start", function(){
// 	disableScroll();
// 	console.log("start");
// });

// Pace.on("done", function(){
// 	console.log("done");
// 	setTimeout(function(){
// 		$("#loading").addClass("done");
// 		setTimeout(function(){
// 			//re-enable scrolling
// 			enableScroll();
// 			//hide loading screen
// 			$("#loading").hide();	
// 		},1000);
// 	},1000);
// });

//scroll control functions
function disableScroll(){
	$('body').on({
		'mousewheel': function(e){ e.preventDefault(); e.stopPropagation(); }
	});
}

function enableScroll(){ 
	$('body').off('mousewheel');
}

