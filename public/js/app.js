AOS.init({
    offset: 200, 
    duration: 3000,
    easing: 'ease',
    once: true,
});

// Animation écriture
const txtAnim = document.querySelector('.txt-animation');
let typewriter = new Typewriter(txtAnim, {
    loop: false,
    deleteSpeed: 20
});

typewriter.pauseFor(1800)
        .changeDelay(20)
        .typeString('Je suis Dominique PIETON')
        .pauseFor(300)
        .typeString('<strong>, Développeur Full - Stack </strong> !')
        .pauseFor(1000)
        .deleteChars(15)
        .typeString('<span style="color: #27ae60;"> CSS</span> !')
        .pauseFor(1000)
        .deleteChars(5)
        .typeString('<span style="color: #ff6910;"> JAVASCRIPT</span> !')
        .pauseFor(1000)
        .deleteChars(12)
        .typeString('<span style="color: #EA39ff;"> PHP/SYMFONY</span> !')
        .start();

/**** retour vers le haut ******/

document.addEventListener('DOMContentLoaded', function() {
    window.onscroll = function(ev) {
      document.getElementById("cRetour").className = (window.pageYOffset > 100) ? "cVisible" : "cInvisible";
    };
});