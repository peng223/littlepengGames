module.exports = function(){
	var topics = [];
	var wucha = [0,1,0,-1,0,2,0,-2,0,3,0,-3,0,4,0,-4,0,5,0,-5];
	var operator = ['+','-'];
	for(let i = 0;i < 5;i++){
		topics[i] = {};
		topics[i].a = Math.ceil(Math.random()*20);
		topics[i].b = Math.ceil(Math.random()*20);
		topics[i].operator = operator[Math.ceil(Math.random()*2)-1];
		var c = topics[i].operator === '+' ? topics[i].a + topics[i].b : topics[i].a - topics[i].b;
		topics[i].c = c + wucha[Math.ceil(Math.random()*20)-1];
		topics[i].answer = topics[i].c === c ? 'yes' : 'no';
	}
	return topics;
}