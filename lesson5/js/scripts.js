const copyrightyear = document.getElementById("copyrightyear");
copyrightyear.textContent = new Date().getFullYear();

//toLocalDateString
const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
};
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);

//hide and show banner
const dayName = new Date().toLocaleString('en-us', {weekday:'long'})

if (dayName == "Monday") {
    document.getElementById("banner").style.display = 'block';
} else {
    document.getElementById("banner").style.display= 'none';
}


//toggle Menu
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

//var element = document.getElementById("topbar");
//var positioninfo = element.getBoundingClientRect();
var ht = document.getElementById("topbar").clientHeight;
console.log(ht);
document.getElementById("navigation").style.top = ht;