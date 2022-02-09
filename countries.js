$(document).ready(function() {
    let settings = {
        url: 'https://restcountries.com/v3.1/all',
        method: 'GET',
        dataType: 'JSON',
        success: (res) => {
            let tableContent = '';
            res.forEach(country => {
                let officialName = country.name.official;
                let capital = (country.capital) ? country.capital : 'No capital to display';
                let region = country.region;
                languages = '';
                /* let languages = Object.values(country.languages); */
                /* let languages = Object.values(country.languages);
                let langString = languages */
                /* let langString = (languages.length > 0) ? languages.toString() : 'No language to display'; */
                let population = country.population;
                let flag = country.flags.png;
                tableContent += `<tr>
                                    <td>${officialName}</td>
                                    <td>${capital}</td>
                                    <td>${region}</td>
                                    <td>${languages}</td>
                                    <td>${population}</td>
                                    <td><img src="${flag}"/></td>
                                </tr>`;
            });
            $('#countriesTableBody').html(tableContent);
            console.log(res);
        },
        error: (err) => {
            console.log(err);
        }
    };
    $.ajax(settings);
});