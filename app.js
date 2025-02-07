const checkInputs = document.querySelectorAll(".fa-check")
const restartBtn = document.querySelector(".fa-repeat")
const formContainer = document.querySelector("form")

const formAnimation = () => {

    checkInputs.forEach((checkInput) => {
        checkInput.addEventListener('click', (e) => {
            const inputValue = document.querySelector("input").value;
            const parentEl = checkInput.parentElement;
            const nextSib = parentEl.nextElementSibling
            if(inputValue === 'text' && checkInput ||
                inputValue === 'email' && checkInput ||
                inputValue === 'password' && checkInput
            ) {
                parentEl.classList.add('innactive')
                nextSib.classList.add('active')
            }
        });
    });
}

const checkInput = (inputUser) => {
    if (inputUser.length) {

    }
}

restartBtn.addEventListener('click', () => {
    formContainer.lastElementChild.classList.add('innactive');
    formContainer.firstElementChild.classList.add('active');
})

formAnimation();
