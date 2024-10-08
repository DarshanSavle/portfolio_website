/*========================= toggle icon navbar ========================= */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*========================= scroll sections active link ========================= */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => { // corrected forEach loop
                links.classList.remove('active');
            });
            document.querySelector('header nav a[href*=' + id +']').classList.add('active'); // corrected querySelector statement
        }
    });

    /*========================= sticky navbar ========================= */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*============== remove toggle icon and navbar when click navbar link (scroll ) ========================= */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*========================= scroll reveal ========================= */
ScrollReveal({ 
    /*reset: true,*/
    distance: '80px',
    duration: 2000,
    delay: 200
 });

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .project-item, .portfolio-container , .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*========================= typed js ========================= */
const typed = new Typed('.multiple-text',
    {
    strings: ['Python Developer' , 'Web Developer' , 'Software Developer'] ,
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

/*========================= read more button ========================= 

document.addEventListener('DOMContentLoaded', function() {
    var toggleBtn = document.getElementById('toggle-btn');
    var hiddenContent = document.querySelector('.hidden-content');
    
    toggleBtn.addEventListener('click', function() {
      if (hiddenContent.style.display = 'none') {
        // Show hidden content and change button text to "Read less"
        hiddenContent.style.display = 'block';
        toggleBtn.textContent = 'Read less';
      } else {
        // Hide hidden content and change button text to "Read more"
        hiddenContent.style.display = 'none';
        toggleBtn.textContent = 'Read more';
      }
    });
  });

  */

  document.getElementById('toggle-btn').addEventListener('click', function() {
    var moreText = document.querySelector('.hidden-content');
    var btnText = document.getElementById('toggle-btn');

    if (moreText.style.display === 'none' || moreText.style.display === '') {
        moreText.style.display = 'block';
        btnText.textContent = 'Read Less';
    } else {
        moreText.style.display = 'none';
        btnText.textContent = 'Read More';
    }
});


function openTab(evt, tabName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName('tab-content');
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none';
  }

  tablinks = document.getElementsByClassName('tab-button');
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(' active', '');
  }

  document.getElementById(tabName).style.display = 'block';
  evt.currentTarget.className += ' active';
}

// Show the default tab (Skills) on page load
document.getElementById('skills').style.display = 'block';
document.querySelector('.tab-button').className += ' active';




/*-----------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    var notification = document.getElementById('notification');
    if (notification.innerText.trim() !== "") {
        setTimeout(function() {
            notification.style.display = 'none';
        }, 3000);
    }
});
*/






//--------------------------------------------------------------------------------//




// Disable right-click on the entire page
document.addEventListener('contextmenu', function(e) {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
    }
});
