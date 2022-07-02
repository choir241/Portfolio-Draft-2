let menu = document.querySelector('#menu')
let close = document.querySelector('#close')

menu.addEventListener('click',showMenu)

function showMenu(){
    document.querySelector('.nav').classList.remove('hidden')
    menu.classList.add('hidden')
}

close.addEventListener('click',closeMenu)

function closeMenu(){
    menu.classList.remove('hidden')
    document.querySelector('.nav').classList.add('hidden')
}


// $(function() {
//     $('#menu').on('click', function() {
//       $(this).toggleClass('close');
//       $('#nav').toggleClass('visible');
//     });
//   });