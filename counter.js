//set initial count
let count = 0;

//select value and btn
const value = document.querySelector('#value')
let btns = document.querySelectorAll('.btn')

//console.log(btns);
btns.forEach(function (btn){
   // console.log(btn)
   btn.addEventListener('click', function(e){
    //console.log(e.currentTarget.classList);
    const styles = e.currentTarget.classList
    if(styles.contains('decrease')){
        count--
    } else if (styles.contains('increase')){
        count ++
    } else{
        count = 0
        value.style.color = "black"
    } if(count > 0){
        value.style.color = "green"
    } if (count < 0 ){
        value.style.color = "red"
    } 
    value.textContent = count; 
   })
})

let firstInput = document.getElementById('first')
let secondInput = document.getElementById('second')


let result = document.getElementById('res')

function inputreset(){
    firstInput.value = ""
    secondInput.value = ""
}
let btn1 = document.querySelectorAll('.btn1')


//console.log(checkNum("5"))
btn1.forEach(function(a){
    //console.log(btn1);
    a.addEventListener('click',function(e){        
        let calc = e.currentTarget.classList;
        let a = parseInt(firstInput.value)
        let b = parseInt(secondInput.value) 
        let c ;            
        let textInvalid = result.textContent = `Please Enter Valid Number`
        
        //console.log(calc)
        if(calc.contains('add')){             
            c = (a + b ); 
            if(isNaN(c)){               
                textInvalid
            } else{               
                result.textContent = `${a} + ${b} = ${c}`; 
            }
           inputreset()
        } else if(calc.contains('sub')){
            c = (a - b) ; 
            if(isNaN(c)){
                textInvalid
            }else{         
                result.textContent = `${a} - ${b} = ${c}`;
            }
            inputreset()
        } else if(calc.contains('mul')){
             c = (a * b)  
             if(isNaN(c)){
                textInvalid
            }else{         
                result.textContent = `${a} x ${b} = ${c}`;
            }
            inputreset()
        } else if(calc.contains('divide')){
            c = (a / b)           
            if(isNaN(c)){
                textInvalid
            }else{
                result.textContent = ` ${a} / ${b} = ${c}`;
            }
            inputreset()
        } 
        
    })
})


