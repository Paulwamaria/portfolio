


  $(document).ready(function() {

        $.fx.speeds.xslow = 100000000;
        $('.headline').fadeIn(5000);

  });
  



const hero=document.querySelector('.hero');
const slider=document.querySelector('.slider');
const logo=document.querySelector('#logo');
const hum=document.querySelector('.humberger');
const headline=document.querySelector('.headline');


const t1 = new TimelineMax();


t1.fromTo(hero,2, {height: "0%"}, {height: "80%", ease: Power2.easeInOut});





