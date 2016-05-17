function myfun(selectObj)
{
                var selectIndex = selectObj.selectedIndex;
                //console.log(selectIndex);
                var selectValue = selectObj.options[selectIndex].text;
                var txtbx = document.getElementById("txtbox");
                if(selectIndex == 0)
                {
                txtbx.value = "";
                }
                else
                {
               
                txtbx.value = selectValue;
                }
               
 
}