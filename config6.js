function myfun(selectObj)
{
                var selectIndex = selectObj.selectedIndex;
                //console.log(selectIndex);
                var selectValue = selectObj.options[selectIndex].text;
 /*               var txtbx = document.getElementById("txtbox");
                if(selectIndex == 0)
                {
                txtbx.value = "";
                }
                else
                {
               
                txtbx.value = selectValue;
                }
*/				var myarray1 = new Array(["opt20","select an option"],["opt21","suboption11"],["opt22","suboption12"]);
				//var myarray2 = new Array("select an option","suboption21","suboption22");
				console.log(myarray1.length);
				console.log(selectIndex);
				var combo2Obj = document.createElement("combo2");
				if(combo2Obj)
				{
					if(selectIndex == 1)
					{
						for(var i=0;i< myarray1.length;i++)
						{
							//addOption(combo2,myarray[i][j]);
							//console.log(myarray1[i][1]);
							//addOption(combo2,myarray1[0][i],myarray1[i][1]);
							var optn = document.createElement("option");
							optn.textContent = myarray1[i][1];
							optn.value = myarray1[0][i];
							//combo2.options.add(optn);
							combo2Obj.appendChild(optn);
						}
					}
					//for(vat)
				}
	/*		addOption = function(comboobj,optionval,optiontxt)
			{
				var optn = document.createElement("option");
				optn.text = optionval;
				optn.value = optiontxt;
				comboobj.options.add(optn);
				//document.createElement("combo2").options.add(optn);
			}
	*/
}
