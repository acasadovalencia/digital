'use strict'

const headerMenu = document.querySelector('.header__menu')
const headerNav = document.querySelector('.header__nav')

headerMenu.addEventListener('click' , () => {
    headerNav.classList.toggle('isActive')
})