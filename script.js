// MOBILE MENU OPEN AND CLOSE

const menuButton = document.querySelector('.navigation__menu--small')
const sidebarPopup = document.querySelector('.sidebar__popup')
const mobileNav = document.querySelector('.mobile__nav')

menuButton.addEventListener('click', ()=>{
    sidebarPopup.style.display = 'initial'
    setTimeout(()=> {
        mobileNav.classList.add('open')
    }, 1)
})

sidebarPopup.addEventListener('click', (e)=> {
    if(e.target.closest('.mobile__nav')) return
    
    mobileNav.classList.remove('open')
    setTimeout(()=> {
        sidebarPopup.style.display = 'none'
    }, 300)
})

// LANGAUGE TOGGLE LARGE SCREENS

const languageToggle = document.querySelector('.navigation__lang')
const languageSubmenu = document.querySelector('.nav__langSub')

languageToggle.addEventListener('click', ()=> {
    setTimeout(()=> {
        languageSubmenu.classList.toggle('active')
    }, 1)
})

document.body.addEventListener('click', (e)=> {
    if(e.target.closest('.navigation__lang') || e.target.matches('.nav__langSub')) return
    setTimeout(()=> {
        languageSubmenu.classList.remove('active')
    }, 1)
})

// LANGUAGE TOGGLE MOBILE SCREENS

const languageToggleMobile = document.querySelector('.mobile__nav__lang')
const languageSubmenuMobile = document.querySelector('.mobile__nav__langSub')

languageToggleMobile.addEventListener('click', ()=> {
    setTimeout(()=> {
        languageSubmenuMobile.classList.toggle('active')
    }, 1)
})

document.body.addEventListener('click', (e)=> {
    if(e.target.closest('.mobile__nav__lang') || e.target.matches('.mobile__nav__langSub')) return
    setTimeout(()=> {
        languageSubmenuMobile.classList.remove('active')
    }, 1)
})

// NAVIGATION INVESTMENT TOGGLE

const navInvestmentToggle = document.querySelector('.navigation__toggle') 
const navInvestmentSubmenu = document.querySelector('.nav__productSubmenu')

navInvestmentToggle.addEventListener('click', ()=> {
    setTimeout(()=> {
        navInvestmentSubmenu.classList.toggle('active')
    }, 1)
})

document.body.addEventListener('click', (e)=> {
    if(e.target.closest('.navigation__toggle') || e.target.matches('.nav__productSubmenu')) return
    setTimeout(()=> {
        navInvestmentSubmenu.classList.remove('active')
    }, 1)
})
