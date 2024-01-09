//e.Print the country that uses US dollars as currency.var request = new XMLHttpRequest();
var request = new XMLHttpRequest(); 
request.open("GET","https://restcountries.com/v3.1/all");
 request.send();
 request.onload = function(){
    var result = JSON.parse(request.response);
    var countriesWithUSD = result.filter(function (country) {
        if (country.currencies && country.currencies.USD) {
            console.log("Country using US Dollars (USD) as currency: " +country.name.common);
        }
    });
 }