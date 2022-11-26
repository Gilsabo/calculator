const allClear = document.querySelector('[data-all-clear');
const numbers = document.querySelectorAll('[data-number]');
const previousDisplay= document.querySelector('[data-previous-number-display]');
const currentDisplay = document.querySelector('[data-current-number-display]');
const clear = document.querySelector('[data-clear]');
const decimal=document.querySelector('[data-decimal]')
const equals = document.querySelector('[data-equal]');
const op = document.querySelectorAll('[data-operator]');


let currentNumber='';
let previousNumber='';
let operator ='';


allClear.addEventListener('click', ()=>{
    currentNumber='';
    previousNumber='';
    operator=''
    currentDisplay.innerText = '';
    previousDisplay.innerText ='';
});


clear.addEventListener('click', ()=>{
   currentDisplay.innerText = currentDisplay.innerText.slice(0,-1);
   currentNumber=currentDisplay.innerText
   
});


numbers.forEach(item => {
    item.addEventListener('click', (e) => { 
    if(currentNumber.length>10){
        return 
     }
    
    currentNumber +=  e.target.textContent;
    currentDisplay.innerText = currentNumber;

    
    })
  });

  decimal.addEventListener('click', (e)=>{
    
    if(currentNumber.includes('.')){
        return
    }
    
    currentNumber +=  e.target.textContent
    currentDisplay.innerText+=e.target.textContent
  });
  

  op.forEach(item => {
    item.addEventListener('click', (e)=>{
    operate();
    operator =e.target.textContent;
    previousNumber = currentNumber ;
    previousDisplay.innerText = previousNumber + ' ' +operator;
    currentNumber='';
    currentDisplay.innerText = currentNumber;
    
  })
});

function operate(){
    
    if(operator==='+'){
        const result = Number(currentNumber) + Number(previousNumber);
        previousNumber='';
        currentNumber=result;
        previousDisplay.innerText =previousNumber;
        currentDisplay.innerText = result;
    }else if(operator==='-'){
        const result = Number(previousNumber) -Number(currentNumber);
        previousNumber='';
        operator='';
        currentNumber=result;
        previousDisplay.innerText =previousNumber;
        currentDisplay.innerText = result;
        }else if(operator==='x'){
        const result = Number(previousNumber) * Number(currentNumber);
        previousNumber='';
        operator='';
        currentNumber=result;
        previousDisplay.innerText =previousNumber;
        currentDisplay.innerText = result;
    
        }else if(operator==='/'){
        const result = Number(previousNumber) / Number(currentNumber);
        previousNumber='';
        operator='';
        currentNumber=result;
        previousDisplay.innerText =previousNumber;
        currentDisplay.innerText = result;
    
        }else if(operator==='%'){
        const result = Number(previousNumber) % Number(currentNumber);
        previousNumber='';
        operator='';
        currentNumber=result;
        previousDisplay.innerText =previousNumber;
        currentDisplay.innerText = result;
        }

}



equals.addEventListener('click', operate);
