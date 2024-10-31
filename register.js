document.getElementById('registrationForm').onsubmit = function (event) {
    const firstName = document.getElementById('first-name').value;
    const secondName = document.getElementById('sec-name').value;
    const email = document.getElementById('email').value;
    const nationality = document.getElementById('nationality').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('conf-pas').value;
    const gender = document.getElementById('gender').checked;

    if (firstName == '' || secondName == '' || email == '' || nationality == '' || password == '' || confirmPassword == '' || !gender) {
        alert('Please fill in all required fields.');
        event.preventDefault();
    }
};