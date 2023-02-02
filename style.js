$(document).ready(function(){
    $('#mobilemenu').click(function(){
        $('ul').toggleClass('show')
    });
});
// toggle mobilemenu

function ToggleMenu(){
    const menuToggle = document.querySelector('.mobile-toggle');
    menuToggle.classList.toggle('active')
}