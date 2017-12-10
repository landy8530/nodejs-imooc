var pet = {
	words:'.....',
	speak:function(say) {
		console.log(say + ' ' + this.words)
	}
}

// pet.speak('speak')

var dog = {
	words: 'Wang'
}
//call改变了执行上下文，把pet.speak指向了dog
pet.speak.call(dog,'Speak')

