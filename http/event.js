
function clickIt(e) {
	window.alert("Button is clicked!")
}

var button = document.getElementById("button")

button.addEeventListener("click",clickIt);
