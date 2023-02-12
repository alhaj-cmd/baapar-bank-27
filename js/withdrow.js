// console.log('withdrow your account');
document.getElementById('btn-withdrow').addEventListener('click', function(){
    // console.log('Baap er bank withdrow');
    const withdrowField = document.getElementById('withdrow-field');
    // console.log(withdrowField);
    const withdrowValue = withdrowField.value;
    // console.log(withdrowValue);
    // withdrowField.value=withdrowAmount;
    const withdrowAmount =parseFloat(withdrowValue);
    // withdrowField.value=withdrowAmount;

    const withdrowInput = document.getElementById('withdrow-input');
    const withdrowText = withdrowInput.innerText;
    // withdrowInput.innerText= withdrowTextAmount;
    const withdrowTextAmount = parseFloat(withdrowText);
    // console.log(withdrowAmount,withdrowTextAmount);
    const newwithdrowAmount = withdrowAmount + withdrowTextAmount;
    withdrowInput.innerText = newwithdrowAmount;
    withdrowField.value = " ";
})