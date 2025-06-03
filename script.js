document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');


    const createErrorElement = (input) => {
        let error = document.createElement('div');
        error.classList.add('error-message');
        input.parentNode.insertBefore(error, input.nextSibling);
        return error;
    };

    const nameError = createErrorElement(nameInput);
    const emailError = createErrorElement(emailInput);
    const messageError = createErrorElement(messageInput);

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const clearErrors = () => {
        nameError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';
    };

    form.addEventListener('submit', function (e) {
        e.preventDefault(); 
        clearErrors();
        let valid = true;


        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required.';
            valid = false;
        }


        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Email is required.';
            valid = false;
        } else if (!validateEmail(emailInput.value.trim())) {
            emailError.textContent = 'Please enter a valid email address.';
            valid = false;
        }


        if (messageInput.value.trim().length < 8) {
            messageError.textContent = 'Message must be at least 8 characters long.';
            valid = false;
        }


        if (valid) {
            alert('Form submitted successfully!');
            form.reset();
        }
    });
});
