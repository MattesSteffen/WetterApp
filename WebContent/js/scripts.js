/*
 * Main Script of the Weather App
 * var <Local> controlles wheater the real API is used
 */


var  Local = true;  //fixthis



var x = document.getElementById("geoloc");



$(document).ready(function(){
	$('.tabs').tabs();
	$('.sidenav').sidenav();	
	$('#tabsNavBar').tabs({ 'swipeable': true });
	$('.collapsible').collapsible();
	
	console.log("test");
	getLocation();	
  });




function showCurrentWeather() {

}

function showForeCast() {

}

function getLocation() {
	
	
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition, showError);
	} else {
		x.innerHTML = "Geolocation is not supported by this browser.";
	}
}

/** ******************************************** */
/* position related methods */
/** ******************************************** */
function showPosition(position) {
	// x.innerHTML = "Latitude: " + position.coords.latitude +
	// "<br>Longitude: " + position.coords.longitude;
	// TODO show position in document
	//currentWeather = localWeather;	
	//requestCurrentWeather(position);	
	setPositionURL(position);
	if(Local === false) {
		requestCurrentWeather(position);
		requestForeCast(position);
		requestUV(position);
	} else {
		weather = localWeather;
	}
	
	//requestPoll(position);
	console.log("weather");
	console.log(weather);
	showWeather();
}

function showWeather() {
	
	var url = "http://openweathermap.org/img/w/01d.png";

	 //$("#Heute").append("<p>" + JSON.stringify(weather.current) + "</p>");
	 //$("#Vorhersage").append("<p>" + JSON.stringify(weather.forecast) + "</p>");
	 $("#UVIndex").append("<p>" + JSON.stringify(weather.uv) + "</p>");
	 $("#Pollution").append("<p>" + JSON.stringify(weather.pollution) + "</p>");
	 $("#Stadname").append("<p>" + weather.current.name + "</p>");
	 
	 //$("Heute").append("<img src=" + url +" alt='HTML5 Icon'>");
	 //$("#weatherCond").attr("src", "http://openweathermap.org/img/w/11d.png")
	 
	 $("#Heute").append(generateCard());
	 //var test = generateCollapsibleItem(weather.forecast.list[0]);
	 
	 weather.forecast.list.forEach(function(item) {
		 $("#VorhersageColl").append(generateCollapsibleItem(item));
	 }); 
	 $('.collapsible').collapsible();
}



/** ******************************************** */
/* error handling methods */
/** ******************************************** */

function showError(error) {
	switch (error.code) {
	case error.PERMISSION_DENIED:
		x.innerHTML = "User denied the request for Geolocation."
		break;
	case error.POSITION_UNAVAILABLE:
		x.innerHTML = "Location information is unavailable."
		break;
	case error.TIMEOUT:
		x.innerHTML = "The request to get user location timed out."
		break;
	case error.UNKNOWN_ERROR:
		x.innerHTML = "An unknown error occurred."
		break;
	}
}

