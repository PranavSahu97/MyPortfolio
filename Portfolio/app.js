const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
})


// var button = document.getElementById('hamburger');
//     // span = button.getElementsByTagName('span')[0];

// button.onclick =  function() {
//   hamburger.classList.toggle('hamburger-menu-button-close');
// };

// $('#hamburger').on('click', toggleOnClass);

// function toggleOnClass(event) {
//   var toggleElementId = '#' + $(this).data('toggle'),
//   element = $(toggleElementId);

//   element.toggleClass('on');

// }

// // close hamburger menu after click a
// $( '.navlist ul li a' ).on("click", function(){
//   $('hamburger').click();
// });



// document.addEventListener('scroll', () => {
//     var scroll_position = window.scrollY;
//     if (scroll_position > 200) {
//         header.style.backgroundColor = "#272727";
//     }
//     else {
//         header.style.backgroundColor = 'transparent';
//     }
// })
