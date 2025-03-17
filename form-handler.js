document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#form');
    form.addEventListener('submit', handleFormSubmit);

    const clearButton = document.querySelector('#clear');
    clearButton.addEventListener('click', () => {
        form.reset();
    });
    });


const handleFormSubmit = (event) => {
    event.preventDefault();

    console.log('-----------------Form submitted!-----------------');
    const nameInput = document.querySelector('#name');
    const email = document.querySelector('#email');
    const date = document.querySelector('#date');
    const pronouns = document.querySelector('input[name="pronouns"]:checked');

    let errors = [];
    if (!nameInput.value) {
        errors.push('Name is required');
    }
    if (!email.value) {
        errors.push('Email is required');
    }
    if (!date.value) {
        errors.push('Date is required');
    }
    if (!pronouns) {
        errors.push('Pronouns is required');
    }
    if (errors.length > 0) {
        alert('Form submission failed. Please correct the following errors: \n' + errors.join('\n'));
    } else {
        console.log('Name: ', nameInput.value);
        console.log('Email: ', email.value);
        console.log('Date: ', date.value);
        if (pronouns) {
            console.log('Preferred Pronouns: ', pronouns.value);
        } else {
            console.log('Preferred Pronouns: Not selected');
        }

        alert('Thanks for submitting the form!');
    }
}
