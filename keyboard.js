var key2 = new Array("a","b","c","а","б","в","г");
var key3 = new Array("d","e","f","д","е","ж","з");
var indexKeys = {"2": 0, "3": 0, "4": 0, "5":0};


var clearIndexes = function () {
	indexKeys = {"2": 0, "3": 0, "4": 0, "5":0};
};

var increaseIndex = function (arr, key) {
	console.log("arr=" + arr + " ... " + "key=" + key);
	var length = arr.length;
	var currentKey = indexKeys[key];
	clearIndexes();
	console.log('lenght=' + length);
	if (indexKeys[key] < length - 1) indexKeys[key] += 1;
	else indexKeys[key] = 0;
	console.log('index=' + indexKeys[key]);
}



window.onkeydown = function () {
	var code = window.event.keyCode;
	var search = document.getElementById("search");
	var textSearch = search.value;

	switch (code) {
		case 50:
			search.value = search.value + key2[indexKeys["2"]];
			increaseIndex(key2, "2");
			break;
		case 51:
			search.value = search.value + key3[indexKeys["3"]];
			increaseIndex(key3, "3");
			break;
	}

};