
$(function(){
    document.querySelectorAll('.input-number').forEach(inputNumber =>{
        inputNumber.addEventListener('click', toggleDivDisplay);
    });
    function toggleDivDisplay(){
        document.querySelectorAll(".btn-change-data").forEach(value =>{
            if(value.style.display === 'none'){
                value.style.display = 'flex';
            }else{
                value.style.display = 'none';
            }
        })
    }
});
$(function ModalRegister(){

    let register = document.querySelector('#button-register');
    let modalRegister = document.querySelector('.modal-register');
    let authFormback = document.querySelector('#auth-form-register-back');
    register.addEventListener('click', function(){
       modalRegister.style.display ="flex";
    });
    authFormback.addEventListener('click', function() {
        modalRegister.style.display = "none";
    })
});
$(function ModalLogin() {
    let register = document.querySelector('#button-login');
    let modalLogin = document.querySelector('.modal-login');
    let authFormback = document.querySelector('#auth-form-login-back');
    register.addEventListener('click', function(){
       modalLogin.style.display ="flex";
    });
    authFormback.addEventListener('click', function() {
        modalLogin.style.display = "none";
    })
});

decrement = (inputId, inputId2) => {
  let value = parseInt(document.getElementById(inputId).value);
  if (value >= 1) {
    value--;
  }
  document.getElementById(inputId2).value = value;
  document.getElementById(inputId).value = value;
};
increment = (inputId, inputId2) => {
  let value = parseInt(document.getElementById(inputId).value);
  if (value <= 9) {
    value++;
  }
  document.getElementById(inputId2).value = value;
  document.getElementById(inputId).value = value;
}
