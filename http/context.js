//上下文
//在JS中，this通常是指向当前函数的拥有者，通常把拥有者叫做执行上下文。
//this关键字是在函数运行时生成的内部对象，只能在函数内部使用。
//对于函数上下文的执行对象要依据运行环境而定
// var pet = {
// 	words:'.....',
// 	speak: function() {
// 		console.log(this.words) //pet中的words
// 		console.log(this === pet)
// 	}
// }

// pet.speak()


// function pet(words) {
// 	this.words = words; //指向顶层的global变量
// 	console.log(this.words)
// 	console.log(this === global)
// }

// pet("sssss")

function pet(words) {
	this.words = words; //指向顶层的global变量
	this.speak = function() {
		console.log(this.words)
		console.log(this)
	}
}

var cat = new pet("mao")
cat.speak()
