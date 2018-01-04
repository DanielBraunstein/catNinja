$(document).ready(function(){
	$(".image").click(function() {
  		var temp = $(this).attr('data-alt-src');
  		console.log(temp);
		$(this).attr('data-alt-src', $(this).attr('src'));
		$(this).attr('src', temp);
	});
})