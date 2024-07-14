let Base;
let Height;
let Area; 

document.getElementById("sub").onclick = function(){
  Base = document.getElementById("bt"). value;
  Base = Number(Base); 
  Height = document.getElementById("ht"). value; 
  Height = Number(Height); 
  Area = 0.5 * Height * Base; 
  document.getElementById("result").textContent = Area + "CM Sq"; 
}