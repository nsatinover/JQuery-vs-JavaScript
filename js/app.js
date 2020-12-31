/* javascript */
const box = document.querySelector('.box');
// box.style.display = 'none';

/* jQuery as function */
// jQuery('.box').hide();

/* jQuery shorthand */
// $('.box').hide();
// $('.box').show();

// box.addEventListener('click', function(){
//     alert('you clicked me!');
// });

$('.box').click(function(){
    alert('you clicked on jQuery!');
});



