$(document).ready(function(){

//collapse the hamburger menu on click	
	$(document).on('click','.navbar-collapse.in',function(e) {
    	if( $(e.target).is('a') && $(e.target).attr('class') !=='dropdown-toggle' ) {
        	$(this).collapse('hide');
    	}
	});	

//diction exercise - throat/prepare - remove animation and change image on click
	$("#throat").click(function(){
		if($(this).hasClass('clicked')){
			$("#throat").removeClass('clicked');
			$("#throat").attr('src','Images/preptrans.png');
		}
		else{
			$("#throat").attr('src','Images/prepex.png');
			$("#throat").addClass('clicked');	
		}
	});	
//diction exercise - brain/focus - remove animation and change image on click
	$("#brain").click(function(){
		if($(this).hasClass('clicked')){
			$("#brain").removeClass('clicked');
			$("#brain").attr('src','Images/focustrans.png');
		}
		else{
			$("#brain").attr('src','Images/focusex.png');
			$("#brain").addClass('clicked');	
		}
	});		
//diction exercise - lungs/challenge - remove animation and change image on click
	$("#lungs").click(function(){
		if($(this).hasClass('clicked')){
			$("#lungs").removeClass('clicked');
			$("#lungs").attr('src','Images/challengetrans.png');
		}
		else{
			$("#lungs").attr('src','Images/challengeex.png');
			$("#lungs").addClass('clicked');	
		}
	});	
//change image back on click		
	
//	$("#brain").click(function(){
//		$("#brain").attr('src','Images/focusex.png');
//	});
//	
//	$("#lungs").click(function(){
//		$("#lungs").attr('src','Images/challengeex.png');
//	});	

//change from grey punctuation images to color images w/example on click
//period
	$(".punc1").click(function(){
		if($("#original-period").hasClass('clicked')){
			$("#original-period").removeClass('clicked');
			$("#original-period").attr('src','Images/periodgrey.png');
		}
		else{
			$("#original-period").attr('src','Images/periodcolor.png');
			$("#original-period").addClass('clicked');	
		}
	});
//colon	
	$(".punc2").click(function(){
		if($("#original-colon").hasClass('clicked')){
			$("#original-colon").removeClass('clicked');
			$("#original-colon").attr('src','Images/colongrey.png');
		}
		else{
			$("#original-colon").attr('src','Images/coloncolor.png');
			$("#original-colon").addClass('clicked');	
		}
	});
//exclamation
	$(".punc3").click(function(){
		if($("#original-exclam").hasClass('clicked')){
			$("#original-exclam").removeClass('clicked');
			$("#original-exclam").attr('src','Images/exclamgrey.png');
		}
		else{
			$("#original-exclam").attr('src','Images/exclamcolor.png');
			$("#original-exclam").addClass('clicked');	
		}
	});
//comma
	$(".punc4").click(function(){
		if($("#original-comma").hasClass('clicked')){
			$("#original-comma").removeClass('clicked');
			$("#original-comma").attr('src','Images/commagrey.png');
		}
		else{
			$("#original-comma").attr('src','Images/commacolor.png');
			$("#original-comma").addClass('clicked');	
		}
	});
//commas
	$(".punc5").click(function(){
		if($("#original-commas").hasClass('clicked')){
			$("#original-commas").removeClass('clicked');
			$("#original-commas").attr('src','Images/commasgrey.png');
		}
		else{
			$("#original-commas").attr('src','Images/commascolor.png');
			$("#original-commas").addClass('clicked');	
		}
	});
//semi-colon
	$(".punc6").click(function(){
		if($("#original-semi").hasClass('clicked')){
			$("#original-semi").removeClass('clicked');
			$("#original-semi").attr('src','Images/semigrey.png');
		}
		else{
			$("#original-semi").attr('src','Images/semicolor.png');
			$("#original-semi").addClass('clicked');	
		}
	});
	
//	$(".punc6").click(function(){
//		$("#original-semi").attr('src','Images/semicolor.png');
//	});	
		
});