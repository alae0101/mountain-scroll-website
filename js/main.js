/*=== MENU ===*/
const showMenu = (toggleId,navId) => {
    const toggle = document.getElementById(toggleId) ,
    nav = document.getElementById(navId) ;
    if (toggle && nav) {
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')
        });
    }
}

showMenu("nav-toggle","nav-menu");
// ==== RELLAX ====
var rellax = new Rellax('.parallax')
// ==== ANIMATION GASP ====
// ==== NAVBAR ====
gsap.from('.nav__logo',{opacity:0,duration:3,delay:.5,y:30,ease:'expo.out'});
gsap.from('.nav__toggle',{opacity:0,duration:3,delay:.7,y:30,ease:'expo.out'});
gsap.from('.nav__item',{opacity:0,duration:3,delay:.7,y:35,ease:'expo.out',stagger:.2});

// TEXT
gsap.from('.home__title',{opacity:0,duration:3,delay:1.3,y:35,ease:'expo.out',stagger:.2});
gsap.from('.home__subtitle',{opacity:0,duration:3,delay:1.1,y:35,ease:'expo.out',stagger:.2});

// Scroll
gsap.from('.home__scroll',{opacity:0,duration:3,delay:1.5,y:35,ease:'expo.out',stagger:.2});

// ===== SCROLL REVEAL SECTION =====
const sr = ScrollReveal({

    duration:2500,
    reset:true
})
// data

sr.reveal('.section__data',{origin:'left',distance:'70px'})
sr.reveal('.section__img',{origin:'left',distance:'90px'})