//Get Elements
const form = document.getElementById('signup');
const password = document.getElementById('p_word');
const confirmPassword = document.getElementById('con_pass');
const inputs = form.querySelectorAll('input');
const errorMessage = document.querySelector('.error-message');

//Submit event handler
form.addEventListener('submit', e => {
    //Validate Passwords
    if(password.value !== confirmPassword.value) {
        e.preventDefault();

        password.classList.add('invalid');
        confirmPassword.classList.add('invalid');

        errorMessage.textContent = '* Passwords do not match';
    }

    //Validate inputs
    inputs.forEach(input => {
        if(input.value === '') {
            e.preventDefault();
            input.classList.add('invalid');

            errorMessage.textContent = "Please fill out all fields";
        }
    })
});
