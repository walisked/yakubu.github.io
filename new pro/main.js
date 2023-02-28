const persentYear = new Date().getFullYear(); // get the current year

let yearString 
for(let year = 2019; year <= persentYear; year++){
    yearString += year + '';
}

const yearCountElement = document.getElementById('year');
yearCountElement.textContent = `${persentYear}`;