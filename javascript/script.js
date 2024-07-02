// Wait for the entire page to load
window.addEventListener('load', function() {
    // Hide the preloader
    document.getElementById('preloader').style.display = 'none';
    // Show the content
    document.getElementById('content').style.display = 'block';
});


const tl = gsap.timeline()
const nav_elems_top = document.querySelectorAll('.nav-elem-anim')
const background_illustrations = document.querySelectorAll('.illustrate')
const main_content = document.querySelectorAll('.text-anim-main')
const social_icons_left_sticky = document.querySelectorAll('.social-icon')


// Page 1 animation
window.addEventListener("load", function() {
    tl.from(nav_elems_top,{
        opacity:0,
        y:-120,
        stagger:0.15
    })
    tl.from(background_illustrations,{
        opacity:0,
        scale:0,
        stagger:0.20,
        scrub:true,
        rotate:"10deg"
    })
    tl.from(main_content,{
        opacity:0,
        scale:0,
        stagger:0.20,
        y:"20px",
        scrub:true,
        rotate:"10deg"
    })
    tl.from(social_icons_left_sticky,{
        opacity:0,
        scale:0,
        stagger:0.20,
        x:"-120px",
        scrub:true,
        rotate:"10deg"
    })
});


// page 2 animation
const tl2 = gsap.timeline()
const card_section_1 = document.querySelector('#sec1-page-2')
const card_in_section_1 = document.querySelectorAll('.card-1-anim')
const card_section_2 = document.querySelector('#sec2-page-2')
const card_section_3 = document.querySelector('#sec3-page-2')
const card_section_4 = document.querySelector('#sec4-page-2')
const page2 = document.getElementById('page-2')

tl2.from(card_section_1,{
    x:"800px",
    opacity:0,
    scrollTrigger:{
        trigger:page2,
        start:"-3% 50%",
        end:"19% 50%",
        scrub:2
    }
})
tl2.from(card_section_2,{
    x:"-800px",
    opacity:0,
    scrollTrigger:{
        trigger:page2,
        start:"26% 50%",
        end:"40% 50%",
        scrub:2
    }
})
tl2.from(card_section_3,{
    x:"800px",
    opacity:0,
    scrollTrigger:{
        trigger:page2,
        start:"49% 50%",
        end:"61% 50%",
        scrub:2
    }
})
tl2.from(card_section_4,{
    x:"-800px",
    opacity:0,
    scrollTrigger:{
        trigger:page2,
        start:"72% 50%",
        end:"83% 50%",
        scrub:2
    }
})
