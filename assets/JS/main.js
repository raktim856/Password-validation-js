// Assign html tag to js
const pass_1 = document.querySelector('#pass-1');
const pass_2 = document.querySelector('#pass-2');
const show = document.querySelector('#btn-show');
const button = document.querySelector('#check-button');
const ntfText = document.querySelector('.notify-text');
// Add event listener
pass_1.addEventListener('keyup',password1);
pass_2.addEventListener('keyup',password2);
show.addEventListener('click',showButton);
button.addEventListener('click',checkValidation);

// Function of password1
function password1(){
    if(pass_1.value.length >= 6){
        pass_2.removeAttribute('disabled');
    }
    else{
        pass_2.setAttribute('disabled','');
        pass_2.value = '';
        show.style.display = 'none';
    }
}

// Function of password2
function password2(){
    if(pass_2.value.length >= 6){
        button.removeAttribute('disabled');
    }
    else{
        button.setAttribute('disabled','');
    }
    if(pass_2.value.length >= 1){
        show.style.display = 'block';
    }
    else{
        show.style.display = 'none';
    }
}

// Function of showButton
function showButton(){
    if(pass_1.type == 'password' && pass_2.type == 'password'){
        pass_1.type = 'text';
        pass_2.type = 'text';
        show.textContent = 'HIDE';
    }
    else{
        pass_1.type = 'password';
        pass_2.type = 'password';
        show.textContent = 'SHOW';
    }
}

// Function of checkValidation
function checkValidation(){
    if(pass_1.value != pass_2.value){
        ntfText.classList.remove('nts');
        ntfText.classList = 'nte';
        pass_1.classList.remove('form_bcs');
        pass_1.classList = 'form_bce';
        pass_2.classList.remove('form_bcs');
        pass_2.classList = 'form_bce';
        pass_1.type = 'password';
        pass_2.type = 'password';
        show.textContent = 'SHOW';
        ntfText.textContent = 'Oops! Password not matched';
        button.removeAttribute('disabled','');
    }
    else{
        ntfText.classList.remove('nte');
        ntfText.classList = 'nts';
        pass_1.classList.remove('form_bce');
        pass_1.classList = 'form_bcs';
        pass_2.classList.remove('form_bce');
        pass_2.classList = 'form_bcs';
        pass_1.type = 'password';
        pass_2.type = 'password';
        show.textContent = 'SHOW';
        ntfText.textContent = 'Congress! Password matched';
        button.setAttribute('disabled','');
    }
}