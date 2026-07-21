
let button = document.querySelectorAll("button");
 let calculation = '';

document.addEventListener("keydown", function(event){

    if((event.key >= '0' && event.key <= '9')||(event.key === '+'|| event.key === '-'|| event.key === '/'|| event.key === '*'||event.key === '.'|| event.key === '%')){
        updatecalculation(event.key);
    }
    else if(event.key === 'Enter'){
       equalto();
    }
    
    else if(event.key === 'Backspace'|| event.key === ''){
      deletelastdigit();
     
    }
    
});
function updatecalculation(symbol){
  
   calculation += symbol;
   
   document.querySelector("input").value = calculation;
   return calculation;
}
function equalto(){
   
   let expression = calculation.replace(
        /(\d+)√(\d+)/g,
        "$1*Math.sqrt($2)"
    );

    expression = expression.replace("%", "/100");

    let evaluation = eval(expression);

    document.querySelector("input").value = evaluation;
    calculation = evaluation.toString();
}

function allclear(){
  document.querySelector("input").value ='';
  calculation = '';
}

function deletelastdigit(){
  calculation = calculation.slice(0, -1);
  document.querySelector("input").value = calculation;
}
