let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");
let result = document.getElementById("result");

searchBtn.addEventListener("click", () => {
    let country = countryInp.value.trim(); // Remove extra spaces
    if (!country) {
        result.innerHTML = `<h3>The input field cannot be empty</h3>`;
        return;
    }

    let finalUrl = `https://restcountries.com/v2/name/${country}?fullText=true`;

    fetch(finalUrl)
        .then((res) => res.json())
        .then((data) => {
            if (data.status === 404) {
                result.innerHTML = `<h3>Please enter a valid country</h3>`;
                return;
            }

            let countryData = data[0];
            result.innerHTML = `
                <img src="${countryData.flags.svg}" class="flag-img" alt="Flag of ${countryData.name}" />
                <h2>${countryData.name}</h2>
                <span>Population: ${countryData.population.toLocaleString()}</span><br/>
                <span>Currency: ${countryData.currencies[0].name} (${countryData.currencies[0].symbol})</span><br/>
                <span>Capital: ${countryData.capital}</span>
            `;
        })
        .catch(() => {
            result.innerHTML = `<h3>Something went wrong. Please try again.</h3>`;
        });
});
