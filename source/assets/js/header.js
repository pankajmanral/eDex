const openBtn = document.querySelector('.open')
const sidebar = document.querySelector('.nav-list')

openBtn.addEventListener('click', () => {
    openBtn.classList.toggle('cross')
    if(openBtn.classList.contains('cross')){
        sidebar.style.transform = 'translateX(0%)'
        document.querySelector('body').style.overflow = 'hidden'
    }else{
        sidebar.style.transform = 'translateX(-100%)'
        document.querySelector('body').style.overflow = 'auto'
    }
})
