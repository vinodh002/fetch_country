let searchBtn = document.getElementById("search-btn");

let countryInp = document.getElementById("country-inp");

searchBtn.addEventListener("click", () => {
    let country = countryInp.value;;
    let finalUrl = `https://restcountries.com/v2/name/${country}?fullText=true
    `
    console.log(finalUrl);

    fetch(finalUrl).then((res) => res.json()).then((data) => {
        result.innerHTML = `
        <img src="${data[0].flags.svg}" class="flag-img"/>
        <h2>${data[0].name}</h2>
        <span>Population : ${data[0].population}</span> <br/>
        <span>Currency : ${data[0].currencies[Object.keys(data[0].currencies)].name}</span> <br/>
        <span>Languages : ${Object.values(data[0].languages[0].name).toString().split(",").join("")}</span>  <br/>
        <span>Captial : ${data[0].capital}</span>
        `
    }).catch(() => {
        if (country.length == 0) {
            result.innerHTML = `<h3>The input field cannot be empty</h3>`
        }
        else {
            result.innerHTML = `<h3>Please enter a valid country</h3>`
        }
    })

})