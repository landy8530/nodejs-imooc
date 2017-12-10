var http = require('http')

http
	.createServer(function(req,res){
		res.writeHead(200,{'Content-Type':'text/plain'})
		res.write('Hello NodeJs')
		res.end()
	})
	.listen(9876)

	//性能测试（apache）：ab -n1000 -c10 http://127.0.0.1:9876/