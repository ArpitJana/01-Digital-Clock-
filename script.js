let timePart = document.querySelector("#clock #time");
let sessionPart = document.querySelector("#clock #session");
let datePart = document.querySelector('#date');


setInterval(() => {
    const today = new Date();
    let hh = today.getHours();
    let mm = today.getMinutes();
    let ss = today.getSeconds();
    let day = today.getDay();
    let month = today.getMonth();
    let year = today.getFullYear();
    let date = today.getDate();
    let session = "AM";
    let allDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    day = allDays[day];
    month = allMonths[month];
    if (hh > 12) {
        hh = hh - 12;
        session = "PM"
    }
    hh = (hh === 0) ? hh = 12 : hh;
    hh = (hh < 10) ? `0${hh}` : hh;
    mm = (mm < 10) ? `0${mm}` : mm;
    ss = (ss < 10) ? `0${ss}` : ss;


    timePart.innerText = `${hh} : ${mm} : ${ss}`;
    datePart.innerText = `${day}, ${month} ${date}, ${year}`;
    sessionPart.innerText = `${session}`;
}, 1000);



