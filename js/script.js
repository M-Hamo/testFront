//moved div
var x = document.getElementById('btn-move');
//login and register button
var login = document.getElementById('login');
var reg = document.getElementById('register');
//forms
var login_form = document.getElementById('login-form-1');
var reg_form = document.getElementById('register-form-1');

//Set the animation 

reg.onclick = () => {
    login_form.style.left = "-400px";
    x.style.left = "110px";
    reg_form.style.left = "10px";
}
login.onclick = () => {
    reg_form.style.left = "400px";
    x.style.left = "0px";
    login_form.style.left = "10px";
}