// console.log('hello');
// step-1 add click event handler with button 

document.getElementById('btn-submit').addEventListener('click',function (){
    // console.log('This day is off!!');\
    const emailField = document.getElementById('user-email');
    const emailValue = emailField.value;
    // step-3 get password
    const passwordField = document.getElementById('user-password');
    const passwordValue = passwordField.value;
    // console.log(emailValue, passwordValue);
    // step-4 verify emailField && passwordField and check wheather valid or not
    if(emailValue ==='alhazsarkar55@gmail.com' && passwordValue ==='alhaj' ){
        // another ways to file change
        // document.getElementById("btn-submit").onclick = function () {
        //     location.href = "http://127.0.0.1:5500/bank.html";
        // };
        window.location.href = 'bank.html';
    }
    else{
       alert('user is not valid.. Please !! correct your email & password')
    }
})