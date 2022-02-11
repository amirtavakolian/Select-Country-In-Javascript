// .

const COUNTRIES_INFO_DATA = "https://restcountries.com/v2/name/";


sendRequest(COUNTRIES_INFO_DATA + "iran");



function sendRequest(reqToUrl) {

    const URL = reqToUrl;

    const xhr = new XMLHttpRequest();
    xhr.open("get", URL);
    xhr.send();

    setListner(xhr);
}


function setListner(xhr) {

    xhr.addEventListener("load", function() {
        const countriesResult = JSON.parse(xhr.response);
        const div = document.querySelector(".amir");

        insertCountry(countriesResult, div);

        insertBorders(countriesResult, div);
    });
}





function insertCountry(countriesResult, div) {

    const date = `
        <img src=${countriesResult[0].flag} style='width:330px;height:200px'></img>
        <h1>${countriesResult[0].name}</h1>
        <h2>${countriesResult[0].capital}</h2>
    `
    div.innerHTML = date;
}


function insertBorders(countriesResult, div) {
    let count = "";

    countriesResult[0].borders.forEach((value, index) => {
        count += `<option value="${value}"  >${value}</option>`
    });

    count += `<option value="" selected >Select country</option>`;

    const selectBorder = `
    
    <select name="borders" id="borders">
        
        ${count}
     
    </select>
    
    `
    div.innerHTML += selectBorder;

    borders.addEventListener("change", function(e) {

        sendRequest(COUNTRIES_INFO_DATA + e.target.value);

    })

}