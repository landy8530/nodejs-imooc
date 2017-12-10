var Klass = require("./class")

//Klass.add("landy",["lyx","chris"]);

//可以把学校暴露出去
exports.add = function(klasses) {
	klasses.forEach(function(item,index){
		var _klass = item;
		var teacher = _klass.teacherName;
		var students = _klass.students;
		Klass.add(teacher,students);
	})
}