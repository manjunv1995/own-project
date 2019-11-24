function getTimeAndDate() {
    let onGoing = new Date();
    let timeMinuts = onGoing.getMinutes();
    let timeHours = onGoing.getHours();
    let date = onGoing.getDate();
    let year = onGoing.getFullYear();

    document.getElementById("demo").innerHTML = `${timeHours} :: ${timeMinuts} <br/> Date ==>> ${date} <br/> year ==>> ${year}`;
}