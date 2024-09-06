function display(message) {
  document.write(message);
}

function output(message) {
  window.outputTag.innerHTML = window.outputTag.innerHTML + message
}

function ask(message) {
   const userText = prompt(message);
   const userNumber = Number(userText);
   const isNotNumber = isNaN(userNumber);
        if (isNotNumber) {
          return userText;
        } else {
          return userNumber;
        }
 }