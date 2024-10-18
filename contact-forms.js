function emailProcess(event) {
    event.preventDefault();
    const form = event.target;
    const passwordInput = form[0];
    const value = passwordInput.value;
    output(` <br>We received your info.`);
}