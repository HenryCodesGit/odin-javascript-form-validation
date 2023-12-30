/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import "../css/index.css";


//TODO: Abstraction of validation objects into modules
//TODO: CSS style changes when validating

let email = {
    element: document.querySelector('input[name="email"]'),
    validation: () => {
        let val = email.element.value;
        let regex = /[a-z0-9!#$%&'*+\=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i
        let validation = Boolean(val.match(regex));
        console.log(`E-mail validation: ${validation}`)
        return validation;
    },
};
let country = {
    element: document.querySelector('select[name="country"]'),
    validation: () => {
        let validation = (country.element.value !== '');
        console.log(`Country validation: ${validation}`);
        return validation;
    },
};
let postalCode = {
    element:  document.querySelector('[name="zip"]'),
    validation: () => {
        let val = postalCode.element.value;
        let regex = /^(\d{5}(-\d{4})?|[a-zA-Z]\d[a-zA-Z][-\s]?\d[a-zA-Z]\d|[a-zA-Z]{3}\d[a-zA-Z]{2})$/
        let validation = Boolean(val.match(regex));
        console.log(`Postal Code Validation: ${validation}`);
        return validation;
    },
};
let password = {
    element: document.querySelector('[name="password"]'),
    validation: () => {
        let validation = password.element.value.length > 8;
        console.log(`Password Validation: ${validation}`);
        return validation;
    },
};
let passwordConfirm = {
    element: document.querySelector('[name="password-confirm"]'),
    validation: () => {
        let val = passwordConfirm.element.value;
        let validation = (val == password.element.value && val.length > 8);
        console.log(`Password Confirm Validation: ${validation}`);
        return validation;
    },
};
let form = {
    element: document.querySelector('form'),
    validation: () => {
        let validation = email.validation()
            && country.validation()
            && postalCode.validation()
            && password.validation()
            && passwordConfirm.validation();
        console.log(`Form validation: ${validation}`);
        return validation;
    }
};

//Validation on load
window.addEventListener('load', () => {
})

//Validation on things changing on the form
email.element.addEventListener('input', () => {email.validation()});
country.element.addEventListener('input', () => {country.validation()});
postalCode.element.addEventListener('input', () => {postalCode.validation()});
password.element.addEventListener('input', () => {password.validation()});
passwordConfirm.element.addEventListener('input', () => {passwordConfirm.validation()});

//Validation on submit
form.element.onsubmit = (e) => {
    e.preventDefault();
    form.validation();
}