


document.addEventListener("keypress", (e) => {
  let note = document.querySelector(`.${e.key}`);
  note.classList.toggle("active");
  if (e.key === "a") {
    var audio = new Audio("./sound/clap.mp3");
    audio.play();
  } else if (e.key === "b") {
    var audio = new Audio("./sound/cymbale.mp3");
    audio.play();
  } else if (e.key === "c") {
    var audio = new Audio("./sound/dom.mp3");
    audio.play();
  } else if (e.key === "d") {
    var audio = new Audio("./sound/ride.mp3");
    audio.play();
  } else if (e.key === "e") {
    var audio = new Audio("./sound/tom.mp3");
    audio.play();
  } else if (e.key === "f") {
    var audio = new Audio("./sound/superTom.mp3");
    audio.play();
  }
  setTimeout(function () {
    note.classList.toggle("active");
  }, 200);
});
// clock
function formatAMPM(date) {
  // This is to display 12 hour format like you asked
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return {
    hour: hours,
  };
}
var currentTime = new Date();
function setRealTime() {
  let hoursDeg = 30 * new Date().getHours();
  document.getElementById("clock__hours").style.transform = `rotate(${
    hoursDeg > 360 ? hoursDeg - 360 : hoursDeg
  }deg)`;
  document.getElementById("clock__min").style.transform = `rotate(${
    6 * new Date().getMinutes()
  }deg)`;
  document.getElementById("clock__sec").style.transform = `rotate(${
    6 * new Date().getSeconds()
  }deg)`;
}
window.addEventListener("DOMContentLoaded", () => {
  setRealTime();
});
setInterval(() => {
  setRealTime();
}, 100);
console.log();
function blurFunc() {
  let blurLevel = document.getElementById("blur").value;
  document.getElementById("blurImg").style.filter = `blur(${blurLevel}px)`;
}

function spaceFunc() {
  let blurLevel = document.getElementById("Space").value;
  document.getElementById("blurImg").style.padding = `${blurLevel}px`;
}

function colorFunc() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.getElementById("blurImg").style.backgroundColor = "#" + randomColor;
}
function rotateFunc(event) {
  document.getElementById(
    "img_tag"
  ).style.transform = `rotate3d(1, 1, 1, ${event.clientY}deg)`;
}

function onClickFlexWidth(divname) {
  document.querySelector(`.${divname}`).style.width = "10vh";
  document.getElementsByClassName(
    `${divname}`
  )[0].childNodes[1].style.visibility = "visible";
  document.getElementsByClassName(
    `${divname}`
  )[0].childNodes[5].style.visibility = "visible";
  document.querySelector(`.${divname}`).style.width = "12.5rem";
}
function onClickFlexResetWidth(divname) {
  document.querySelector(`.${divname}`).style.width = "15vh";
  document.getElementsByClassName(
    `${divname}`
  )[0].childNodes[1].style.visibility = "hidden";
  document.getElementsByClassName(
    `${divname}`
  )[0].childNodes[5].style.visibility = "hidden";
}
function text(e) {
  console.log(e.target.value);
}

class Text {
  constructor(numEngines) {
    this.numEngines = numEngines;
    this.EnginesStatus = false;
  }

  startingEngine() {
    console.log("Engine starting");
    this.EnginesStatus = true;
  }

  stopingEngine() {
    console.log("Engine Stopping");
    this.EnginesStatus = false;
  }
}



let resValue = document.querySelector('.counter__res').textContent
function add(){
    resValue = parseInt(resValue) + 1
    document.querySelector('.counter__res').textContent = resValue
}
function removeNumber(){
    if(resValue > 0){
        resValue = parseInt(resValue) - 1 
        document.querySelector('.counter__res').textContent = resValue
    }
}
function reSetValue () {
    resValue = 0
    document.querySelector('.counter__res').textContent = 0
}
let slideText = [
    {
        parg:`
        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
        `
    },
    {
        parg:`
        Lorem Ipsum
        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
        `
    },
    {
        parg:`
        The original target for this event is the Document that has loaded. You can listen for this event on the Window interface to handle it in the capture or bubbling phases. For full details on this event please see the page on the Document: DOMContentLoaded event.
        `
    }
]
let whichOne = 0 
window.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('.slider__text').textContent = slideText[whichOne].parg
});
let getBack = document.querySelector('.slider__prev')
let getGo = document.querySelector('.slider__next')
getBack.addEventListener(('click'),(()=>{
    let indexOF = (whichOne === 0 ? whichOne=(slideText.length - 1) : whichOne=whichOne - 1)
    document.querySelector('.slider__text').textContent = slideText[indexOF].parg
}))

getGo.addEventListener(('click'),(()=>{
    let indexOF =(whichOne === (slideText.length - 1) ? whichOne = 0 : whichOne=whichOne+1)
    document.querySelector('.slider__text').textContent = slideText[indexOF].parg
}))

let menuButton = document.querySelector('.menu-button')
let menu = document.querySelector('.menu-list')
menuButton.addEventListener(('click'),(()=>{
    menu.classList.toggle("menu-show")
}))


const questions = [
  {
    id: 1,
    question:
      " Which of the following keywords is used to define a variable in Javascript?",
    answer: "Both a and b",
    options: ["var", "let", "Both a and b", "none above"],
  },
  {
    id: 2,
    question:
      "Which of the following methods is used to access HTML elements using Javascript?",
    answer: "Both A and B",
    options: [
      "getElementbyId()",
      "getElementsByClassName()",
      "Both A and B",
    ],
  },
  {
    id: 3,
    question:
      "Upon encountering empty statements, what does the Javascript Interpreter do?",
    answer: "Ignores the statements",
    options: [
      "Throws an error",
      "Ignores the statements",
      "Gives a warning",
      "None of the above",
    ],
  },
  {
    id: 4,
    question: "How can a datatype be declared to be a constant type?",
    answer: "const",
    options: ["const", "var", "let", "constant"],
  },
];
const quesD = document.createElement("ul");
quesD.setAttribute("id", "questions");
document.body.append(quesD);

let activeQ = 0;
quesD.style.listStyle = "none";
const renderQs = (activeQ) => {
  questions.forEach((a, index) => {
    const questionItem = document.createElement("li");
    if (activeQ === index) {
      questionItem.style.opacity = "block";
    } else {
      questionItem.style.display = "none";
    }

    questionItem.innerText = a.question;
    quesD.append(questionItem);

    a.options.forEach((e) => {
      const optionItem = document.createElement("div");

      const radio = document.createElement("input");
      radio.setAttribute("type", "radio");
      radio.setAttribute("id", e + a.id);
      radio.setAttribute("question-id", a.id);
      radio.setAttribute("value", e);
      radio.classList.add("option");
      radio.setAttribute("name", a.id + "-question");
      const label = document.createElement("label");
      label.setAttribute("for", e + a.id);
      label.innerHTML = e;
      optionItem.append(radio);
      optionItem.append(label);

      questionItem.append(optionItem);
    });
  });

  const nextBtn = document.querySelector("#next");
  if (!questions[activeQ + 1]) {
    nextBtn.innerText = "submit";
  }

  document.querySelectorAll("input").forEach((input) => {
    input.addEventListener("change", () => {
      const questionId = input.getAttribute("question-id");
      const answer = input.getAttribute("value");
      const nextBtn = document.querySelector("#next");

      const Qindex = questions.findIndex(
        (e) => e.id === Number(questionId)
      );
      console.log(Qindex);
      questions[Qindex].user_answer = answer;
      console.log(questions);
      nextBtn.removeAttribute("disabled");
    });
  });
};

renderQs(activeQ);
const nextBtn = document.createElement("button");
nextBtn.setAttribute("id", "next");
nextBtn.setAttribute("disabled", "");

nextBtn.innerText = "next";
document.body.append(nextBtn);

const handleResults = (questions) => {
  const passed = questions.filter(
    (e) => e.user_answer === e.answer
  ).length;
  const total = questions.length;

  alert(`you got ${passed} out of ${total}`);
};

nextBtn.addEventListener("click", () => {
  if (questions[activeQ + 1]) {
    quesD.innerHTML = "";
    activeQ += 1;
    renderQs(activeQ);
    nextBtn.setAttribute("disabled", "");
  } else {
    handleResults(questions);
  }
});
