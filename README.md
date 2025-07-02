# Personal Portfolio - Anmol Singh

## Overview
This is a personal portfolio website for Anmol Singh, a frontend web developer. The website showcases skills, services, portfolio projects, and contact information. It is built using HTML, CSS, and JavaScript, with additional libraries for animations and charts.

---

## Project Structure

```
portfolio-website-main/
│
├── index.html                # Main HTML file
├── css/
│   └── style.css             # Main stylesheet
├── images/                   # Project images
├── js/
│   └── script.js             # Main JavaScript file
├── Entry Level Web Developer Resume.pdf  # Resume download
└── README.md                 # Project documentation
```

---

## index.html
This is the main HTML file containing the structure of the website. It includes:

- **Navbar**: Responsive navigation bar with links to all sections.
- **Hero Section**: Introduction, profile image, social links, and download CV button.
- **Expertise Section**: Highlights services (Web Design, Web Development, Debugging) with modal popups for more info.
- **Skills Section**: Shows skill progress using animated charts (HTML, CSS, JavaScript, Node.js, ReactJS).
- **Portfolio Section**: Displays project cards with filter buttons (All, Web App, Website) and 'Read More' links.
- **Contact Section**: Contact form and details (location, phone, email).
- **Back to Top Button**: Scrolls the page to the top.
- **Footer**: Social links and copyright.

### Libraries Used
- [AOS](https://michalsnik.github.io/aos/) for scroll animations
- [Font Awesome](https://fontawesome.com/) for icons
- [Typed.js](https://mattboldt.com/demos/typed-js/) for typing animation
- [Chart.js](https://www.chartjs.org/) for skill charts
- [jQuery](https://jquery.com/) for DOM manipulation

---

## css/style.css
Contains all custom styles for layout, responsiveness, colors, and animations. Key parts:
- **Layout**: Flexbox and grid for responsive design
- **Animations**: Transitions, hover effects, and AOS integration
- **Theming**: Color palette and dark backgrounds

---

## js/script.js
Handles all interactive features:
- **Navbar toggle** for mobile
- **Portfolio filter** logic
- **Service modal** popups
- **Back to top** button functionality
- **Typed.js** initialization for animated text
- **Form validation** (if implemented)

---

## images/
Contains all images used in the website, including:
- Profile photo
- Portfolio project screenshots
- Service icons
- Decorative images

---

## Resume
A downloadable PDF resume is included for recruiters.

---

## How to Run
1. Download or clone the repository.
2. Open `index.html` in your browser.
3. All features work locally; no server required.

---

## Interview Preparation: Key Questions & Answers

### 1. **How is the website structured?**
- The site is divided into sections (Home, Services, About/Skills, Portfolio, Contact, Footer) using semantic HTML and CSS for layout.

### 2. **How is responsiveness achieved?**
- Flexbox, CSS Grid, and media queries ensure the site looks good on all devices.

### 3. **How are animations handled?**
- The AOS library is used for scroll-based animations. Custom CSS transitions are used for hover and modal effects.

### 4. **How does the portfolio filter work?**
- JavaScript listens for filter button clicks and shows/hides project cards based on their data attributes.

### 5. **How are skills visualized?**
- Chart.js (or custom JS/CSS) is used to animate circular progress bars for each skill.

### 6. **How is the contact form handled?**
- The form collects user input. (If connected to a backend or Google Sheets, explain the integration; otherwise, mention it is for demonstration.)

### 7. **What accessibility features are included?**
- Uses semantic HTML, alt attributes for images, and ARIA labels for icons and buttons.

### 8. **How is the code organized?**
- HTML for structure, CSS for styling, JS for interactivity. Assets are separated into folders for maintainability.

### 9. **How is the modal implemented?**
- The modal is hidden by default and shown via JS when a 'Read More' link is clicked. It uses CSS for positioning and transitions.

### 10. **How would you deploy this site?**
- Host the static files on GitHub Pages, Netlify, or Vercel for free deployment.

---

## Customization
- Update images and text in `index.html` and `images/`.
- Add or remove portfolio projects by editing the portfolio section.
- Modify skills and progress in the skills section.

---

## Credits
- [AOS](https://michalsnik.github.io/aos/)
- [Font Awesome](https://fontawesome.com/)
- [Typed.js](https://mattboldt.com/demos/typed-js/)
- [Chart.js](https://www.chartjs.org/)
- [jQuery](https://jquery.com/)

---

## License
This project is for personal and educational use.
