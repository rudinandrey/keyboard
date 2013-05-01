window.onkeydown = function () {
	var code = window.event.keyCode;
	var search = document.getElementById("search");
	var textSearch = search.value;
	textSearch += code.toString();
	search.value = textSearch;
};