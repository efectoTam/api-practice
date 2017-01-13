/*$.ajax({
	url: 'http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC',
	type: 'GET',
	dataType: 'json',
})*/

$(document).ready(function(){
	var dibujarGifs = function(data){
		data.forEach(function(element){
			/*$("body").append("<img src='"+element.images.downsized_large.url+"'>")*/
			$("#elementos").append(armarTemplate(element.images.downsized_large.url, element.bitly_gif_url))
		})
	}

	var armarTemplate =  function(gif, url){
		var t = "<div class='elemento'><img src='"+gif+"'/><a href='"+url+"'>Ver más</a></div>";
		return t;
	}

	var ajaxGif = function(gif){
		$.ajax({
			url: 'http://api.giphy.com/v1/gifs/search',
			type: 'GET',
			dataType: 'json',
			data: {
				q: gif,
				api_key: 'dc6zaTOxFJmzC'
			}
		})
		.done(function(response) {
			dibujarGifs(response.data);
		})
		.fail(function() {
			console.error("error");
		})
	}

	$("#buscar-gif").click(function(event) {
		$("#elementos").empty();
		var gif = $("#gif-text").val();
		ajaxGif(gif);
	});
});