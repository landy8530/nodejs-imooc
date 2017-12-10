//作用域
var golbalVariable = "this is golbal Variable"

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