// Toggle navbar icon

let menuIcon = document.querySelector('#menu-icon') ;
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Scroll sections active link

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec =>  {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset+height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // Sticky Navbar
    
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    

    // Remove toggle icon and navbar when click navbar link

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Scroll Reveal

ScrollReveal({ 
    reset: false,
    distance: '40px',
    duration: 2000,
    delay: 100
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .project-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// Typed js

const typed = new Typed('.multiple-text',{
    strings : ['Frontend Developer','Backend Developer','Photographer','Blogger','Chess Player'],
    typeSpeed : 75,
    backSpeed : 55,
    backDelay : 150,
    loop : true
});


// Swiper JS

var swiper = new Swiper('.slide-content', {
    slidesPerView: 3,   
    spaceBetween: 30,
    slidesPerGroup: 1,
    centerSlide: true,
    fade: true,
    loop: false,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0 : {
            slidesPerView: 1,
        },
        540 : {
            slidesPerView: 2,
        },
        950 : {
            slidesPerView: 3,
        },
    }

});

function sendEmail() {
    Email.send({
        Host: 'smtp.gmail.com',
        Username: 'kushagraranjangpj@gmail.com',
        Password: '',
        To: 'kushagraranjangpj@gmail.com',
        From: document.getElementById('email').value,   
        Subject: document.getElementById('emailSub').value,
        Body: "Name : " + document.getElementById('name').value +
            "<br> Email: " + document.getElementById('email').value +
            "<br> Phone: " + document.getElementById('phone').value +
            "<br> Message: " + document.getElementById('message').value

    }).then(
        message => alert("Message Sent!")
    );
}

var icon = document.getElementById('dark-icon');

icon.onclick = function() {
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')) {
        icon.src = "../images/sun-solid-24.png";
    } else {
        icon.src = "../images/moon-solid-24.png";
        icon.currentSrc = "../images/moon-solid-24.png";
    }
}
