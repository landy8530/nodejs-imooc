var http = require('http')

var querystring = require('querystring')

var postdata = querystring.stringify({
	'content':'很期待scott下一期的教程',
	'cid':8837
})

var options = {
	hostname:'www.imooc.com',
	port:80,
	path:'/course/docomment',
	method:'POST',
	headers:{
		'Accept':'application/json, text/javascript, */*; q=0.01',
		'Accept-Encoding':'gzip, deflate, br',
		'Accept-Language':'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7,zh-TW;q=0.6',
		'Connection':'keep-alive',
		'Content-Length':postdata.length,
		'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
		'Cookie':'imooc_uuid=0e030834-12ef-474a-b669-589f0b349824; imooc_isnew_ct=1511873833; loginstate=1; apsid=EzODZiNmE0NzAyZDY5MWEzNjI5Njk1MDM3Yjc5MzUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANjIwNjMzNQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxOTQxNTUxMzY1QHFxLmNvbQAAAAAAAAAAAAAAAAAAAGE3MzU3MTM3YzUyMzliZGM3NTk5MDU0NTg3NjlkZjEyLPwfWiz8H1o%3DYW; UM_distinctid=1603bc8a47444d-0fb846b5502fe3-7b113d-100200-1603bc8a4758c5; CNZZDATA1261110065=1187102891-1512828602-https%253A%252F%252Fwww.imooc.com%252F%7C1512828602; PHPSESSID=6846if0bg0lli59tuo8jgc7cu2; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1512045584,1512398010,1512744764,1512870445; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1512893710; imooc_isnew=2; cvde=5a2c922b329b9-180',
		'Host':'www.imooc.com',
		'Origin':'https://www.imooc.com',
		'Referer':'https://www.imooc.com/video/8837',
		'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36',
		'X-Requested-With':'XMLHttpRequest'
	}
}


var req = http.request(options,function(res){
	console.log('status:' + res.statusCode)
	console.log('headers:' + JSON.stringify(res.headers))

	res.on('data',function(chunk){
		console.log(Buffer.isBuffer(chunk))
		console.log(typeof chunk)
	})

	res.on('end',function(){
		console.log('评论完毕')
	})

	

	

})

req.on('error',function(e){
	console.log('Error:' + e.message)
})

req.write(postdata)

req.end()