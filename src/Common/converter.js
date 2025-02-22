const { default: axios } = require("axios");

module.exports(getValueInSelectedCurrency)

async function getValueInSelectedCurrency(selectedCurrency, storedAmount, baseCurrency){
    //uncomment to test api
    // axios.get("https://v6.exchangerate-api.com/v6/YOUR-API-KEY/latest/" + baseCurrency)//https://www.exchangerate-api.com/docs/standard-requests, this is currently the best api found
    //     .then(response =>{
    //         let conversionRates = response.conversion_rates
    //         return storedAmount * conversionRates.selectedCurrency
    //     }) 
}