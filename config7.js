function configdropdown(dropdw1Obj,dropdwn2Obj)
{
    var selectIndex = dropdw1Obj.selectedIndex;
    //console.log(selectIndex);
    var selectValue = dropdw1Obj.options[selectIndex].text;
	
	var txtbx = document.getElementById("txtbox");
	
	var myarray1 = new Array(["opt20","select an option"],["opt21","suboption11"],["opt22","suboption12"]);
	
	switch(selectIndex)
	{
		case 0:
			txtbx.value = "";
			break;
		case 1:
			dropdwn2Obj.options.length=0;
			for(i=0;i<myarray1.length;i++)
			{
				addOption(dropdwn2Obj,myarray1[0][i],myarray1[i][1]);
			}
			break;
		case 2:
			txtbx.value = "";
			break;
	}
}
function addOption(dropdwnObj,optnValue, optnText)
{
	var opt = document.createElement('option');
	opt.value = optnValue;
	opt.text = optnText;
	if(optnText == "select an option")
	{
		opt.selected="selected";
	}
	dropdwnObj.options.add(opt);
}