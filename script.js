// Uralbek Tursunov | Script | @UralbekUZbot | v1.0.0 (14.06.2024)
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    
    document.getElementById('soat').innerHTML = h + ":" + m + ":" + s;
    setTimeout()
}