var student = require("./student");
var teacher = require("./teacher");

//teacher.add("scott");


function add(teacherName,students) {
	teacher.add(teacherName);
	students.forEach(function(item,index){
		student.add(item);
	})
}

//把班级暴露出去
exports.add = add;
//module.exports = add;