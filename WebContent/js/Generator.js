

function generateCard(Temp, min, max) {
	var html =  "	" +
	"<div class='row'>" +
    "<div class='col s12 m6'>"+
    "  <div class='card blue-grey darken-1 horizontal'>"+	
	"<div class='card-content white-text'> " +
    "<span class='card-title'>Rintheim " +
    "	<img id='weatherCond' src='http://openweathermap.org/img/w/01d.png' alt='clear skyp'>"+
    "</span>"+
    
    
    "<div class='row'>"+
    "<div class='col s6'>Temperature</div>"+
    "<div class='col s6'>300.1</div>"+
    "</div>"+
    "<div class='row'>"+
    "<div class='col s6'>Min</div>"+
    "<div class='col s6'>300.1</div>"+
    "</div>"+
    "<div class='row'>"+
    "<div class='col s6'>Max</div>"+
    "<div class='col s6'>300.1</div>"+
    "</div>  "+
    "</div>  "+
    "</div>  "+
    "</div>   ";
	
	
	
	return html;
}

function generateCollapsibleItem(item) {
	return "<li>" +	
	generateHeader(item) + generateCollapsCard(item) +
	"</li>";
}

function generateHeader(item) {	
	 return "" + 	
	 "<div class='collapsible-header'> "+
	 "<div class='row horizontal'>"+
	 "<div class='col l3'>" + item.dt_txt +"</div>"+
	 "<div class='col l3 offset-l3'>" + item.weather[0].description + "</div>"+
	 "<div class='col l3 offset-l6'>" + getCelsius(item.main.temp) + "</div>"+
	 "<div class='col l3 offset-l9'><img src='http://openweathermap.org/img/w/" + item.weather[0].icon + ".png' alt=" + item.weather[0].main + "'></div> 	 "+
	 "</div>"+
	 "</div>";
	 
	 




}

function generateCollapsCard(item) {
	return "" + 
	"<div class='collapsible-body'>"+	
	"<div class='row'>"+
    "<div class='col s6'>Temperature</div>"+
    "<div class='col s6'>"+ getCelsius(item.main.temp) + "</div>"+
    "</div>"+
    "<div class='row'>"+
    "<div class='col s6'>Min</div>"+
    "<div class='col s6'>"+ getCelsius(item.main.temp_min) + "</div>"+
    "</div>"+
    "<div class='row'>"+
    "<div class='col s6'>Max</div>"+
    "<div class='col s6'>"+ getCelsius(item.main.temp_max) + "</div>"+
    "</div>  "+	
	"</div>";
}

function getCelsius(temp) {
	return Math.floor(temp - 273);
}