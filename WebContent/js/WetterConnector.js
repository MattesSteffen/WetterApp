/* 
Handles all the communication with the Weather API
API: https://openweathermap.org/api
* current Weather
* Weatherforecast 5 day / 3 hours
* UV Index
* Air pllution
*/
var weather = {
		"current": {},
		"forecast" : {},
		"uv": {},
		"pollution" : {}
		
}

var keyCurrent = "e87443021b8fe2a11b09118413a4dd8c";
var keyForeCast = "52e260f5b08b5a9263ef59cdd8d1ad52";
var keyUV = "53bcec9b196422ae1b62e53135b7e6db";
var keyPoll = "e40324a7482930946d7e10341555d99e";

var position = {};
var positionURLSuffix = "";

function setPositionURL(cposition) {
	position = cposition;
	var lat = "lat=" + position.coords.latitude + "";
	var ion = "&lon=" + position.coords.longitude + "";
	positionURLSuffix = lat + ion;
}


/** ******************************************** */
/* methods for requesting weather from the API */
/** ******************************************** */
function requestCurrentWeather(position) {
	// wetterAPI
	var Paramkey = "&APPID=e87443021b8fe2a11b09118413a4dd8c";
	var urlAPI = "http://api.openweathermap.org/data/2.5/weather?";
	var lat = "lat=" + position.coords.latitude + "";
	var ion = "&lon=" + position.coords.longitude + "";

	var url = urlAPI + lat + ion + Paramkey;
	
	callAPI(url, "current")
	

};

function requestForeCast() {
	callAPI(
			"http://api.openweathermap.org/data/2.5/forecast?" + positionURLSuffix + "&APPID=" + keyForeCast, 
			"forecast");
};

function requestUV() {
	callAPI(
			"http://api.openweathermap.org/data/2.5/uvi/forecast?" + positionURLSuffix + "&APPID=" + keyUV, 
			"uv");
};

function requestPoll(position) {
	callAPI(
			"http://api.openweathermap.org/pollution/v1/co/" +
			position.coords.latitude + "," + position.coords.longitude + "/"
			+ new Date().toISOString() + ".json"
			+ "?appid=" + keyPoll
			, "pollution");	
};
/*
 * calls the openWeatherAPI
 */
function callAPI(url, StorageKey) {
	console.log("requesting data from API");
	console.log(URL);
	console.log(StorageKey);	
	
	$.ajax({
		url : url,
		type : "GET",
		success : function(result) {
			weather[StorageKey] = result;
			console.log(result);
			// $("#demo").append("<p>" + JSON.stringify(result) + "</p>");
		},
		error: function(error) {
			alert("An Error occured:" + error + URL + StorageKey);
			console.log("An Error occured" + error + URL + StorageKey);
		}
	});
}



