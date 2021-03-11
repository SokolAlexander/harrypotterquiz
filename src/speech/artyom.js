import Artyom from "artyom.js";


function openMap() {
  const map = document.getElementById("map-base");
  map.classList.add("active");

  const modal = document.getElementById("hiddenModalStart");

  setTimeout(() => {
    modal?.classList?.remove("hidden");
  }, 5000);
}
//initialization of speech recognition starts here
const artyom = new Artyom();
var commands = [
  {
    indexes: ["шалость"],
    action: function () {
      console.log("heard you");
      openMap();
    },
  },
];


export function startContinuousArtyom() {
  artyom.fatality();

  artyom.addCommands(commands);

  setTimeout(function () {
    artyom
      .initialize({
        lang: "ru-RU",
        continuous: false,
        listen: true,
        speed: 1,
        debug: true,
        soundex: true,
      })
      .then(function () {
        console.log("Ready to work !");
      });
  }, 250);
}
