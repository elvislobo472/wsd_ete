document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const passwordField = document.getElementById('password');
    const confirmPasswordField = document.getElementById('confirmPassword');
    const dobField = document.getElementById('dob');
    const submitBtn = document.getElementById('submitBtn');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    const dobError = document.getElementById('dobError');

    const isValidName = (name) => /^[A-Za-z\s]{3,}$/.test(name);
    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isValidPassword = (password) => /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    const isValidDob = (dob) => {
        const today = new Date();
        const birthDate = new Date(dob);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age >= 18;
    };

    const validateField = (field, validator, errorField) => {
        const isValid = validator(field.value.trim());
        field.classList.toggle('border-red-500', !isValid);
        field.classList.toggle('border-green-500', isValid);
        errorField.classList.toggle('hidden', isValid);
        return isValid;
    };

    const validateForm = () => {
        const isNameValid = validateField(nameField, isValidName, nameError);
        const isEmailValid = validateField(emailField, isValidEmail, emailError);
        const isPasswordValid = validateField(passwordField, isValidPassword, passwordError);
        const isConfirmPasswordValid = validateField(confirmPasswordField, 
            (confirmPassword) => confirmPassword === passwordField.value, confirmPasswordError);
        const isDobValid = validateField(dobField, isValidDob, dobError);

        const isFormValid = isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid && isDobValid;
        submitBtn.disabled = !isFormValid;
        return isFormValid;
    };

    form.addEventListener('input', validateForm);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateForm()) {
            window.location.href = 'about.html'; 
        } else {
            alert('Please fix the errors in the form.');
        }
    });
});
