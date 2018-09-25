var evenParity = true;
const isBinaryOdd = ((val) => {
  let oneCount = 0;
  for (i = 0; i < val.length; i++) { 
    if (val.charAt(i) != "0" && val.charAt(i) != "1") {
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
if (userInput.length == 7) {
  if (isBinaryOdd(userInput)) {
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
} else if (userInput.length == 8) {
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
    text: "Input must either be a 7 or 8 bit binary pattern."
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
document.getElementById("submit").addEventListener("click", getOutput);
document.getElementById("toggle").addEventListener("click", toggle);
