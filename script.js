async function currencyConverter() {
    
    const input = document.getElementsByClassName("input_value_input")[0].value;
    const from_currency = document.getElementById("from_curr").value;
    const to_currency = document.getElementById("to_curr").value;

    const apikey = '71ed9842885ae119211f7371';
    const url = `https://api.exchangerate-api.com/v4/latest/${from_currency}`

    const response = await fetch(url)
    const data = await response.json()

    const rate = data.rates[to_currency];

    const convertedAmount = (input * rate).toFixed(4);

    // document.getElementById('result').innerText = `${input} ${from_currency} = ${convertedAmount} ${to_currency}`;


    console.log(input);
    console.log(convertedAmount);

    document.getElementsByClassName("final_convertion")[0].innerHTML = `${convertedAmount}`

}