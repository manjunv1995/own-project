function getTimeAndDate() {
    let onGoing = new Date();
    let timeHours = onGoing.getHours();
    let timeMinuts = onGoing.getMinutes();
    let amOrPm = timeHours <= 12 ? 'am' : 'pm';
    let finalTime = timeHours = (timeHours % 12) || 12;
    let date = onGoing.getDate();
    let month = onGoing.getMonth();
    let year = onGoing.getFullYear();

    document.getElementById("demo").innerHTML = `${finalTime} :: ${timeMinuts}  ${amOrPm} <br/> date ==>> ${date} <br/> month ==> ${month+1} <br/> year ==>> ${year}`;
}

// HI