/*=============== SHOW HIDDEN - PASSWORD ===============*/
const showHiddenPass = (inputPass, inputIcon) => {
    const input = document.getElementById(inputPass);
    const iconEye = document.getElementById(inputIcon);

    iconEye.addEventListener('click', () => {

        const values = {
            password: { type: 'text', class: 'ri-eye-off-line' },
            text: { type: 'password', class: 'ri-eye-line' }
        }

        input.type = values[input.type].type;
        iconEye.className = `${values[input.type].class} login__eye`;

    })
}

showHiddenPass('input-pass', 'input-icon');