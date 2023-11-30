// import { gsap } from "gsap";

// const hero= document.querySelector('.hero'),
// heroTitles= hero.querySelectorAll('.hero_row_text> h1'),
// heroSubTitles= hero.querySelectorAll('.hero_row_text> h4'),
// heroSeparators= hero.querySelectorAll('.hero_row_separator'),
// heroMedia= hero.querySelector('.hero.media');

// const initHero= ()=> {
//     gsap.set(heroTitles, {y: '101%'})
//     gsap.set(heroSubTitles, {autoAlpha: 0})

//     gsap.set(heroSeparators, {autoalpha: 0})
// showHero();
// };


// const showHero = () => {
//     gsap.timeline({defaults: {ease: 'expo.out'}});


// .to(heroTitles, 
//     {
//         duration:1.75,
//         y: 0,
//         stagger: 0.055,
// },
// 0
// )

// .to(
//     heroSubTitles, 
//     {
//     duration: 1,
//     autoAlpha: 1,

//     ease: 'expo.in', 
//     stagger: 0.055,
// },
// 0
// ).to(
//     heroSeparators,
//     {
//         duration:1.75,
//         width:'100%',
//         stagger: 0.095,

// },
// 0
// ).fromTo('.cell',{
//     height: '0', scale: 0.5

// },{
//     duration: 1.25, height:'100%', scale: 1, stagger:0.025, ease: 'expo.inOut'
// },
// 0.5
// );

// };



// const splitAnimation= ()=> {
//     splitting({
//         target: heroMedia,
//         by:'cells',
//         Image: true,
//     })

// window.onload = ()=> {
// // splitAnimation();
// initHero();


// };