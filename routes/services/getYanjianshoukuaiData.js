module.exports = getYanjianshoukuaiData;
function getYanjianshoukuaiData(){
	var result = [],
		demo = [];
	for (var i = 0; i < 25; i++) {
		demo[i] = i+1;
	}
	for (var i = 0; i < 25; i++) {
		var index = Math.floor(Math.random()*(25-i));
		result[i] = demo[index];
		index = remove(demo, index);
	}
	return result;
}

function remove(array, index){
	for(var i = index; i < array.length - 1; i++){
		array[i] = array[i+1];
	}
	array.pop();
	return array;
}