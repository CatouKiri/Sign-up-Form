const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const phoneNumber = document.querySelector('#phone-number');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const firstNameError = document.querySelector('#first-name-error');
const lastNameError = document.querySelector('#last-name-error');
const emailError = document.querySelector('#email-error');
const phoneNumberError = document.querySelector('#phone-number-error');
const passwordError = document.querySelector('#password-error');
const confirmPasswordError = document.querySelector('#confirm-password-error');

firstName.addEventListener("input", function (event) {
    if (firstName.value === '') {
        firstNameError.textContent = '*Please enter in your first name.';
    } else {
        firstNameError.textContent = '';
    }
});

lastName.addEventListener("input", function (event) {
    if (lastName.value === '') {
        lastNameError.textContent = '*Please enter in your last name.';
    } else {
        lastNameError.textContent = '';
    }
});


email.addEventListener("input", function (event) {
    if (email.value === '') {
        emailError.textContent = '*Please enter in your email address. ex(johndoe@email.com)';
    }
    else if (email.validity.typeMismatch) {
        emailError.textContent = '*Please enter in a valid email. ex(johndoe@email.com)';
    } else {
        emailError.textContent = '';
    }
});

phoneNumber.addEventListener("input", function (event) {
    if (phoneNumber.validity.patternMismatch) {
        phoneNumberError.textContent = '*Please enter in a 11 digit phone number that starts with 09';
    } else {
        phoneNumber.textContent = '';
    }
});

password.addEventListener("input", function (event) {


      if (password.value === '') {
        passwordError.textContent = '*Please enter a password.';
      }
      else if (password.validity.patternMismatch){
        const currentValue = password.value;
        const regExpCap = /[A-Z]/g;
        const regExpDig = /[0-9]/g;
        let result = '';
        if (!regExpCap.test(currentValue)){
          passwordError.textContent = '*Missing at least 1 capital letter.';
        }
        else if (!regExpDig.test(currentValue)){
          passwordError.textContent = '*Missing at least 1 number. ';
        }
        else if (currentValue.length < 9){
          passwordError.textContent = '*Password must be at least 8 characters. ';
        }
        else {
          passwordError.textContent = '';
        }
      }
      else {
        passwordError.textContent = '';
      }
      // if (regExpCap.test(currentValue)){
      //   result += '';
      // } else {
      //   result += `Missing at least 1 capital letter. `;
      //   result += '\n';
      // }

      // if (regExpDig.test(currentValue)){
      //   result += '';
      // } else {
      //   result += 'Missing at least 1 number. ';
      //   result += '\n';
      // }

      // if (currentValue.length < 9){
      //   result += 'Password must be at least 8 characters. '
      //   result += '\n';
      // } else {
      //   result += '';
      // }

    //   passwordError.textContent = result;

    // } else {
    //   passwordError.textContent = '';
    // }
  });

  confirmPassword.addEventListener("input", function (event) {
    if (confirmPassword.value !== password.value) {
      confirmPasswordError.textContent = 'Passwords do not match';
    } else {
      confirmPasswordError.textContent = '';
    }
  });
