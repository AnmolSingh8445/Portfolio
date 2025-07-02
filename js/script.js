// Typed.js: Animated roles in hero section
var typed = new Typed(".input", {
  strings: ["Frontend Developer", "Backend Developer", "Web Developer"],
  typeSpeed: 55,
  backSpeed: 35, 
  backDelay: 1200,
  startDelay: 300,
  loop: true,
  fadeOut: true, 
  fadeOutClass: 'typed-fade-out',
  fadeOutDelay: 300,
  smartBackspace: true,
  showCursor: true,
  cursorChar: '|',
  autoInsertCss: true
});

// Add blinking style for Typed.js cursor
const style = document.createElement('style');
style.innerHTML = `
.typed-cursor {
  font-size: 1.2em;
  opacity: 1;
  animation: blink 0.7s infinite;
  color: #00c6ff;
}
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
`;
document.head.appendChild(style);

// Skills section: Animate circular progress bars
let htmlProgress = document.querySelector(".html-css"),
  htmlValue = document.querySelector(".html-progress");
let htmlStartValue = 0,
  htmlEndValue = 90,
  htmlspeed = 30;
let progresshtml = setInterval(() => {
  htmlStartValue++;
  htmlValue.textContent = `${htmlStartValue}%`;
  htmlProgress.style.background = `conic-gradient(#fca61f ${htmlStartValue * 3.6}deg, #ededed 0deg)`;
  if (htmlStartValue == htmlEndValue) clearInterval(progresshtml);
}, htmlspeed);

let javascriptProgress = document.querySelector(".javascript"),
  javascriptValue = document.querySelector(".javascript-progress");
let javascriptStartValue = 0,
  javascriptEndValue = 75,
  jsspeed = 30;
let progressjs = setInterval(() => {
  javascriptStartValue++;
  javascriptValue.textContent = `${javascriptStartValue}%`;
  javascriptProgress.style.background = `conic-gradient(#FF0000 ${javascriptStartValue * 3.6}deg, #ededed 0deg)`;
  if (javascriptStartValue == javascriptEndValue) clearInterval(progressjs);
}, jsspeed);

let phpProgress = document.querySelector(".php"),
  phpValue = document.querySelector(".php-progress");
let phpStartValue = 0,
  phpEndValue = 50,
  phpspeed = 30;
let progressphp = setInterval(() => {
  phpStartValue++;
  phpValue.textContent = `${phpStartValue}%`;
  phpProgress.style.background = `conic-gradient(#20c997 ${phpStartValue * 3.6}deg, #ededed 0deg)`;
  if (phpStartValue == phpEndValue) clearInterval(progressphp);
}, phpspeed);

let reactProgress = document.querySelector(".reactjs"),
  reactValue = document.querySelector(".reactjs-progress");
let reactStartValue = 0,
  reactEndValue = 30,
  rjsspeed = 30;
let progressreact = setInterval(() => {
  reactStartValue++;
  reactValue.textContent = `${reactStartValue}%`;
  reactProgress.style.background = `conic-gradient(#007ced ${reactStartValue * 3.6}deg, #ededed 0deg)`;
  if (reactStartValue == reactEndValue) clearInterval(progressreact);
}, rjsspeed);

// Portfolio filter buttons
$(document).ready(function () {
  $("#portfolio-filter .filter-btn").on("click", function () {
    var filterValue = $(this).attr("data-filter");
    $("#portfolio-filter .filter-btn").removeClass("active");
    $(this).addClass("active");
    if (filterValue === "all") {
      $(".portfolio-card").show(400);
    } else {
      $(".portfolio-card").each(function () {
        if (
          $(this).hasClass(filterValue) ||
          $(this).find('.portfolio-badge').filter(function(){
            return $(this).text().toLowerCase().replace(/\s/g,'') === filterValue;
          }).length > 0
        ) {
          $(this).show(400);
        } else {
          $(this).hide(400);
        }
      });
    }
  });
  $("#portfolio-filter .filter-btn[data-filter='all']").addClass("active");
});

// Back to top button functionality
let mybutton = document.getElementById("btn-back-to-top");
window.onscroll = function () { scrollFunction(); };
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// Mobile nav toggle
var togglebtn=document.querySelector(".togglebtn");
var nav=document.querySelector(".navlinks");
togglebtn.addEventListener("click", function(){
    this.classList.toggle("click");
    nav.classList.toggle("open");
});

// Contact form: Google Sheet submission
const scriptURL = 'https://script.google.com/macros/s/AKfycbzpBDtCvMcgGbpn0FEPqJanBp7RyvSmhAwsd6a5NiIT_2o1Q1Xk55sBnH94iTQMqLwv/exec';
const form = document.getElementById('submit-to-google-sheet');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const submitButton = document.getElementById('submitButton');
  submitButton.textContent = 'Submitting...';
  submitButton.disabled = true;
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      alert('Your form was submitted successfully!');
      form.reset();
      submitButton.textContent = 'Submit';
      submitButton.disabled = false;
    })
    .catch((error) => {
      alert('There was an error submitting the form. Please try again.');
      submitButton.textContent = 'Submit';
      submitButton.disabled = false;
    });
});

// Mobile nav close on link click
(function() {
  const toggleBtn = document.querySelector('.togglebtn');
  const navLinks = document.querySelector('.navlinks');
  if (!toggleBtn || !navLinks) return;
  toggleBtn.onclick = null;
  document.removeEventListener('click', window._navToggleDocListener, true);
  toggleBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleBtn.classList.toggle('click');
    navLinks.classList.toggle('open');
  });
  window._navToggleDocListener = function(e) {
    if (!navLinks.contains(e.target) && !toggleBtn.contains(e.target)) {
      navLinks.classList.remove('open');
      toggleBtn.classList.remove('click');
    }
  };
  document.addEventListener('click', window._navToggleDocListener, true);
  navLinks.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
      navLinks.classList.remove('open');
      toggleBtn.classList.remove('click');
    });
  });
})();

// Service section: Read More modal popup
$(document).ready(function () {
  if ($('.service-modal').length === 0) {
    $('body').append(`
      <div class="service-modal" style="display:none;">
        <div class="service-modal-backdrop"></div>
        <div class="service-modal-content">
          <span class="service-modal-close">&times;</span>
          <div class="service-modal-body"></div>
        </div>
      </div>
    `);
  }
  const serviceDetails = {
    'Web Design': {
      title: 'Web Design',
      content: `<p>Web design focuses on creating engaging, responsive, and accessible digital user experiences. I use modern design principles, color theory, and UX/UI best practices to deliver visually appealing and user-friendly websites.</p>
      <ul style='text-align:left; margin: 12px 0 0 0; color:#bbb; font-size:1rem;'>
        <li><b>Tools:</b> Figma, Adobe XD, Photoshop</li>
        <li><b>Specialties:</b> Landing pages, Portfolio sites, Branding</li>
        <li><b>Approach:</b> Mobile-first, accessibility, pixel-perfect layouts</li>
        <li><b>Recent Work:</b> Designed 2+ modern websites for startups and personal brands</li>
      </ul>`
    },
    'Web Development': {
      title: 'Web Development',
      content: `<p>Web development involves building, coding, and maintaining functional, dynamic online platforms. I specialize in HTML, CSS, JavaScript, and frameworks to create robust, scalable, and high-performance web applications.</p>
      <ul style='text-align:left; margin: 12px 0 0 0; color:#bbb; font-size:1rem;'></ul>
        <li><b>Languages:</b> HTML5, CSS3, JavaScript (ES6+), Node.js, React</li>
        <li><b>Frameworks:</b> React, Express, Bootstrap, Tailwind</li>
        <li><b>Practices:</b> API integration, SPA, performance optimization</li>
        <li><b>Recent Work:</b> Built GlobeStay hotel booking website</li>
      </ul>`
    },
    'Debugging': {
      title: 'Debugging',
      content: `<p>Debugging involves identifying, analyzing, and fixing errors or issues in code effectively. I am skilled at troubleshooting, optimizing code, and ensuring smooth, bug-free user experiences across browsers and devices.</p>
      <ul style='text-align:left; margin: 12px 0 0 0; color:#bbb; font-size:1rem;'>
        <li><b>Expertise:</b> JavaScript, React, Node.js, browser dev tools</li>
        <li><b>Approach:</b> Systematic testing, console debugging, breakpoints</li>
        <li><b>Results:</b> Reduced bug rates by 60% in recent projects</li>
        <li><b>Extra:</b> Experience with cross-browser and device compatibility fixes</li>
      </ul>`
    }
  };
  $('.service-link').on('click', function(e) {
    e.preventDefault();
    const card = $(this).closest('.service-card');
    const title = card.find('h4').text().trim();
    const detail = serviceDetails[title];
    if (detail) {
      $('.service-modal-body').html(`<h2 style='color:#00c6ff;margin-bottom:12px;'>${detail.title}</h2>${detail.content}`);
      $('.service-modal').fadeIn(200);
    }
  });
  $(document).on('click', '.service-modal-close, .service-modal-backdrop', function() {
    $('.service-modal').fadeOut(200);
  });
});
