const letters = new Set(["bugun havo juda issiq","issiqda koʻchada yurmang","11 dan 15 gacha harorat 45 C°"]);

let text = "";
for (const x of letters) {
  text += x + "<br>";
}

document.getElementById("marquee").innerHTML = text;