

let increment=document.querySelector(".increment");
let decrement=document.querySelector(".decrement");
let counter_value=document.querySelector(".counter_value");

let counter = 0;




increment.addEventListener("click", ()=>{
   
    counter++;
    counter_value.innerHTML=counter;
    if (counter>0){
        document.getElementById("cv").style.color = "green";
    }
    
    else if(counter==0){
        document.getElementById("cv").style.color = "black";
    }


});

decrement.addEventListener("click", ()=>{
  
    counter--;
    counter_value.innerHTML=counter;

    if (counter<0){
        document.getElementById("cv").style.color = "red";
    }

    else if(counter==0){
        document.getElementById("cv").style.color = "black";
    }



});

