const formEl = document.querySelector(".login-form");


formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;
    console.log(email.value, password.value);

    if (email.value === "" || password.value === "") {
        return alert("ALL FIELDS MUST BE FILLED IN <3")
    }

    const userInformation = { email: email.value, password: password.value }

    console.log(userInformation);
    event.currentTarget.reset();
});

