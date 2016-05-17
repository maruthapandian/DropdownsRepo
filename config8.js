document.addEventListener('DOMContentLoaded', function() {
    dropdwn1Obj=
	document.getElementById("combo");
	dropdwn1Obj.selectedIndex = 0;	
}, false);

function configdropdown(dropdwn1Obj,dropdwn2Obj)
{
    var selectIndex = dropdwn1Obj.selectedIndex;
    //console.log(selectIndex);
    var selectValue = dropdwn1Obj.options[selectIndex].text;

	var myarray1 = new Array(["opt20","select an option"],["opt21","suboption11"],["opt22","suboption12"]);
	var myarray2 = new Array(["opt30","select an option"],["opt31","suboption21"],["opt32","suboption32"]);
	
	switch(selectIndex)
	{
		case 0:
			//txtbx.value = "";
			break;
		case 1:
			dropdwn2Obj.options.length=0;
			for(i=0;i<myarray1.length;i++)
			{
				addOption(dropdwn2Obj,myarray1[0][i],myarray1[i][1]);
			}
			break;
		case 2:
			dropdwn2Obj.options.length=0;
			for(i=0;i<myarray2.length;i++)
			{
				addOption(dropdwn2Obj,myarray2[0][i],myarray2[i][1]);
			}
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
function subbttn(dropdwn1Obj,dropdwn2Obj,dropdwn3Obj)
{
	var selectIndex1 = dropdwn1Obj.selectedIndex;
		var selectIndex2 = dropdwn2Obj.selectedIndex;
	var selectIndex3 = dropdwn3Obj.selectedIndex;

	var txtbx = document.getElementById("txtbox");
	
	if(selectIndex1==0 || selectIndex2==0 || selectIndex3==0)
	{
		alert("Please select values for all dropdowns");
	}
	else
	{
		var selectValue1 = dropdwn1Obj.options[selectIndex1].text;
		var selectValue2 = dropdwn2Obj.options[selectIndex2].text;	
		var selectValue3 = dropdwn3Obj.options[selectIndex3].text;		
		txtbx.value = selectValue1+selectValue2+selectValue3;
	}
}