var key2 = new Array("a","b","c");
var indexKeys = {"2": 0, "3": 0, "4": 0, "5":0};

var increaseIndex = function (arr, key) {
	console.log("arr=" + arr + " ... " + "key=" + key);
	var length = arr.length;
	console.log('lenght=' + length);
	if (indexKeys[key] < length-1) indexKeys[key] += 1;
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
	}

};