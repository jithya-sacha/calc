function insertNum(num)
{
    document.form.inputbox.value = document.form.inputbox.value+num;
}
 function finalValue()
{
   var exp = document.form.inputbox.value;
   document.form.inputbox.value= eval(exp);
}
 function clearScreen()
{
    document.form.inputbox.value = " ";
}
// we have three functions insertNum, finalValue and clearScreen
export {insertNum, finalValue, clearScreen}; // export the functions