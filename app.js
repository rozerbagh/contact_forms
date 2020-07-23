export function menuStarRatings() {
    let stars = document.getElementsByClassName('star');
    let starEvents = ['click', 'mouseover', 'mouseout'];
    for (let i = 0; i < stars.length; i++) {
        stars[i].starValue = (i + 1);
        starEvents.forEach((element) => {
            stars[i].addEventListener(element, showRating);
        })
    }
    function showRating(e) {
        let type = e.type;
        let starValue = this.starValue;
        console.log(type, starValue);
        stars.forEach((ele, index) => {
            if (type == 'mouseover') {
                if (index < starValue)
                    ele.style.color = '$yellow';
            }

        })

    }
};

const details = document.getElementById('menu-details');
const menuCardsDetails = document.getElementsByClassName('menu-items');
export let menuDetails = function () {
    Array.from(menuCardsDetails).forEach(function (elements) {
        elements.style.margin = '0.5em';
    });
};

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


export function mapBox() {
    var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

    mapboxgl.accessToken = 'pk.eyJ1Ijoicm96ZXJiYWdoIiwiYSI6ImNrY3kxNG9qYjA1ZDUzMWw3anpuZjB5MHkifQ.vKatxynEU4-IxDSGpGGvaA';
    var map = new mapboxgl.Map({
        container: 'YOUR_CONTAINER_ELEMENT_ID',
        style: 'mapbox://styles/mapbox/streets-v11'
    });
}