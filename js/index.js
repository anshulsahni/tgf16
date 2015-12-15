	// keyCode for a-65,d-68,s-83,w-87
	//up key-38, down-40,right-39,left-37
var disabled=[40,37,38,39];
impress().init();
var current_key=0;
var vertical_nav=0;
$("body").keydown(function(event){
	console.log(event.keyCode);
	if((event.keyCode==65 || event.keyCode==39) && current_key>-2 && vertical_nav==0)
	{	current_key--; flag='h';	}
	else if((event.keyCode==68 || event.keyCode==37) && current_key<4 && vertical_nav==0)
	{	current_key++; flag='h';	}
	else if((event.keyCode==83 || event.keyCode==87) && current_key==0)
	{
		if(event.keyCode==83 && vertical_nav<3)
			vertical_nav++;
		else if(event.keyCode==87 && vertical_nav>0)
			vertical_nav--;
		flag='v'
	}
	else
		return;
	if(flag=='h')
		nSlide="slide"+(current_key);
	else
	{
		if(vertical_nav==0)
			nSlide="slide0";
		else
			nSlide="slide0"+vertical_nav;
	}
	impress().goto(nSlide,700);
	if(vertical_nav!=0)
		$(".left_e,.right_e").fadeOut("fast");
	else
		$(".left_e,.right_e").fadeIn("fase");

	if(current_key!=0)
		$(".top_e,.bottom_e").fadeOut("fast");
	else
		$(".top_e,.bottom_e").fadeIn("fast")

	event.preventDefault();
});

$(function(){
    $("#guide_callout").typed({
	    strings: ["First sentence.","Second Sentence"],
        typeSpeed: 0,
        loop: true,
        showCursor: false
    });
});

$(".menu_items").click(function(){
	var id=$(this).attr("id");
	$("#"+id+"_content").removeClass("deactive");
	$("#"+id+"_content").siblings().removeClass("active").addClass("deactive");
	$("#"+id+"_content").addClass("active");
});

function rotateCube(){
	setInterval(function(){
		var cls=$("#cube").attr("class");
		if(cls=="face1")
			var newCls="face3";
		else if(cls=="face2")
			var newCls="face6";
		else if(cls=="face3")
			var newCls="face5";
		else if(cls=="face4")
			var newCls="face2";
		else if(cls=="face5")
			var newCls="face4";
		else if(cls=="face6")
			var newCls="face1";
		$("#cube").addClass(newCls);
		$("#cube").removeClass(cls);
	},2000);
}