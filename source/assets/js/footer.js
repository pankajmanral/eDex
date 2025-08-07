const submitBtn = document.querySelector('.subscribe')

const email = document.querySelector('.email-input')
const emailRegex = /^[a-zA-Z0-9._]{3,25}[@][a-z]{2,10}[.][a-z]{1,5}$/
const emailErr = document.querySelector('.error')

submitBtn.addEventListener('click', ()=>{
    if(!emailRegex.test(email.value)){
        emailErr.style.display = 'block'
        emailErr.textContent = 'Invalid email'
    }
})