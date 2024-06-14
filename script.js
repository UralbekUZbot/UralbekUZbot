// Uralbek Tursunov | Script | @UralbekUZbot | v1.0.0 (14.06.2024)
function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}
// Soat
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    
    document.getElementById('soat').innerHTML = h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}