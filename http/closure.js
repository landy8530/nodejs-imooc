// var count = 1000;

// function add() {
// 	count ++;
// }


// add();
// add();


//闭包：函数内部的函数
//从函数外部读取局部变量，将局部变量的作用域延长
function add() {
	var count = 1000;


	function inner() {
		count ++;
		console.log(count);
	}

	return innner;

}

var fAdd = add();

fAdd();
fAdd();

//内存泄漏
fAdd = null;