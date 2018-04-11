var gradeList = require('./grade');

var chessleft = require('./circle').chessleft;
var chessright = require('./circle').chessright;
var chessup = require('./circle').chessup;
var chessbottom = require('./circle').chessbottom;
var chessleftup = require('./circle').chessleftup;
var chessrightbottom = require('./circle').chessrightbottom;
var chessleftbottom = require('./circle').chessleftbottom;
var chessrightup = require('./circle').chessrightup;

var especial = {
	'self': {
		'banhuosi': require('./grade').banhuosi,
		'huosan': require('./grade').huosan
	},
	'other': {
		'banhuosi': require('./grade').dibanhuosi,
		'huosan': require('./grade').dihuosan
	}
}
/**
 * [matchGetGrade 通过模型得到分数]
 */
function matchGetGrade(chessModel){
	if(chessModel.length <5){
		return 0;
	}
	var res = 0;
	for(var j = 5;j < 8;j++){
		for(var i = 0;i <= chessModel.length - j;i++){
			var chessModelGrade = gradeList[chessModel.substring(i,i+j)];
			res += chessModelGrade === undefined ? 0 : chessModelGrade;
		}
	}
	return res;
}
/**
 * [especialMatchGetGrade 给双半活四，三四型打分]
 */
function especialMatchGetGrade(dir,type){
	var len = dir.length;
	var banhuosiFlag = 0,huosanFlag = 0;
	for(let k = 0;k < len;k++){
		for(var j = 5;j < 8;j++){
			for(var i = 0;i <= dir[k].length - j;i++){
				var chessModel = dir[k].substring(i,i+j);
				if(especial[type]['banhuosi'][chessModel] !== undefined){
					banhuosiFlag++;
				}
				if(especial[type]['huosan'][chessModel] !== undefined){
					huosanFlag++;
				}
			}
		}
	}
	if(banhuosiFlag === 1 && huosanFlag >= 1){
		return gradeList[type]['sisan'];
	}
	if(banhuosiFlag === 2){
		return gradeList[type]['twosi'];
	}
	return 0;
}
/**
 * @return {在qixingarray情形下评估点(x,y)}
 */
function assess(qixingarray, x, y, type){
	var result = 0;
	//从左到右的形势
	var leftToRightmodule = '' + type;
	var leftsize = chessleft(y);
	for(let i = 1;i <= leftsize;i++){
		if(qixingarray[x][y-i] === type|| qixingarray[x][y-i] ===0){
			leftToRightmodule = qixingarray[x][y-i] + leftToRightmodule;
		}else{
			break;
		}
	}
	var rightsize = chessright(y);
	for(let i = 1;i <= rightsize;i++){
		if(qixingarray[x][y+i] === type|| qixingarray[x][y+i] ===0){
			leftToRightmodule += qixingarray[x][y+i];
		}else{
			break;
		}
	}
	result += matchGetGrade(leftToRightmodule);

	//从上到下的形势
	var upToBottommodule = '' + type;
	var upsize = chessup(x);
	for(let i = 1;i <= upsize;i++){
		if(qixingarray[x-i][y] === type|| qixingarray[x-i][y] ===0){
			upToBottommodule = qixingarray[x-i][y] + upToBottommodule;
		}else{
			break;
		}
	}
	var bottomsize = chessbottom(x);
	for(let i = 1;i <= bottomsize;i++){
		if(qixingarray[x+i][y] === type|| qixingarray[x+i][y] ===0){
			upToBottommodule += qixingarray[x+i][y];
		}else{
			break;
		}
	}
	result += matchGetGrade(upToBottommodule);

	//从左上到右下的形势
	var leftupToRightbottommodule = '' + type;
	var leftupsize = chessleftup(x,y);
	for(let i = 1;i <= leftupsize;i++){
		if(qixingarray[x-i][y-i] === type|| qixingarray[x-i][y-i] ===0){
			leftupToRightbottommodule = qixingarray[x-i][y-i] + leftupToRightbottommodule;
		}else{
			break;
		}
	}
	var rightbottomsize = chessrightbottom(x,y);
	for(let i = 1;i <= rightbottomsize;i++){
		if(qixingarray[x+i][y+i] === type|| qixingarray[x+i][y+i] ===0){
			leftupToRightbottommodule += qixingarray[x+i][y+i];
		}else{
			break;
		}
	}
	result += matchGetGrade(leftupToRightbottommodule);

	//从右上到左下的形势
	var rightupToLeftbottommodule = '' + type;
	var rightupsize = chessrightup(x,y);
	for(let i = 1;i <= rightupsize;i++){
		if(qixingarray[x-i][y+i] === type|| qixingarray[x-i][y+i] ===0){
			rightupToLeftbottommodule = qixingarray[x-i][y+i] + rightupToLeftbottommodule;
		}else{
			break;
		}
	}
	var leftbottomsize = chessleftbottom(x,y);
	for(let i = 1;i <= leftbottomsize;i++){
		if(qixingarray[x+i][y-i] === type|| qixingarray[x+i][y-i] === 0){
			rightupToLeftbottommodule += qixingarray[x+i][y-i];
		}else{
			break;
		}
	}
	result += matchGetGrade(rightupToLeftbottommodule);

	//给特殊情况打分
	result += especialMatchGetGrade([leftToRightmodule,
		upToBottommodule,
		leftupToRightbottommodule,
		rightupToLeftbottommodule],type === 1 ? 'self' : 'other');
	console.log(x + ',' + y + '节点评分完毕，得分：' + result);
	return result;
}
/**
 * @param  {[遍历所有未下子的点，并给出评估]}
 * @return {[type]}
 */
module.exports = function(qixingarray){
	var grade = new Array(15);
	for(let i = 0;i < 15;i++){
		var gradeChild=new Array(15);
		for(let j = 0;j < 15;j++){
			gradeChild[j]=0;
			qixingarray[i][j] = parseInt(qixingarray[i][j]);
		}
		grade[i]=gradeChild;
	}
	for(let i = 0;i < 15;i++){
		for(let j = 0;j < 15;j++){
			if(qixingarray[i][j] === 0){
				qixingarray[i][j] = 1;
				grade[i][j] += assess(qixingarray, i, j, 1);
				qixingarray[i][j] = 0;
				qixingarray[i][j] = 2;
				grade[i][j] += assess(qixingarray, i, j, 2);
				qixingarray[i][j] = 0;
			}
		}
	}
	var result = {
		x: 0,
		y: 0
	};
	var nodeGrade = 0;
	for(let i = 0;i < 15;i++){
		for(let j = 0;j < 15;j++){
			if(grade[i][j] > nodeGrade){
				nodeGrade = grade[i][j];
				result.x = i;
				result.y = j;
			}
		}
	}
	return result;
}