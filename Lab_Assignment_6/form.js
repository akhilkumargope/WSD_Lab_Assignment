document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const submitBtn = document.getElementById('submitBtn');

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const dobInput = document.getElementById('dob');
    const genderInput = document.getElementById('gender');
    const phoneInput = document.getElementById('phone');
    const purposeInput = document.getElementById('purpose');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    const dobError = document.getElementById('dobError');
    const genderError = document.getElementById('genderError');
    const phoneError = document.getElementById('phoneError');
    const purposeError = document.getElementById('purposeError');

    // Utility functions for validation
    function validateName() {
        const value = nameInput.value.trim();
        if (/^[A-Za-z\s]{3,}$/.test(value)) {
            nameInput.classList.remove('invalid');
            nameInput.classList.add('valid');
            nameError.style.display = 'none';
            return true;
        } else {
            nameInput.classList.remove('valid');
            nameInput.classList.add('invalid');
            nameError.style.display = 'block';
            return false;
        }
    }

    function validateEmail() {
        const value = emailInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailPattern.test(value)) {
            emailInput.classList.remove('invalid');
            emailInput.classList.add('valid');
            emailError.style.display = 'none';
            return true;
        } else {
            emailInput.classList.remove('valid');
            emailInput.classList.add('invalid');
            emailError.style.display = 'block';
            return false;
        }
    }

    function validatePassword() {
        const value = passwordInput.value;
        if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value)) {
            passwordInput.classList.remove('invalid');
            passwordInput.classList.add('valid');
            passwordError.style.display = 'none';
            return true;
        } else {
            passwordInput.classList.remove('valid');
            passwordInput.classList.add('invalid');
            passwordError.style.display = 'block';
            return false;
        }
    }

    function validateConfirmPassword() {
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        if (password === confirmPassword && password !== "") {
            confirmPasswordInput.classList.remove('invalid');
            confirmPasswordInput.classList.add('valid');
            confirmPasswordError.style.display = 'none';
            return true;
        } else {
            confirmPasswordInput.classList.remove('valid');
            confirmPasswordInput.classList.add('invalid');
            confirmPasswordError.style.display = 'block';
            return false;
        }
    }

    function validateDob() {
        const dobValue = new Date(dobInput.value);
        const today = new Date();
        const age = today.getFullYear() - dobValue.getFullYear();
        const month = today.getMonth() - dobValue.getMonth();
        if (month < 0 || (month === 0 && today.getDate() < dobValue.getDate())) {
            age--;
        }

        if (age >= 18) {
            dobInput.classList.remove('invalid');
            dobInput.classList.add('valid');
            dobError.style.display = 'none';
            return true;
        } else {
            dobInput.classList.remove('valid');
            dobInput.classList.add('invalid');
            dobError.style.display = 'block';
            return false;
        }
    }

    function validateGender() {
        if (genderInput.value) {
            genderInput.classList.remove('invalid');
            genderInput.classList.add('valid');
            genderError.style.display = 'none';
            return true;
        } else {
            genderInput.classList.remove('valid');
            genderInput.classList.add('invalid');
            genderError.style.display = 'block';
            return false;
        }
    }

    function validatePhone() {
        const value = phoneInput.value.trim();
        if (/^\d{10}$/.test(value)) {
            phoneInput.classList.remove('invalid');
            phoneInput.classList.add('valid');
            phoneError.style.display = 'none';
            return true;
        } else {
            phoneInput.classList.remove('valid');
            phoneInput.classList.add('invalid');
            phoneError.style.display = 'block';
            return false;
        }
    }

    function validatePurpose() {
        if (purposeInput.value) {
            purposeInput.classList.remove('invalid');
            purposeInput.classList.add('valid');
            purposeError.style.display = 'none';
            return true;
        } else {
            purposeInput.classList.remove('valid');
            purposeInput.classList.add('invalid');
            purposeError.style.display = 'block';
            return false;
        }
    }

    // Attach event listeners for real-time validation
    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    passwordInput.addEventListener('input', validatePassword);
    confirmPasswordInput.addEventListener('input', validateConfirmPassword);
    dobInput.addEventListener('input', validateDob);
    genderInput.addEventListener('change', validateGender);
    phoneInput.addEventListener('input', validatePhone);
    purposeInput.addEventListener('change', validatePurpose);

    // Validate the form on submit
    form.addEventListener('submit', function (e) {
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        const isConfirmPasswordValid = validateConfirmPassword();
        const isDobValid = validateDob();
        const isGenderValid = validateGender();
        const isPhoneValid = validatePhone();
        const isPurposeValid = validatePurpose();

        if (!(isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid && isDobValid && isGenderValid && isPhoneValid && isPurposeValid)) {
            e.preventDefault(); // Prevent form submission if any field is invalid
        }
    });

    // Enable submit button only if all fields are valid
    form.addEventListener('input', () => {
        const isFormValid = validateName() && validateEmail() && validatePassword() && validateConfirmPassword() && validateDob() && validateGender() && validatePhone() && validatePurpose();
        submitBtn.disabled = !isFormValid;
    });
});
