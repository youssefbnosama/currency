let url = `https://api.currencyfreaks.com/v2.0/rates/latest?apikey=92b208b612c44c2989ab05802290ae1b`
let usd = document.getElementById(`usd`)
let egp = document.getElementById(`egp`)
let span = document.getElementById(`span`)
fetch(url).then((result)=>{
    return result.json()
}).then((result)=>{
    return result.rates
}).then((result)=>{
    span.innerHTML = (+result[`EGP`]).toFixed(2)
})
usd.oninput = function(){
    fetch(url).then((result)=>{
        return result.json()
    }).then((result)=>{
        return result.rates
    }).then((result)=>{
        egp.value = (+result[`EGP`] * usd.value).toFixed(2)
    })
}
egp.oninput = function(){
    fetch(url).then((result)=>{
        return result.json()
    }).then((result)=>{
        return result.rates
    }).then((result)=>{
        usd.value = (egp.value /  +result[`EGP`]).toFixed(2)
    })
}