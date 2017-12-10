//事件模型
var EventEmitter = require('events').EventEmitter

var life = new EventEmitter()

//设置最大监听数，默认是10个
//监听模块是为每个事件服务的
life.setMaxListeners(11)

//定义一个句柄，才能删除事件
function water(who) {
	console.log('给 ' + who + ' 倒水')
}

//也可以用addEventListener
life.on('please',water)

life.on('please',function(who){
	console.log('给 ' + who + ' 洗衣服')
})

life.on('please',function(who){
	console.log('给 ' + who + ' 做饭')
})
life.on('please',function(who){
	console.log('给 ' + who + ' ...1')
})
life.on('please',function(who){
	console.log('给 ' + who + ' ...2')
})
life.on('please',function(who){
	console.log('给 ' + who + ' ...3')
})
life.on('please',function(who){
	console.log('给 ' + who + ' ...4')
})

life.on('please',function(who){
	console.log('给 ' + who + ' ...5')
})
life.on('please',function(who){
	console.log('给 ' + who + ' ...6')
})
life.on('please',function(who){
	console.log('给 ' + who + ' ...7')
})
life.on('please',function(who){
	console.log('给 ' + who + ' 累死我了。。。')
})

life.on('cry',function(who){
	console.log('给 ' + who + ' 没钱吃饭')
})
life.on('cry',function(who){
	console.log('给 ' + who + ' 哭了')
})

//移除事件
life.removeListener('please',water)

//批量移除事件
//移除所有事件，
//life.removeAllListeners()
//移除特定事件
life.removeAllListeners('please')

var hasConfortListener = life.emit('please','汉子')

var hasLoverListener = life.emit('cry','妹子')

var hasPlayerListener = life.emit('play','妹子')


//事件个数，两种方法
console.log(life.listeners('please').length)
//console.log(EventEmitter.listenerCount(life,'please'))

console.log(hasConfortListener)
console.log(hasLoverListener)
console.log(hasPlayerListener)



