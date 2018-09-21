let userInput = "0100000"; //test
const isOdd = ((val) => {
  if (val %2 == 0) {
    return false;
  }  else {
    return true;
  }
});

if (userInput.length == 7) {
  for (i = 0; i < userInput.length; i++) { 
    let oneCount = 0;
    console.log(userInput.charAt(i));
    if (userInput.charAt(i) == "1") {
      oneCount++;
    }
  }
  if (isOdd(oneCount)) {
    //parity bit is 1
  } else {
    //parity bit is 0
  }
}


