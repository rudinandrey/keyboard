var key2 = new Array("a","b","c","а","б","в","г");
var key3 = new Array("d","e","f","д","е","ж","з");
var key4 = new Array("g","h","i","и","й","к","л");
var key5 = new Array("j","k","l","м","н","о","п");
var key6 = new Array("m","n","o","р","с","т","у");
var key7 = new Array("p","q","r", "s" ,"ф","х","ц","ч");
var key8 = new Array("t","u","v","ш","щ","ъ","ы");
var key9 = new Array("w","x","y", "z","ь","э","ю","я");


var indexKeys = {"2": 0, "3": 0, "4": 0, "5":0, "6":0, "7":0,"8":0, "9":0};


var clearIndexes = function () {
	indexKeys = {"2": 0, "3": 0, "4": 0, "5":0, "6":0, "7":0,"8":0, "9":0};
};

var increaseIndex = function (arr, key) {
	console.log("arr=" + arr + " ... " + "key=" + key);
	var length = arr.length;
	var currentKey = indexKeys[key];
	clearIndexes();
	console.log('lenght=' + length);
	if (currentKey < length - 1) currentKey += 1;
	else currentKey = 0;
	indexKeys[key] = currentKey;
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
		case 52:
			search.value = search.value + key4[indexKeys["4"]];
			increaseIndex(key4, "4");
			break;
			case 53:
			search.value = search.value + key5[indexKeys["5"]];
			increaseIndex(key5, "5");
			break;
			case 54:
			search.value = search.value + key6[indexKeys["6"]];
			increaseIndex(key6, "6");
			break;
			case 55:
			search.value = search.value + key7[indexKeys["7"]];
			increaseIndex(key7, "7");
			break;
			case 56:
			search.value = search.value + key8[indexKeys["8"]];
			increaseIndex(key8, "8");
			break;
			case 57:
			search.value = search.value + key9[indexKeys["9"]];
			increaseIndex(key9, "9");
			break;
	}
	return false;
};