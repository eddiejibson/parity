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
    //parity bit is 1
  } else {
    //parity bit is 0
  }
 }
});
document.getElementById("submit").addEventListener("click", getOutput);




