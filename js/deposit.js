document.getElementById('btn-deposit').addEventListener('click', function(){
    // console.log('deposite Amount');
    const depositeField = document.getElementById('deposit-field');
    const depositValue = depositeField.value;
    const newdepositValue =parseFloat(depositValue);
    // console.log(depositValue);
    const depositeInput = document.getElementById('deposit-input');
    // console.log(depositeInput)
    const depositTotal = depositeInput.innerText;
    // console.log(depositTotal);
    const newdepositTotal =parseFloat(depositTotal);
    // count deposit amount
    const currentAmount = newdepositValue+newdepositTotal;
    depositeInput.innerText = currentAmount;

    // clear the deposit amount;
    depositeField.value  = " ";

})