const hero=document.querySelector('.hero');
const slider=document.querySelector('.slider');
const logo=document.querySelector('#logo');
const hum=document.querySelector('.humberger');
const headline=document.querySelector('.headline');


const t1 = new TimelineMax();


t1.fromTo(hero,1, {height: "0%"}, {height: "80%", ease: Power2.easeInOut});