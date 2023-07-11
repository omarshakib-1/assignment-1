document.getElementById('submitBtn').addEventListener('click',function(){
    const emailInput=document.getElementById('input-email').value
    const inputPass=document.getElementById('input-pass').value 
     
    
    if(emailInput == 'omarshakib1100@gmail.com' && inputPass == 'shakib4567'){
        window.location.href='bank.html'
    }
    else{
        alert('Please input Valid Email & password')
    }
    
})