


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


function closeOpen() {
    var navb = document.getElementById("navbox");

    if (navb.style.width == "300px") {
        navb.style.width = "0px";
     
        navs.style.opacity = "0";
        btn.style.top = "10px";
        d1.classList.remove("d1");
        d2.classList.remove("d2");
        d3.classList.remove("d3");
    } else {
        navb.style.width = "300px";
   
        navs.style.opacity = "1";
        btn.style.top = "18px";
        d1.classList.add("d1");
        d2.classList.add("d2");
        d3.classList.add("d3");
    }

}



