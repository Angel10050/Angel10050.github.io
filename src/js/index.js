'use strict'
/* hamburger menu */
const burgerNav = document.querySelector('.iconContainer');
const ulToActive = document.querySelector('.ulContainer');


burgerNav.addEventListener('click', function(){
    if(ulToActive.classList.contains('isActive')){
        ulToActive.classList.remove('isActive')
    }else{
        ulToActive.classList.add('isActive')
    }
})
/* hamburger menu */


