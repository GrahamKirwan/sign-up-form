const form = document.querySelector('#form');
const button = document.querySelector('#formButton');
const inputEmail = document.querySelector('.inputEmail');
const inputArray = document.querySelectorAll('.input');
const spansArray = document.querySelectorAll('.emptyFieldSpan');
const emailErrorMsg = document.querySelector('.emptyFieldSpan2');



button.addEventListener('click', function(){
    let email = inputEmail.value;
    for(let i=0; i<inputArray.length; i++) {
        if(inputArray[i].value == '') {
            spansArray[i].classList.remove('hidden');
            inputArray[i].classList.add('emptyField');
        } else {
            spansArray[i].classList.add('hidden');
            inputArray[i].classList.remove('emptyField');
        }
    }
    if(!(inputEmail.value == '') && !(email.includes('@'))) {
        inputEmail.value = email;
        inputEmail.style.color = 'hsl(0, 100%, 74%)';
        emailErrorMsg.classList.remove('hidden');
        inputEmail.classList.add('emptyField');
    } else if (!(inputEmail.value == '') && email.includes('@')) {
        emailErrorMsg.classList.add('hidden');
        emailErrorMsg.classList.remove('emptyField');
        inputEmail.style.color = 'hsl(249, 10%, 26%)';


        if(!(inputArray[0].value == '') && !(inputArray[1].value == '') && !(inputArray[2].value == '') && !(inputArray[3].value == '')){
            console.log('success');
            formSuccess();    
        }

    }
})

function formSuccess() {
    for(let i=0; i<inputArray.length; i++) {
        inputArray[i].value = '';
    }
    button.innerHTML = 'Success <i class="far fa-check-circle"></i>';
    form.submit();

    setTimeout(function(){ button.innerHTML = 'claim your free trial'; }, 2000);

}