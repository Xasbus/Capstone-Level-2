function emailProcess(event) {
    console.log("test");
    event.preventDefault();
    const form = event.target;
    const passwordInput = form[0];
    const value = passwordInput.value;
    console.log("test1", form);
    output(` <br>We received your info.`);
}

function output(message) {
    window.outputTag.innerHTML += message;
}