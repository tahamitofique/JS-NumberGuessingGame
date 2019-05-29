const UIgame=document.querySelector('#game'),
      UImin=document.querySelector('.min-num'),
      UImax=document.querySelector('.max-num'),
      UIguessInput=document.querySelector('#guess-input'),
      UIguessBtn=document.querySelector('#guess-btn'),
      UImsg=document.querySelector('.message');

let min=1,
    max=10,
    winNo=Math.floor(Math.random()*(max-min)+min),
    msg;

UImin.textContent=min;
UImax.textContent=max;

UIguessBtn.addEventListener('click',check);
function check(){
    const val=parseInt(UIguessInput.value);
    
    if(isNaN(val) || val<min || val>max){
        setMsg(`Please Enter number between ${min} and ${max}`,'red');
    }
    else{
    if(val===winNo){
        setMsg(`${val} is correct, YOU WIN!!`,'green');
    }
    else{
        setMsg(`${val} is incorrect`,'red');
    }}
    
}
function setMsg(msg,color){
    UImsg.textContent=msg;
    UImsg.style.color=color;
    UIguessInput.style.borderColor=color;
    UIguessInput.value="";
}
