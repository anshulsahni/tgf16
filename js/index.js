	// keyCode for a-65,d-68,s-83,w-87
	//up key-38, down-40,right-39,left-37
var disabled=[40,37,38,39];
impress().init();
var current_key=0;
$("body").keydown(function(event){
	console.log(current_key);
	if((event.keyCode==65 || event.keyCode==39) && current_key>-2)
		current_key--;
	else if((event.keyCode==68 || event.keyCode==37) && current_key<4)
		current_key++;
	else
		return;

	nSlide="slide"+(current_key);
	impress().goto(nSlide);
	event.preventDefault();
});