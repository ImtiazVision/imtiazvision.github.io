const input = document.querySelector('input.field-input')
const counter = document.querySelector('span.field-tracker')

const maxLength = input.getAttribute('maxlength')

counter.innerText = maxLength;

input.addEventListener('input', event => {
    const valueLength = event.target.value.length;
    const charLengthLeft = maxLength-valueLength;

    if (charLengthLeft < 0) return

    counter.innerText = charLengthLeft;

})


