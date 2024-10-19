function emailProcess(event) {
    event.preventDefault();
    const form = event.target;
    const passwordInput = form[0];
    const value = passwordInput.value;
    output(` <br>We received your info.`);
}

function numberProcess(event) {
    event.preventDefault();
    const phoneForm = event.target;
    const phoneInput = phoneForm[0];
    const phoneValue = phoneInput.value;
    output(` Your phone number is recorded. Please choose a date and time.<br>`)
}

function dateProcess(event) {
    event.preventDefault();
    const dateForm = event.target;
    const dateInput = dateForm[0];
    const dateValue = dateInput.value;
    output(` We have received your appointment. See you there! <br>`)
}

function output(message) {
    window.outputTag.innerHTML += message;
}