const currencyEl_1 = document.getElementById('currency-one')
const amount_one = document.getElementById('amount-one')

const currencyEl_2 = document.getElementById('currency-two')
const amount_two = document.getElementById('amount-two')

const rateEl = document.getElementById('rate')
const swap = document.getElementById('swap')



const calculate = () => {
    const currency_one = currencyEl_1.value

    const currency_two = currencyEl_2.value

    

    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then(res => res.json())
    .then(data =>{
        const rate = data.rates[currency_two]

        
        rateEl.innerText=`1${currency_one} = ${rate} ${currency_two}`

        amount_two.value = (amount_one.value * rate)
    })

}

 const swapAmount=()=>{
    const temp=currencyEl_1.value
    currencyEl_1.value=currencyEl_2.value
    currencyEl_2.value=temp
    calculate()  
 }
currencyEl_1.addEventListener('change', calculate)
amount_one.addEventListener('input', calculate)
currencyEl_2.addEventListener('change', calculate)
amount_two.addEventListener('input', calculate)
swap.addEventListener('click',swapAmount)



calculate()