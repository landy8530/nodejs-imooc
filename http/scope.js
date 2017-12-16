//作用域
//任何未用var修饰的变量都是全局作用域
//全局作用域在局部作用域中可访问
var golbalVariable = "this is golbal Variable"

//每个函数的调用，都有一个作用域链存在
//以下例子含有三个作用域
function globalFunction() {
	var localVariable = "this is local Variable"

	console.log("visit golbal/local Variable")
	console.log(golbalVariable)
	console.log(localVariable)

	function localFunction() {
		var innerLocalVariable = "this is inner local Variable"
		console.log("visit golbal/local/innerLocal Variable")
		console.log(golbalVariable)
		console.log(localVariable)
		console.log(innerLocalVariable)
	}

	localFunction()
}


globalFunction()