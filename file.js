let input = document.querySelector('input[type="email"]'),
    btn = document.querySelector('input[type="submit"]');

btn.onclick = function () {
    if (!input.checkValidity()) {
        input.parentNode.classList.add('active');
        input.setAttribute('placeholder', '')
    } else { return; }
}
input.onchange = function () {

    if (!input.checkValidity()) {
        input.parentNode.classList.add('active');
    } else {
        input.parentNode.classList.remove('active');
    }
}