document.getElementById("submit").addEventListener("click", process);
const isOdd = ((val) => {
  if (val %2 == 0) {
    return false;
  }  else {
    return true;
  }
});

const process = (() => {
  let userInput = document.getElementById('binaryInput').value,
      oneCount = 0;
  if (userInput.length == 7) {
  for (i = 0; i < userInput.length; i++) { 
    console.log(userInput.charAt(i));
    if (userInput.charAt(i) == "1") {
      oneCount++;
    }
  }
  if (isOdd(oneCount)) {
    console.log("Parity bit is 1");
    swal({
      icon: "success",
      text: `1${userInput}` 
    });
    //parity bit is 1
  } else {
    //parity bit is 0
  }
}

});



