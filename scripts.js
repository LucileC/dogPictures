
function showFullImage(image) {
	var image_path = ("img/0" + image + ".png");
	document.getElementById('image_container').innerHTML = "<img src = '" + image_path + "' />";
	console.log(image_path);
}

function showGridView() {
	var content_string = "<div id = 'grid_view'>\
	<div class = 'image_in_grid' onclick='showFullImage(1)'>\
	<img src ='img/01.png' />\
	</div>\
	<div class = 'image_in_grid' onclick='showFullImage(2)'>\
	<img src = 'img/02.png' />\
	</div>\
	<div class = 'image_in_grid' onclick='showFullImage(3)'>\
	<img src = 'img/03.png' />\
	</div>\
	<div class = 'image_in_grid' onclick='showFullImage(4)'>\
	<img src = 'img/04.png' />\
	</div>\
	</div>";
	document.getElementById('image_container').innerHTML = content_string;
}

function refresh() {
	var xhttp = new XMLHttpRequest();
	xhttp.open("GET", "https://46l7ad1ddd.execute-api.us-east-1.amazonaws.com/prod", true);
	xhttp.send();
	xhttp.addEventListener("readystatechange", processRequest, false);
	function processRequest(e) {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			var response = JSON.parse(xhttp.responseText);
			var numberString = response.dogPicture;
			if(numberString < 5 && numberString > 0) {
				showFullImage(numberString);
			} else {
				showGridView();
			}
			console.log(numberString);
		}
	}
	setTimeout(refresh, 1000);
}

refresh()