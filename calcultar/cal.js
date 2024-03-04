const display=document.getElementById("display")
function appendToDisplay(input){
      display.value +=input;
}
function cleardisplay(){
     try{
        display.value= " ";
     }
     catch(error){
        display.value="error"
     }
}
function calculate(){
    display.value =eval(display.value);
}