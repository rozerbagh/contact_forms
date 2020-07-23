export function validateContactForm() {
    const name = document.getElementById('contact-name');
    const email = document.getElementById('contact-email');
    const phoneNo = document.getElementById('contact-phone-no');
    const submit = document.getElementById('submit');

    const input_fields = {
        name: /^[\w\s]+[a-zA-Z]([0-9a-zA-Z]){2,20}$/,
        email: /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/,
        telephone: /^([0-9]){11}$/,
    }

    // const validate = (field, regex) => {
    //     regex.test(field.value) ? field.className = 'valid' : field.className = 'invalid';
    // }

    // let inputs = document.querySelectorAll('input');
    // inputs.forEach(item => item.addEventListener(
    //     'click', e => {
    //         validate(e.target, input_fields[e.target.attributes.name.value])
    //     }
    // ));

    function isNameValid(field, regex) {
        field = name;
        regex = input_fields.name
        if (regex.test(field.value)) {
            field.className = 'valid';
        } else {
            field.className = 'invalid';
        }
    }
    function isEmailValid(field, regex) {
        field = email;
        regex = input_fields.email
        if (regex.test(field.value)) {
            field.className = 'valid';
        } else {
            field.className = 'invalid';
        }
    }
    function isPhoneNoValid(field, regex) {
        field = phoneNo;
        regex = input_fields.telephone
        if (regex.test(field.value)) {
            field.className = 'valid';
        } else {
            field.className = 'invalid';
        }
    }

    name.addEventListener('blur', isNameValid);
    email.addEventListener('blur', isEmailValid);
    phoneNo.addEventListener('blur', isPhoneNoValid);


    submit.addEventListener('click', function (event) {
        event.preventDefault();
        console.log(isNameValid());
        console.log(isEmailValid());
        console.log(isPhoneNoValid());


    })
}
