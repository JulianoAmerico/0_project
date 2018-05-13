// Cotation price 2approve
$(document).ready(function(){
	$("#card-1").hide();
	$("#card-2").hide();
    $(".bt-hide-1").click(function(){
        $("#card-1").toggle(1000);
    });
    $(".bt-hide-2").click(function(){
    	$("#card-2").toggle(1000);
    });
});
