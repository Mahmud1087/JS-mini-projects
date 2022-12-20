const hour = document.getElementById('hour');
const mins = document.getElementById('mins');
const secs = document.getElementById('secs');

let date = new Date();
let hh = 0;
let mm = 0;
let ss = 0;

  setInterval(() => {
    date = new Date()
    hh = date.getHours() * 30;
    mm = date.getMinutes() * 6;
    ss = date.getSeconds() * 6;
    secs.style.transform = `rotate(${ss}deg)`
    mins.style.transform = `rotate(${mm}deg)`
    hour.style.transform = `rotate(${hh+mm/12}deg)`
},1000)