const isOdd = ((val) => {
  if (val %2 == 0) {
    return false;
  }  else {
    return true;
  }
});

const isBinaryOdd = ((val) => {
  let oneCount = 0;
  for (i = 0; i < val.length; i++) { 
    if (val.charAt(i) == "1") {
      oneCount++;
    }
  }
  if (oneCount %2 == 0) {
    return false;
  }  else {
    return true;
  }
});
  
var getOutput = (() => {
let userInput = document.getElementById('binaryInput').value;
if (userInput.length == 7) {
  if (isBinaryOdd(userInput)) {
    console.log("Parity bit is 1");
    swal({
      icon: "success",
      title: `1${userInput}` 
    });
  } else {
    console.log("Parity bit is 0");
    swal({
      icon: "success",
      title: `0${userInput}` 
    });
  }
} else if (userInput.length == 8) {
  if (isBinaryOdd(userInput.substr(1, userInput.length))) { //Don't send parity bit
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
}
});
document.getElementById("submit").addEventListener("click", getOutput);




