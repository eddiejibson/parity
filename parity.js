//quite aware this is a mess
var evenParity = true;
const isBinaryOdd = ((val) => {
  let oneCount = 0;
  for (i = 0; i < val.length; i++) { 
    if (val.charAt(i) != "0" && val.charAt(i) != "1") {
      swal({title: "test"});
      return "invalid";
    } else if (val.charAt(i) == "1") {
      oneCount++;
    }
  }
  if (oneCount %2 == 0) {
    if (evenParity) {
      return false;
    } else {
      return true;
    }
    
  }  else {
    return evenParity;
  }
});
var getOutput = (() => {
let userInput = document.getElementById('binaryInput').value;
console.log((userInput.length + 1) % 4);
if ((userInput.length + 1) % 4 == 0) {
  let res = isBinaryOdd(userInput);
  if (res == "invalid") {
    swal({
      icon: "error",
      title: "Invalid Input",
      text: "Input must only be 0s and 1s..."
    });
  } else if (res) {
    swal({
      icon: "success",
      title: `1 ${userInput}`,
      text: "Parity bit is 1."
    });
  } else {
    swal({
      icon: "success",
      title: `0 ${userInput}`,
      text: "Parity bit is 0."
    });
  }
} else if (userInput.length % 4 == 0) {
  let res = isBinaryOdd(userInput.substr(1, userInput.length));
  if (res == "invalid") {
    swal({
      icon: "error",
      title: "Invalid Input",
      text: "Input must only be 0s and 1s..."
    });
  } else if (res) { //Don't send parity bit
      if (userInput.substr(0, 1) == 1) {
        swal({
          icon: "success",
          title: "Valid!"
        });
      } else {
        swal({
          icon: "error",
          title: "Invalid :("
        });
      }
  } else {
    if (userInput.substr(0, 1) == 0) {
        swal({
          icon: "success",
          title: "Valid!"
        });
      } else {
        swal({
          icon: "error",
          title: "Invalid :("
        });
      }
  }
} else {
  swal({
    icon: "error",
    title: "Invalid Input",
    text: "Invalid length"
  });
}
});
const toggle = () => {
  if (evenParity) {
    evenParity = false;
    document.getElementById("toggle-text").innerHTML = "Toggle Even";
  } else {
    evenParity = true;
    document.getElementById("toggle-text").innerHTML = "Toggle Odd";
  }
}
const showInfo = () => {
  swal({
    title: "Information",
    text: "Parity Bit: a bit which acts as a check on a set of binary values, calculated in such a way that the number of 1s in the set plus the parity bit should always be even (or occasionally, should always be odd). This tool can generate the correct parity bit for a binary pattern and also validate such if inputted."
  });
}
document.getElementById("submit").addEventListener("click", getOutput);
document.getElementById("toggle").addEventListener("click", toggle);
document.getElementById("info").addEventListener("click", showInfo);
document.getElementById("binaryInput").addEventListener("keyup", function(e) { //I should've just put as a form and prevented default but at this point idc
  e.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("submit").click();
  }
});
