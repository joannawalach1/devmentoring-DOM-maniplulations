function changeColorOfYear() {
  const myText = document.querySelector("h1");
  const randomColor = '#' + (Math.floor(Math.random() * 16777216).toString(16));
  myText.innerHTML =
    myText.innerHTML.replace('2020', `<span style="color: ${randomColor};">2020</span>`);
}
setInterval(changeColorOfYear, 1000);

function getDate() {
  var presentDate = new Date();
  var newDiv = document.querySelector("h2");
  var addingDate = document.createElement("p");
  var textField = document.createElement("span");
  newDiv.appendChild(addingDate);
  addingDate.appendChild(textField);
  textField.innerHTML = presentDate;
  textField.style.background = "grey";
  textField.style.height = "100px";
}
getDate();

function changeColorOfUL() {
  var myText1 = document.querySelectorAll("li");
  for (let i = 0; i < myText1.length; i++) {
    if (myText1[i].innerText.includes("Done")) {
      myText1[i].className = "done";
    }

    else if (myText1[i].textContent.includes("Ongoing")) {
      myText1[i].className = "ongoing";
    }

    else if (myText1[i].textContent.includes("Coming")) {
      myText1[i].className = "coming";
    }
  }
}
changeColorOfUL();
