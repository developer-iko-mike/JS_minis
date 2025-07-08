let $ = document
let selectBoxCountrys = $.querySelector('#countrys')
let selectBoxCitys = $.querySelector('#citys')
let allCitys = {
    iran: ["tehran", "mashhad", "shiraz", "asfahan"],
    russia: ["moscow", "saint petersburg", "kazan", "kursk"],
    amarica: ["chicago", "los angelas", "los vegos", "new york"],
    iraq: ["baghdad", "karbale", "cazamin", "samera"],
}
selectBoxCountrys.addEventListener('change', function() {

    if (selectBoxCountrys.value === "pleaseSelectCountry") {
        selectBoxCitys.innerHTML = "";
        selectBoxCitys.innerHTML += "<option>Please Select City</option>";
    } else {
        let countrys = selectBoxCountrys.value
        let citysName = allCitys[countrys]

        selectBoxCitys.innerHTML = ""

        citysName.forEach(function(city) {
            selectBoxCitys.innerHTML += "<option>" + city + "</option>"
        })
    }
})