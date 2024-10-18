// add money to the account 

// add event handler 

// get money to be added to the account balance


document.getElementById('btn-add-money')
    .addEventListener('click' , function(event){
    event.preventDefault();
    // get money to be added to the account 
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput)

    //get the pin number provided  

    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(pinNumberInput);

    // step - 3 Verify pin number
    if(pinNumberInput === '1234'){
        console.log('adding money to your account')

        // step 4 - get the current balance
        const balance = document.getElementById('account-balance').innerText;
        console.log(balance)

        // step 5 - add addMoneyInput with the balance
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = balanceNumber + addMoneyNumber;

        // step 4 - update the balance in the UI/DOM
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('wrong pin could not add the money')
    }

})