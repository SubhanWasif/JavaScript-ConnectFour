
const stack1 = new Array(); const stack2 = new Array(); const stack3 = new Array();
const stack4 = new Array(); const stack5 = new Array(); const stack6 = new Array();
const stack7 = new Array();
let count = 1;



let trun = 0

function Connect(stack,btn){
    for (i=0;i<stack.length;i++){
        if (stack[i] === 1){

            btn.querySelector(`#element${i+1}`).classList.add('bg-green-900') 
        }else if(stack[i]===0){
            btn.querySelector(`#element${i+1}`).classList.add('bg-violet-900') 

        }
    }
}



function stackcheck(stack,btn){
    if (stack.length === 6){
        console.log(stack.length)
        btn.setAttribute("disabled",trun)
    }  
}

function changeTurn(){
    if (trun===0){
        trun = 1
    } else if (trun ===1){
        trun=0
    }
}

const game = document.querySelector("#game");

document.addEventListener("DOMContentLoaded",DOM());
function DOM(){
    for (i=0;i<7;i++){
        const stackelements  = document.createElement("button")
        stackelements.setAttribute("id",`btn${i+1}`)
        const classes = ['flex','justify-center','items-center','flex-col','gap-[10px]']
        stackelements.classList.add(...classes)
        for(j=0;j<6;j++){
            const element = document.createElement("element")
            element.setAttribute("id",`element${j+1}`)
            const elementclasses = ['h-[100px]','w-[100px]','bg-white','rounded-[100%]']
            element.classList.add(...elementclasses)
            stackelements.prepend(element)
        }   
        game.appendChild(stackelements)
    }
    
}


const btn1 = document.querySelector("#btn1")
btn1.addEventListener("click",()=>{
    stack1.push(trun);
    
    stackcheck(stack1,btn1);
    Connect(stack1,btn1)
    changeTurn()
    WinCheck();


});
const  btn2 = document.querySelector("#btn2")
btn2.addEventListener("click",()=>{
    stack2.push(trun);
    stackcheck(stack2,btn2);
    Connect(stack2,btn2);
    changeTurn()
    WinCheck();

});
const btn3 = document.querySelector("#btn3")
btn3.addEventListener("click",()=>{
    stack3.push(trun) 
    stackcheck(stack3,btn3)
    Connect(stack3,btn3)
    changeTurn()
WinCheck();

});
const btn4 = document.querySelector("#btn4")
btn4.addEventListener("click",()=>{
    stack4.push(trun);
    ;
    stackcheck(stack4,btn4);
    Connect(stack4,btn4)
changeTurn()
WinCheck();

});
const btn5 = document.querySelector("#btn5")
btn5.addEventListener("click",()=>{
    stack5.push(trun)
    
    stackcheck(stack5,btn5)
    Connect(stack5,btn5)
    changeTurn()
    WinCheck();

});
const btn6 = document.querySelector("#btn6")
btn6.addEventListener("click",()=>{
    stack6.push(trun)
    stackcheck(stack6,btn6)
    Connect(stack6,btn6)
    changeTurn()
    WinCheck();



});

const btn7 = document.querySelector("#btn7")
btn7.addEventListener("click",()=>{
    stack7.push(trun)
    stackcheck(stack7,btn7)
    Connect(stack7,btn7)
    changeTurn()
    WinCheck();

});





function WinCheck(){
    const allstacks = [stack1,stack2,stack3,stack4,stack5,stack5,stack6,stack7]
    for (j=0;j<allstacks.length;j++){
    for(i=0;i<allstacks[j].length;i++){
        if((i!=0)  &&  (allstacks[j][i]===allstacks[j][i-1])){
            console.log(i,allstacks[j][i])
            count+=1     
        }else if((i!=0)&&(allstacks[j][i]!=allstacks[j][i-1])||(i===0)){
            count=1
        }
    if (count===4){
        console.log("The player one wins")
    }
    }
}


    
}


