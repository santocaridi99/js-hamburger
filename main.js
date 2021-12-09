//apertura
//dichiaro la const button che sta per il carattere speciale a forma di bottone
const button = document.querySelector(".fa-bars");
//dichiaro la cost menu che mi servirà una volta cliccato il button per cambiare il suo display
const menu = document.querySelector(".hamburger-menu");
button.addEventListener('click', function() {
   menu.classList.add('active');
})
//chiusura quando clicco close
//dichiaro classe closeMenu che sta per il link con class close
//ricordando che il menu si dovrà chiudere
const closeMenu = document.querySelector(".close");
closeMenu.addEventListener('click',function(){
    menu.classList.remove('active');
})

