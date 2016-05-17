document.getElementById("txtbx1").addEventListener("change",myfun);

function myfun()
{
	var x = document.getElementById("txtbx1");
	var y = document.getElementById("txtbox");
	y.value = x;
}
