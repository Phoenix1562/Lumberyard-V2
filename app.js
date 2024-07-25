document.addEventListener('DOMContentLoaded', () => {
    const tourForm = document.getElementById('tour-form');
    const contactForm = document.getElementById('contact-form');
    const beerList = document.getElementById('beer-list');
    const navLinks = document.querySelectorAll('nav a');

    // Beers and Seltzers Data
    const beersAndSeltzers = [
        { name: "Lumber Jack Pale Ale", type: "Beer", description: "A light, hoppy ale with notes of pine and citrus.", abv: "5.5%" },
        { name: "Sawdust Stout", type: "Beer", description: "A rich, dark beer with flavors of coffee and chocolate.", abv: "6.2%" },
        { name: "Nail Hammer IPA", type: "Beer", description: "A bold, hoppy beer with a strong citrus aroma.", abv: "7.1%" },
        { name: "Planer's Pilsner", type: "Beer", description: "A crisp, refreshing lager with a clean finish.", abv: "4.8%" },
        { name: "Cedar Seltzer", type: "Seltzer", description: "A light, effervescent seltzer with a hint of cedar.", abv: "4.5%" },
        { name: "Maple Wood Wheat", type: "Beer", description: "A smooth wheat beer with subtle maple undertones.", abv: "5.3%" }
    ];

    function renderBeersAndSeltzers() {
        beerList.innerHTML = beersAndSeltzers.map(item => `
            <div class="beer-card bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                <h3 class="text-2xl font-bold mb-2">${item.name}</h3>
                <p class="text-gray-600 mb-2">${item.type} | ABV: ${item.abv}</p>
                <p class="text-gray-800">${item.description}</p>
            </div>
        `).join('');
    }

    renderBeersAndSeltzers();

    // Smooth scrolling for navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // Handle tour form submission
    tourForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const date = document.getElementById('date').value;
        
        // Here you would typically send this data to a server
        console.log(`Tour Scheduled: Name: ${name}, Email: ${email}, Phone: ${phone}, Date: ${date}`);
        
        alert('Thank you for scheduling a tour! We will contact you soon to confirm your appointment.');
        tourForm.reset();
    });

    // Handle contact form submission
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('contact-name').value;
        const email = document.getElementById('contact-email').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send this data to a server
        console.log(`Message Sent: Name: ${name}, Email: ${email}, Message: ${message}`);
        
        alert('Thank you for your message! We will get back to you as soon as possible.');
        contactForm.reset();
    });

    // Intersection Observer for fade-in effect
    const fadeElements = document.querySelectorAll('.fade-in');
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(element => {
        fadeObserver.observe(element);
    });

    // Add parallax effect to the hero section
    const heroSection = document.getElementById('home');
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        heroSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });
});