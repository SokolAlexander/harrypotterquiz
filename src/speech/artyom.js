import Artyom from "artyom.js";

//initialization of speech recognition starts here
const artyom = new Artyom();
var commands = [
  {
    indexes: ["up to no good"],
    action: function () {
      console.log('heard you')
    },
  },
  {
    indexes: ["mischief managed"],
    action: function () {
      console.log("heard you");
    },
  },
];

artyom.addCommands(commands);

export function startContinuousArtyom() {
  artyom.fatality();

  setTimeout(function () {
    artyom
      .initialize({
        lang: "en-GB",
        continuous: true,
        listen: true,
        speed: 1,
      })
      .then(function () {
        console.log("Ready to work !");
        openMap();
      });
  }, 250);
}

// startContinuousArtyom();


function openMap() {
  const map = document.getElementById('map-base');
  map.classList.add('active');

  const modal = document.getElementById('hiddenModalStart');

  setTimeout(() => {
    console.log('------');
    modal?.classList?.remove('hidden');
  }, 5000);
}