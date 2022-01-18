window.onload = function () {
    if ( window.history.replaceState ) {
        window.history.replaceState( null, null, window.location.href );
    }
     let TEXT = localStorage.getItem("TEXT");
    if (TEXT != null && TEXT.length > 0) {
        myFunction(TEXT);
    }

    swapFourthAndFifthParagraphChildren();
    calculate();
    setCookie();
    getCookie();
}
function swapFourthAndFifthParagraphChildren() {
    const four = document.getElementById("four");
    const five = document.getElementById("five");

    const fourClone = four.cloneNode(true);
    four.replaceChildren(...five.children);
    five.replaceChildren(...fourClone.childNodes);
}

function calculate() {
  var a = 1;
  var b = 2;

    var s = 3.14 * a * b;

    var three = document.getElementById("three");
    var paragraph = document.createElement("p");
    var text = document.createTextNode("The area of the oval, where a = 1 and b = 2 is " + s);
    paragraph.appendChild(text);
    three.appendChild(paragraph);
}

var count = function() {
  var string = document.getElementById('input').value;
  var length = string.split(/[^\s]+/).length - 1;
  alert(length)
}

function setCookie(cookieFrm, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cookieFrm + "=" + cvalue + ";" + expires + ";path=/file:///D:/pw/site2/Lab2.html";
}
 
function getCookie(cookieFrm) {
  let name = cookieFrm + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
confirm("cookies" + document.cookie);



function myFunction() {
    const tAlign = document.forms["align"]["tAlign"].value;

    localStorage.setItem('align', tAlign);
    changeBorderColors(tAlign);
}

function myFunction(TEXT) {
    document.getElementById("three").style.textAlign = "left";
    document.getElementById("four").style.textAlign = "left";
    document.getElementById("five").style.textAlign = "left";
    
    for (let elementsByClassNameElement of document.getElementsByClassName("rectangle")) {
        elementsByClassNameElement.style.textAlign = "left";
    }

}
