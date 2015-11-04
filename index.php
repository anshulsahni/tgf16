<!DOCTYPE html>
<html>
<head>
	<title>THE GAMING FEST'16</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<script type="text/javascript" src="./js/jquery.min.js"></script>
	<style type="text/css">
		*{padding:0px; margin:0px; font-family: "calibri";}
		body,html{overflow:hidden; height: auto; width: auto;}
		#wrapper{
			/*height: 550px;*/
			position: relative;
			background-color: #000;
			text-align: center;
		}
		#wrapper img{margin:0px auto; position: relative;}
		#old_site{ padding: 5px 25px; display: table; background-color: #F00; position: relative; bottom:9.8%; margin: 0px auto; left:150px; cursor: pointer; box-shadow: 5px 5px 0px #000;}
		#old_site:hover{background-color: #fff; transition: all 0.5s;}
		#old_site:hover a{color:#333;}
		#old_site a{text-decoration: none; color: rgb(200,150,150); font-weight: 900; font-size: 1.2em;}
	</style>
	<script type="text/javascript">
		$(document).ready(function(){
			// $("#old_site").hide();
			$('#wrapper').css("height",window.innerHeight)
			$('#wrapper img').css("height",window.innerHeight)
		});

	</script>
</head>
<body>
<div id='wrapper'>
	<img src="./Untitled.jpg">
	<div id='old_site'>
		<a href="./tgf15">See TGF'15</a>
	</div>
</div>
</body>
<script type="text/javascript">	
	// $("img").mouseenter(function(){
	// 		$("#old_site").fadeIn(400);
	// 	});
	// $("img").mouseleave(function(){
	// 	$("#old_site").fadeOut(400);
	// })

</script>
</html>