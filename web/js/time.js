function showTime(){
	myDate = new Date();
	hours = myDate.getHours();
	minutes = myDate.getMinutes();
	if (hours < 10) hours = 0 + hours;
	if (minutes < 10) minutes = "0" + minutes;
	document.getElementById("HoraActual").innerHTML = hours + ":" + minutes;
	setTimeout("showTime()", 1000);
}

showTime();