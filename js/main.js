document.querySelector('.arrow-down').addEventListener('click',scrollDown)

function scrollDown(){
   window.scrollTo({ top: 850, behavior: 'smooth' })
}



document.querySelector('#menu').addEventListener('click',showMenu)

function showMenu(){
  document.querySelector('#nav').style.height = '40vh'
  document.querySelector('#menu').style.display = 'none'

}


document.querySelector('#close').addEventListener('click',hideMenu)

function hideMenu(){
  document.querySelector('#nav').style.height = '0'
  document.querySelector('#menu').style.display = 'flex'
}