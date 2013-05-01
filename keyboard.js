var key2 = new Array("a", "b", "c", "а", "б", "в", "г");
var key3 = new Array("d", "e", "f", "д", "е", "ж", "з");
var key4 = new Array("g", "h", "i", "и", "й", "к", "л");
var key5 = new Array("j", "k", "l", "м", "н", "о", "п");
var key6 = new Array("m", "n", "o", "р", "с", "т", "у");
var key7 = new Array("p", "q", "r", "s", "ф", "х", "ц", "ч");
var key8 = new Array("t", "u", "v", "ш", "щ", "ъ", "ы");
var key9 = new Array("w", "x", "y", "z", "ь", "э", "ю", "я");
var search = "";
var timer = null;
var highlightTimer = null;


    function setHighlightCell(cell) {
    	cell.style.color = 'white';
    	cell.style.backgroundColor = '#333';
    	highlightTimer = setTimeout(function () {
    		cell.style.color = 'black';
    		cell.style.backgroundColor = '#FFF';
    	}, 200);

	}

var indexKeys = { "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0, "9": 0 };

var clearText = function () {
	var s = document.getElementById('search');
	s.innerHTML = search;
	timer = null;
	clearIndexes();
};

var clearIndexes = function () {
	indexKeys = { "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0, "9": 0 };
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
	var s = document.getElementById('search');
	console.log(code);
	if (timer != null) {
		// We know about timer is still working
		// and we have to remove last symbol from search string, and change it to another
		search = search.substring(0, search.length - 1);
		window.clearTimeout(timer);
		timer = null;
	}
	var tempSearch = search;

	switch (code) {
		case 49:
			var cell = document.getElementById('cell1');
			cell.style.backgroundColor = '#444';
			break;
		case 50:
			tempSearch = tempSearch + key2[indexKeys["2"]];
			search = tempSearch;
			increaseIndex(key2, "2");
			setHighlightCell(document.getElementById('cell2'));
			break;
		case 51:
			tempSearch = tempSearch + key3[indexKeys["3"]];
			search = tempSearch;
			increaseIndex(key3, "3");
			setHighlightCell(document.getElementById('cell3'));
			break;
		case 52:
			tempSearch = tempSearch + key4[indexKeys["4"]];
			search = tempSearch;
			increaseIndex(key4, "4");
			setHighlightCell(document.getElementById('cell4'));
			break;
		case 53:
			tempSearch = tempSearch + key5[indexKeys["5"]];
			search = tempSearch;
			increaseIndex(key5, "5");
			setHighlightCell(document.getElementById('cell5'));
			break;
		case 54:
			tempSearch = tempSearch + key6[indexKeys["6"]];
			search = tempSearch;
			increaseIndex(key6, "6");
			setHighlightCell(document.getElementById('cell6'));
			break;
		case 55:
			tempSearch = tempSearch + key7[indexKeys["7"]];
			search = tempSearch;
			increaseIndex(key7, "7");
			setHighlightCell(document.getElementById('cell7'));
			break;
		case 56:
			tempSearch = tempSearch + key8[indexKeys["8"]];
			search = tempSearch;
			increaseIndex(key8, "8");
			setHighlightCell(document.getElementById('cell8'));
			break;
		case 57:
			tempSearch = tempSearch + key9[indexKeys["9"]];
			search = tempSearch;
			increaseIndex(key9, "9");
			setHighlightCell(document.getElementById('cell9'));
			break;
	}

	var len = tempSearch.length;
	tempSearch = tempSearch.substring(0, len - 1) + "<span class='selected'>" + tempSearch.substring(len - 1, len) + "</span>";
	s.innerHTML = tempSearch;
	timer = setTimeout(function () { clearText(); }, 1000);

	return false;
};